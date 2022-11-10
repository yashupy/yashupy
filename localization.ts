import { readFileSync } from "fs";
import { Key_Culture } from "./model/key_culture.models";

export function GetLocalizedString(key:string,culture:string):string{
    const allCulture:Key_Culture[]  = GetAllLocalizedCulture(culture);
    const targetedObject: Key_Culture|undefined = allCulture.find(i=>i.key===key);
    return targetedObject?targetedObject.value:"";
}
export function GetAllLocalizedCulture(culture:string):Key_Culture[]{
   const file = readFileSync(`./dictionaries/${culture}.json`,"utf8");
   return JSON.parse(file) as Key_Culture[];
}