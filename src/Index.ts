// Import OpenAI and Utils modules
import { Configuration, OpenAIApi } from 'openai';
import { CodePatterns,  ProgrammingLanguages } from './EnumPatterns';

// Initialize variables for OpenAI configuration and API
let configuration: Configuration | undefined = undefined;
let openai: OpenAIApi | undefined = undefined;

/**
 * The function configures an OpenAI API key for use in TypeScript.
 * @param apiKey - The API key for the OpenAI API. This key is used to authenticate and authorize
 * access to the OpenAI API services.
 */
function ConfigureKey(apiKey: string): void {
  // Create a new configuration object using the API key
  configuration = new Configuration({
    apiKey: apiKey,
  });

  // Check if the configuration object is undefined and throw an error if it is
  if(configuration == undefined) throw new Error("Please configure with a valid OPEN API KEY");

  // Create a new OpenAI API object using the configuration object
  openai = new OpenAIApi(configuration);
}


/**
 * This is a TypeScript function that uses the OpenAI API to transform code from one language or
 * pattern to another.
 * @param {String} InitCode - The initial code that needs to be transformed.
 * @param {ProgrammingLanguages} TargetLanguage - The target programming language that the initial code
 * should be transformed into.
 * @param {CodePatterns} [Pattern] - Optional parameter that specifies the code pattern to transform
 * the initial code into. If not provided, the OpenAI API will generate an equivalent code in the
 * target language without a specific pattern.
 * @returns a Promise that resolves to a string, which is the transformed code generated by the OpenAI
 * API based on the input parameters.
 */
async function TranformCode(InitCode: String, TargetLanguage: ProgrammingLanguages, Pattern?:CodePatterns): Promise<String> {
  // Check if the OpenAI API object is undefined and throw an error if it is
  if (openai == undefined) throw new Error('Please configure key first by calling configureKey()');

  const Prompt = `Transform the following code enclosed in triple quotes ''' ${InitCode} ''' in a --- ${Pattern} --- or a quivalent code in---${TargetLanguage}--- language. Only return  the generated code result, without additional data.`;

  // Send the prompt to the OpenAI API to generate the filter code
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: Prompt,
    temperature: 0,
    max_tokens: 100,
    n: 1,
  });

  // Get the generated text from the response
  const GeneretedText: String | undefined = response.data.choices[0].text;

  // Check if the generated text is undefined and throw an error if it is
  if(GeneretedText == undefined) throw new Error("There's not response for the prompt");

  // Trim the generated text and evaluate it as JavaScript code to get the filtered array
  const NewCode = GeneretedText.trim();

  // Return the filtered array
  return NewCode;
}


/* This line of code is exporting the `TranformCode`, `ConfigureKey`, and `CodePatterns` functions and
making them available for use in other modules or files. This allows other modules to import and use
these functions in their own code. */
export { TranformCode, ConfigureKey, CodePatterns};