import fs from "fs";
import path from "path";

const filePath = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "entrada.txt"
);
const input = fs.readFileSync(filePath, "utf8");
const lines = input.split("\n");

/**
 * Escreva a sua solução aqui abaixo
 */
const salario = Number(lines[1]);
const totalDeVendasEmReais = Number(lines[2]);

console.log("TOTAL = R$ " + (totalDeVendasEmReais * 0.15 + salario).toFixed(2));
