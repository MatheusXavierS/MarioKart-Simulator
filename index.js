const mario = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const bowser = {
  NOME: "Bowser",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const peach = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const luigi = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const yoshi = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const kong = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};


let corredores = [mario, bowser, peach, luigi, yoshi, kong];
let result = "";

async function getRandomBlock() {
  switch (true) {
    case Math.random() < 0.33:
      result = "RETA";
      break;
    case Math.random() < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function startRace(corredores){
    for (let volta = 1; volta <= 5; volta++) {
        console.log(`\n--- Volta ${volta} ---`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);{
        corridaBlock(block, corredores);
        }
    }
}

dadosCorredor = () => { return Math.floor(Math.random()* 6) + 1}

async function corridaBlock(block, corredores) {
  if (block === "RETA") {
    for (let corredor of corredores) {
      dadosRodados = dadosCorredor();
      console.log(`${corredor.NOME} jogou o dado e tirou: ${dadosRodados}`);
      console.log(`Velocidade de ${corredor.NOME}: ${dadosRodados} + ${corredor.VELOCIDADE} = ${dadosRodados + corredor.VELOCIDADE}`);
      console.log('-------------------------');
      corredor.PONTOS += dadosRodados + corredor.VELOCIDADE;
    }
  } else if (block === "CURVA") {
    for (let corredor of corredores) {
      dadosRodados = dadosCorredor();
      console.log(`${corredor.NOME} jogou o dado e tirou: ${dadosRodados}`);
      console.log(`Manobrabilidade de ${corredor.NOME}: ${dadosRodados} + ${corredor.MANOBRABILIDADE} = ${dadosRodados + corredor.MANOBRABILIDADE}`);
      console.log('-------------------------');
      corredor.PONTOS += dadosRodados + corredor.MANOBRABILIDADE;
    }
  } else if (block === "CONFRONTO") {
    for (let corredor of corredores) {
      dadosRodados = dadosCorredor();
      console.log(`${corredor.NOME} jogou o dado e tirou: ${dadosRodados}`);
      console.log(`Poder de ${corredor.NOME}: ${dadosRodados} + ${corredor.PODER} = ${dadosRodados + corredor.PODER}`);
      console.log('-------------------------');
      corredor.PONTOS += dadosRodados + corredor.PODER;
    }
  }
}


async function winnerList(corredores) {
  const ordenados = [...corredores].sort(
    (a, b) => b.PONTOS - a.PONTOS
  );
  let colocacao = 1;
  let ultimoPonto = null;
  const resultado = ordenados.map((corredor, index) => {
    if (ultimoPonto !== null && corredor.PONTOS < ultimoPonto) {
      colocacao = index + 1;
    }

    ultimoPonto = corredor.PONTOS;

    return {
      colocacao,
      nome: corredor.NOME,
      pontos: corredor.PONTOS
    };
  });
  console.log(resultado);
}


(async function main() {
  console.log("Iniciando a Corrida do Mario Kart🏁");
  await startRace(corredores);
  await winnerList(corredores);
})();
