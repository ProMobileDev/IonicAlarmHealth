import { Injectable } from "@angular/core";
import { LanguageModel } from "../models/language.model";

@Injectable()
export class LanguageService {
  languages : Array<LanguageModel> = new Array<LanguageModel>();

   constructor() {
     this.languages.push(
       {name: "English", code: "en"},
       {name: "Italian", code: "it"},
       {name: "Russian", code: "ru"}
     );
   }

   getLanguages(){
     return this.languages;
   }
 }
