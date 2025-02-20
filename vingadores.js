var personagem = {
    nome: '',
    codinome: '',
    armaPrincipal: '',
    armaSecundaria: '',
    velocidade: 0,
    forca: 0,
    resistencia: 0,
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.armaPrincipal + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nível de força: ' + this.forca + '\n' +
            'Nível de velocidade: ' + this.velocidade + '\n' +
            'Nível de resistencia: ' + this.resistencia + '\n';
    }
};
var homemFerro = Object.create(personagem);
homemFerro.nome = 'Tony Stark';
homemFerro.codinome = 'Homem de Ferro';
homemFerro.armaPrincipal = 'Repulsores de mão';
homemFerro.armaSecundaria = 'Mísseis guiados';
homemFerro.velocidade = 75;
homemFerro.forca = 80;
homemFerro.resistencia = 85;
var capitaoAmerica = Object.create(personagem);
capitaoAmerica.nome = 'Steve Rogers';
capitaoAmerica.codinome = 'Capitão América';
capitaoAmerica.armaPrincipal = 'Escudo de Vibranium';
capitaoAmerica.armaSecundaria = '';
capitaoAmerica.velocidade = 70;
capitaoAmerica.forca = 75;
capitaoAmerica.resistencia = 85;
var hulk = Object.create(personagem);
hulk.nome = 'Bruce Banner';
hulk.codinome = 'Hulk';
hulk.armaPrincipal = 'Força bruta';
hulk.armaSecundaria = '';
hulk.velocidade = 60;
hulk.forca = 100;
hulk.resistencia = 100;
var thor = Object.create(personagem);
thor.nome = 'Thor';
thor.codinome = 'Thor';
thor.armaPrincipal = 'Mjolnir';
thor.armaSecundaria = 'Poderes de Raio';
thor.velocidade = 80;
thor.forca = 100;
thor.resistencia = 95;
var viuvaNegra = Object.create(personagem);
viuvaNegra.nome = 'Natasha Romanoff';
viuvaNegra.codinome = 'Viúva Negra';
viuvaNegra.armaPrincipal = 'Pistolas';
viuvaNegra.armaSecundaria = '';
viuvaNegra.velocidade = 80;
viuvaNegra.forca = 65;
viuvaNegra.resistencia = 60;
var gaviaoArqueiro = Object.create(personagem);
gaviaoArqueiro.nome = 'Clint Barton';
gaviaoArqueiro.codinome = 'Gavião Arqueiro';
gaviaoArqueiro.armaPrincipal = 'Arco e flechas';
gaviaoArqueiro.armaSecundaria = '';
gaviaoArqueiro.velocidade = 75;
gaviaoArqueiro.forca = 70;
gaviaoArqueiro.resistencia = 65;
var thanos = Object.create(personagem);
thanos.nome = 'Thanos';
thanos.codinome = 'Thanos';
thanos.armaPrincipal = 'Manopla do Infinito';
thanos.armaSecundaria = 'Força bruta';
thanos.velocidade = 70;
thanos.forca = 100;
thanos.resistencia = 100;
var herois = [homemFerro, capitaoAmerica, hulk, thor, viuvaNegra, gaviaoArqueiro, thanos];
console.log("\n=== DESCRIÇÃO DOS PARTICIPANTES ===");
herois.forEach(function (heroi, index) {
    console.log("\nParticipante ".concat(index + 1, ":"));
    console.log(heroi.descricao());
});
function compararHerois(heroi1, heroi2, numeroDuelo) {
    console.log("Duelo ".concat(numeroDuelo));
    console.log(heroi1.codinome);
    console.log("vs");
    console.log(heroi2.codinome);
    var atributos = ['forca', 'velocidade', 'resistencia'];
    var vitorias1 = 0;
    var vitorias2 = 0;
    console.log("\nResultados por atributo:");
    atributos.forEach(function (atributo) {
        if (heroi1[atributo] > heroi2[atributo]) {
            console.log("".concat(atributo, ": ").concat(heroi1.codinome, " vence com ").concat(heroi1[atributo], " vs ").concat(heroi2[atributo]));
            vitorias1++;
        }
        else if (heroi2[atributo] > heroi1[atributo]) {
            console.log("".concat(atributo, ": ").concat(heroi2.codinome, " vence com ").concat(heroi2[atributo], " vs ").concat(heroi1[atributo]));
            vitorias2++;
        }
        else {
            console.log("".concat(atributo, ": Empate com ").concat(heroi1[atributo], " pontos"));
        }
    });
    console.log("\nResultado final:");
    if (vitorias1 > vitorias2) {
        console.log("".concat(heroi1.codinome, " vence por ").concat(vitorias1, " a ").concat(vitorias2, "!\n"));
    }
    else if (vitorias2 > vitorias1) {
        console.log("".concat(heroi2.codinome, " vence por ").concat(vitorias2, " a ").concat(vitorias1, "!\n"));
    }
    else {
        console.log("Empate!\n");
    }
}
var numeroDuelo = 1;
for (var i = 0; i < herois.length - 1; i++) {
    for (var j = i + 1; j < herois.length; j++) {
        compararHerois(herois[i], herois[j], numeroDuelo);
        numeroDuelo++;
    }
}
