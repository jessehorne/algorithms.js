const fs = require("fs");

const kleur = require("kleur");


// Print header
console.log("---- algorithms.js ----");

function printAlgorithms() {
  // Require all algorithms and print them.
  const algos = fs.readdirSync("./src/");

  if (algos.length == 0) {
    console.log("There are no algorithms yet.");
    return;
  }

  for (var i=0; i<algos.length; i++) {
    const a = require("./src/" + algos[i]);

    const title = kleur.blue().bold().underline(a.title);
    const types = kleur.grey().italic(a.types);
    const timeComplexity = kleur.green().bold(a.timeComplexity);
    const desc = kleur.white(a.desc);

    var p = `${title} - ${types} - ${timeComplexity} - ${desc}`;

    console.log(p);
  }
}

printAlgorithms();
