import { Domain } from "./domain";
import { Sexo } from "../enum/sexo.enum";
import { SituacaoFamiliar } from "../enum/situacao-familiar.enum";
import { Raca } from "../enum/raca.enum";

export class DadosDemograficos extends Domain {

    public sexo:Sexo;
    public mae:String;
    public pai:String;
    public situacaoFamiliar:SituacaoFamiliar;
    public raca:Raca;
    public comentario:String;
    public obitoFonte:String;
    public nascimentoPluralidade:String;
    public nascimentoOrdem:String;
    public nascimentoSeguimento:String;
    public municipio:String;
    public estado:String;
    public pais:String;
    public dataEntradaPais:Date;

    public nascimento:Date;
    public nascimentoAcuracia:String;

    public obito:Date;
    public obitoAcuracia:String;
}
