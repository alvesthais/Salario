import {Funcionario} from "./Funcionario";

export class Professor extends Funcionario{
    private classe: string;

    public constructor(classe: string, nome: string, diaria: number,remover: boolean){
        super(nome, diaria, remover);
        this.classe = classe;
    }
    //metodos
    public calcSalario(): number{
        if(this.classe == "A"){
            return 3000 + (this.getDiaria()* 100);
        }
        if(this.classe == "B") {
            return 5000 + (this.getDiaria()* 100);
        }
        if(this.classe == "C"){
            return 7000 + (this.getDiaria()* 100);
        }
        if(this.classe == "D"){
            return 9000 + (this.getDiaria()* 100);
        }
        if(this.classe == "E"){
            return 11000 + (this.getDiaria()* 100);
        }

        }
    }
