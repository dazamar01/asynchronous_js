function getPokemon() {
  return new Promise((resolve, reject) => {
    const serverUrl = `https://pokeapi.co/api/v2/pokemon/25`;
    fetch(serverUrl)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getAsyncAwaitPokemon() {
  console.log("Before doing the call");
  const pokemonData = await getPokemon();
  console.log("Pokemon's data: ", pokemonData);
  console.log("After doing the call");
  document.getElementById("pokemon-img").src = pokemonData.sprites.back_default;
}
