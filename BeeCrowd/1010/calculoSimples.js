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

function listaProdutosFactory(lines) {
  const listaProdutos = [];
  lines.forEach((line) => {
    const produto = line.split(" ").map((numero) => {
      return Number(numero);
    });
    listaProdutos.push(produto);
  });
  return listaProdutos;
}
const [produtoA, produtoB] = listaProdutosFactory(lines);
console.log(
  "VALOR A PAGAR: R$ " +
    (produtoA[1] * produtoA[2] + produtoB[1] * produtoB[2]).toFixed(2)
);
