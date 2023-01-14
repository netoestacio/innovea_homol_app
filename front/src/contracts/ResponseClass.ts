import { Article } from "./Articles";

export class ResponseClass {
   status?: string;
   totalResults?: number;
   articles?: Article[];
}