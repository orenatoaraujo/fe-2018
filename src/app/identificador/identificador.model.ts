export class Identificador {
 
    public id: number;

    constructor(
        public documento: number,
        public numero: number,
        public designacao: string,
        public area: string,
        public emissor: string,
        public data: Date,
        
        public certidao: number,
        public cartorio: string,
        public livro: string,
        public folha: number,
        public termo: string,
        
        public serie: number,
        public estado: number,
        
        public secao: number,
        public zona: number
    ) {}
}