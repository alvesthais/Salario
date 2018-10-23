export class Funcionario{
    private nome: string;
    private diaria: number;
    private remover: boolean;

    public constructor(nome: string, diaria: number, remover: boolean){
        this.nome = nome;
        this.diaria = diaria;
        this.remover = remover;
    } 
    public getNome(): string{
        return this.nome;
    } 
    public setNome(nome: string): void{
        this.nome = nome;
    }
    public getDiaria(): number{
        return this.diaria;
    }
    public setDiaria(diaria: number): void{
        this.diaria = diaria;
    }
    public getRemover(): boolean{
        return this.remover;
    }
    public setRemover(remover: boolean){
        this.remover = remover;
    }
    
    //metodo
    public calcularSalario(): void{

        }
    public mostrar(): string{
        //colocar o passo a passo aqui
        return this.nome;
    }
    public remove(): boolean{
        //colocar o passo a passo aqui
        return this.remover;
    }
}
