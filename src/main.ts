import { InterPoke } from './interfaces/pokemon';
import renderPokemon from './render/renderPokemon';

const btnInput = document.querySelector('button') as HTMLButtonElement;
const inputPokemon = document.querySelector('#pokemon') as HTMLInputElement;

const pokemon = function (name: string): Promise<InterPoke> {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data => {
      if (!data.ok) reject(new Error('El pokemon que buscas no existe!!'));
      resolve(data.json());
    });
  });
};

btnInput.addEventListener('click', function () {
  pokemon(inputPokemon.value.toLowerCase())
    .then((data: InterPoke) => {
      console.log(data);
      renderPokemon(data);
    })
    .catch((error: Error) => alert(`${error.message}`));
});
