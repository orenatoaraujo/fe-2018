export class Comunicacao {
    
       public id: number;
   
       constructor(
           public meio: string,
           public preferencia: string,
           public detalhe: string,
           public uso: string
       ) {}
   }