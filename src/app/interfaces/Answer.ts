import { IEntity } from "./IEntity";
import { Student } from "./Student";

export interface Answer extends IEntity<string> {
    userId: string;
    content: string; 
    stars: number;
    votes: number;
    createdAt: Date;
    student: Student;
}