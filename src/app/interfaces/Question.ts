import { Answer } from "./Answer";
import { IEntity } from "./IEntity";

export interface Question extends IEntity<string> {
    userId?: string;
    title: string;
    description: string;
    subject: string,
    tags?: string[];
    answers?: Answer[];
}