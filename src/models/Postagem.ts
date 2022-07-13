import Tema from "./Tema";
import User from "./User";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    date: string;
    tema?: Tema | null;
    usuario: User | null;
}