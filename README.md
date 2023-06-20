This script is really helpful if your working on a project which has to support a multilangual environment. It works well with the library i18n.

To run it and save the json files in a directory called "foo", create a "translation.xlsx" file as below and the run.

- xlsx-translations-to-json foo
  or
- xtj foo

The file has to be called "translation.xlsx" and has to be build in the following way:

$$
key     lang1    lang2    langN
str1    hi        hola      ciao
str2    good      bien      bene
strN    bye       adios     addio
$$

You HAVE TO pass an argument which indicates the folder where to save the JSON files.

From the example above, the output would be 3 files:

$$
// lang1.json
{
  "str1": "hi",
  "str2": "good",
  "str3": "bye"
}
$$

$$
// lang2.json
{
  "str1": "hola",
  "str2": "bien",
  "str3": "adios"
}
$$

$$
// langN.json
{
  "str1": "ciao",
  "str2": "bene",
  "str3": "addio"
}
$$

Obviously you can change the keys and the column names as you like.
