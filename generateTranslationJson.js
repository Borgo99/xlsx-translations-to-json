#! /usr/bin/env node
const fs = require("fs");
var XLSX = require("xlsx");

const PATHNAME = process.argv.at(2);
const FILENAME = "translations.xlsx";

const write = (data) => {
  Object.keys(data).forEach((key) => {
    fs.writeFile(
      PATHNAME ? `${PATHNAME}/${key}.json` : `${key}.json`,
      JSON.stringify(data[key], null, 2),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
};

const workbook = XLSX.readFile(FILENAME);

// number of keys
const lang_number = Object.keys(workbook.Sheets[workbook.SheetNames[0]]).filter(
  (v) => v.length === 2 && v.at(1) === "1"
).length;
const languages = workbook.Strings.slice(1, lang_number).map((v) => v.t);

const translations = {};
languages.forEach((lang) => (translations[lang] = {}));

let current_key = null;
Object.values(workbook.Sheets[workbook.SheetNames[0]])
  .slice(1 + lang_number, -1)
  .forEach(({ v }, i) => {
    if (i % lang_number === 0) {
      current_key = v;
      return;
    }
    translations[languages[(i % lang_number) - 1]][current_key] = v.replaceAll(
      "\\n",
      "\n"
    );
  });

write(translations);
console.log("*Done!*");
