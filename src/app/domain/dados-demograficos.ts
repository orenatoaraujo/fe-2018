import { Domain } from "./domain";
import { Sexo } from "../enum/sexo.enum";

export class DadosDemograficos extends Domain {

    public sexo:Sexo;
    public mae:String;
    public nascimento:Date;
    public nascimentoAcuracia:String;

}
