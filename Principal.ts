declare function require(msg:string) : any;
var readline = require('readline-sync');

import{Funcionario} from "./Funcionario";
import{Professor} from "./Professor";
import{STA} from "./STA";
import{Terceirizado} from "./Terceirizado";

let funcionarios : Array<Funcionario> = [];
let comando : string = readline.question("Digite um comando: \n 1 - add professor \n 2 - add STA \n 3 - add terceirizado \n mostrar: show \n excluir: rem");

if(comando == "1"){
    let n : string = readline.question("Digite o nome: ");
    let cla : string = readline.question("Digite a classe: ");
    let diaria : number = readline.question("Número de diarias: ")
    let rem : boolean = readline.question("excluir: ");
    let prof: Professor = new Professor(n, cla, diaria, rem); // novo objeto
    funcionarios.push(prof);
}
else if(comando == "2"){
    let level : number = readline.question("Digite o nível: ");
    let n : string = readline.question("Digite o nome: ");
    let diaria: number = readline.question("Número de diarias: ");
    let rem : boolean = readline.question("excluir: ");
    let sta: STA = new STA(level, n, diaria, rem);
    funcionarios.push(sta);
}
else if(comando == "3"){
    let horas : number = readline.question("Digite as horas trabalhadas: ");
    let insalubre: boolean = readline.question("Digite se é insalubre: ");
    let n : string = readline.question("Digite o nome: ");
    let diaria: number = readline.question("Número de diarias: ");
    let rem : boolean = readline.question("excluir: ");
    let ter: Terceirizado  = new Terceirizado(horas, insalubre, n, diaria, rem);
    funcionarios.push(ter)
    }

else if(comando == "show"){
    let mostra: string = readline.question("Digite o nome: ");
    let f: Funcionario|undefined = undefined;
    for(let i of funcionarios){
        if(i.getNome() == mostra){
            f = i ;
        }
    }
    if(f == undefined){
        console.log("não existe");
    }
    else{
        console.log(f);
    } 
}