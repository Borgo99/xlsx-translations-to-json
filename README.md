# Multilingual Translation Script

This script is designed to simplify the process of developing multilingual projects, such as websites or native applications. It works seamlessly with libraries like i18n, enabling you to easily create applications that support multiple languages by simply updating a .xlsx file.

## Overview

The script takes a .xlsx file as input and generates a .json file for each language specified. Each JSON file will have the same set of keys, making it easy to manage translations across different languages.

## Usage

To run the script and save the generated JSON files in a directory called "foo", follow these steps:

1. Create a file named "translations.xlsx" with the following structure:

   | key  | lang1 | lang2 | langN |
   | ---- | ----- | ----- | ----- |
   | str1 | hi    | hola  | ciao  |
   | str2 | good  | bien  | bene  |
   | strN | bye   | adios | addio |

   Here, `key` represents the unique identifier for a translation, while `lang1`, `lang2`, `langN` represent the languages you want to support.

2. Open a terminal or command prompt and navigate to the directory where the script is located.

3. Install the script by running the following command:

   ```shell
   npm i xlsx-translations-to-json --save-dev
   ```

4. Execute the following command to run the script and save the JSON files:

   ```shell
   xlsx-translations-to-json foo
   ```

   Alternatively, you can use the shorthand command:

   ```shell
   xtj foo
   ```

   Make sure to replace foo with the desired path to the folder where you want to save the JSON files.

5. After executing the command, the script will generate a separate .json file for each language specified in the "translations.xlsx" file.

## Example Output

Based on the example provided above, the script will generate the following JSON files:

```json
// lang1.json
{
  "translation": {
    "str1": "hi",
    "str2": "good",
    "strN": "bye"
  }
}

// lang2.json
{
  "translation": {
    "str1": "hola",
    "str2": "bien",
    "strN": "adios"
  }
}

// langN.json
{
  "translation": {
    "str1": "ciao",
    "str2": "bene",
    "strN": "addio"
  }
}
```

This format works well with [i18n package](https://www.npmjs.com/package/i18next).
This is an example with React:

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang1 from "foo/lang1.json";
import langN from "foo/langN.json";

i18n.use(initReactI18next).init({
  // lng: "lang1",
  fallbackLng: "lang1",
  compatibilityJSON: "v3",
  resources: {
    lang1: lang1,
    langN: langN,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
```

Feel free to modify the keys, column names, and any other aspects to suit your specific project requirements.

Github: [GitHub repository](https://github.com/Borgo99/xlsx-translations-to-json).
