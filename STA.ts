import {Funcionario} from "./Funcionario";

export class STA extends Funcionario{
    private nivel: number;

    public constructor(nivel: number, nome: string, diaria: number, remover: boolean){
        super(nome, diaria, remover)
        this.nivel = nivel;
    }
    //metodos
    public cSalario(): number{
        let salario: number = 3000 + (300*this.nivel);
        return salario;
    }
    //encapsulamento
    public getNivel(): number{
        return this.nivel;
    }
    public setNivel(nivel : number): void{
        this.nivel= nivel;
    }
}