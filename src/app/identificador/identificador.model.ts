export class Identificador {
 
    public id: number;

    constructor(
        public tipo: number,
        public numero: number,
        public designacao: string,
        public area: string,
        public emissor: string,
        public data: Date,

        public certidao: string,
        public cartorio: string,
        public livro: number,
        public folha: number,
        public termo: number,
        
        public serie: number,
        public estado: string,
        
        public secao: number,
        public zona: number
    ) {}
}