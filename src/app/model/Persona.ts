import { BeniPosseduti } from './BeniPosseduti';

export class Persona {
    id: Number;
    nome: String;
    cognome: String;
    email: String;
    beni: Array<BeniPosseduti>;
}