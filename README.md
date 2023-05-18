# CodeSwapCore

![https://img.shields.io/badge/License-MIT-yellow.svg](https://img.shields.io/badge/License-MIT-yellow.svg)

![https://img.shields.io/badge/TypeScript-Ready-blue.svg](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

![https://img.shields.io/badge/JavaScript-ES5-yellow.svg](https://img.shields.io/badge/JavaScript-ES5-yellow.svg)

CodeSwapCore is a TypeScript and JavaScript-based library that utilizes the OpenAI API to convert code from one programming language to another. It supports various code patterns such as class, interface, record, and more.

## Installation

```bash
npm install codeswapcore
```

## Usage

Please note that you should replace `'YOUR_OPENAI_API_KEY'` with your actual OpenAI API key.

```tsx
import { TranformCode, ConfigureKey, CodePatterns } from 'codeswapcore';
import { ProgrammingLanguages } from 'codeswapcore';

// Configure your OpenAI API key
ConfigureKey('YOUR_OPENAI_API_KEY');

// Define your initial code and specify the target language and code pattern
const initCode = `...`;
const targetLanguage = ProgrammingLanguages.Ruby;
const pattern = CodePatterns.Class;

// Transform the code
TranformCode(initCode, targetLanguage, pattern)
  .then(newCode => {
    console.log('Transformed code:', newCode);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## **License**

CodeSwapCore is released under the **[MIT License](https://github.com/alfredoaguiararce/CodeSwapCore/blob/main/LICENSE)**.

## **Contributing**

If you want to contribute to the project, you can do the following:

- Report bugs or suggest improvements using the GitHub issues system.
- Propose new features or improve documentation using pull requests.

## **License**

This project is distributed under the MIT license. See the LICENSE file for more details.

If you find useful, consider supporting the project by making a donation via PayPal:

[Support in Paypal ♥️](https://www.paypal.com/donate/?hosted_button_id=Z6KKYZKYY25CW)