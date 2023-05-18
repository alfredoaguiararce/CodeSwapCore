import * as dotenv from "dotenv";
dotenv.config({ path: './.env' });
import { TranformCode, ConfigureKey, CodePatterns } from './src/Index';
import { ProgrammingLanguages } from "./src/EnumPatterns";

dotenv.config();
let APIKEY = process.env.OPENAI_API_KEY;
if(APIKEY == undefined) throw new Error("APIKEY not found in .env file");

ConfigureKey(APIKEY);

const InitCode : String= `{
    "ProcessAreasIds": [
    40000
    ],
    "Site": 110,
    "Operation": 3,
    "FileNumber": "211",
    "IsDeletionAccepted": false
    }`;

const TargetLanguage : ProgrammingLanguages = ProgrammingLanguages.Ruby;
const Pattern : CodePatterns = CodePatterns.Class;
console.log("----");
TranformCode(InitCode, TargetLanguage, Pattern)
.then(newcode => {
  console.log("🚀 ~ file: Sample.ts:56 ~ GetQuery ~ newcode:", newcode)
});