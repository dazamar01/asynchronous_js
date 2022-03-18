// https://web.dev/promises/?gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqP_m-lulW52HWNA6v3ofcICZXpOPGBatm1A6lWW1PLxhS5PzCMaNpcaAlOUEALw_wcB
// https://pokeapi.co/docs/v2

// First, define the promisse
const promise = new Promise((resolve, reject) => {
  // doing a fetch call to pokeApi
  fetch(`https://pokeapi.co/api/v2/pokemon/25`)
    .then((res) => res.json())
    .then((data) => {
      // When server send us a response
      resolve(data);
    })
    .catch((err) => {
      // if something went wrong, reject the call
      reject(err);
    });
});

function callSyncFunction() {
  console.log("Before doing the call");
  promise.then(
    (data) => {
      console.log("Pokemon's data: ", data);
      document.getElementById("pokemon-img").src = data.sprites.back_default;
    },
    (err) => {
      console.log(err); // Error
    }
  );
  console.log("After doing the call");
}

// callPromise();
