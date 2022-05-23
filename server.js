const fs = require("fs"); // Import de Filesystem
const path = require("path"); // Import de path (module nodejs)
const express = require("express"); // Import de express (après installation)
const app = express(); // Initialisation de express
const port = 3030;

// Import du fichier JSON
let database = JSON.parse(fs.readFileSync("pokedex.json"));
// let = déclaration de variable dans le scope dans lequel il est

// Route = chemin d'accès vers une page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/js/pokemon.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/js/pokemon.js"));
});

app.get("/types", (req, res) => {
  res.send(database.types);
});

// :filter est une partie variable dans l'URL de requete
app.get("/pokemons/:filter", (req, res) => {
  // récupération du paramètre filter dans la requete
  const filter = req.params.filter;
  let filteredList;

  if (filter === "all") {
    res.send(database.pokemons);
  } else {
    filteredList = getPokemonByType(filter, database.pokemons);
  }

  if (filteredList.length > 0) {
    res.send(filteredList);
  } else {
    res.status(404).send({ message: "Aucun pokémon trouvé!" });
    // 200 OK, 301 Redirection temp, 302 redirection perm, erreurs 403 accès interdit, 404 page non trouvée, 500 erreurs serveur
  }
});

// Exécute le serveur
app.listen(port, () => {
  // arrow function en callback
  console.log(`Pokedex listening on port ${port}`);
});

// Fonction pour filtrer les pokemons
const getPokemonByType = (type, pkmnList) => {
  let filteredList = [];
  for (let pokemon of pkmnList) {
    // Pour chaque pokemon de la list
    for (let name of pokemon.types) {
      // Pour chaque type du pokemon en cours
      if (name.nom === type.charAt(0).toUpperCase() + type.slice(1)) {
        filteredList.push(pokemon); // On ajoute le pokemon dans le tableau
      }
    }
  }

  return filteredList;
};
