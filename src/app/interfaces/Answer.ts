import { IEntity } from "./IEntity";

export interface Answer extends IEntity<string> {
    userId: string;
    stars: number;
    votes: number;
    createdAt: Date;
}