import {Funcionario} from "./Funcionario";

export class Terceirizado extends Funcionario{
    private horas: number;
    private insalubre: boolean;

    public constructor(horas: number, insalubre: boolean, nome: string, diaria: number, remover: boolean){
        super(nome, diaria, remover);
        this.horas = horas;
        this.insalubre = insalubre;
    }
    //metodo
    public cSalario(): number{
        let salario: number = (this.getHoras() *4);
        if(this.insalubre){
            salario += 500;
        }
        return salario;
    }
    //encapsulamento
    public getHoras(): number{
        return this.horas;
    }
    public setHoras(horas: number): void{
        this.horas = horas;
    }
    public isInsalubre(): boolean{
        return this.insalubre;
    }
    public setInsalubre(insalubre: boolean): void{
        this.insalubre = insalubre;
    }
}