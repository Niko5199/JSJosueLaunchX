import { InterPoke } from '../interfaces/pokemon';

const pokemonInput = document.querySelector('#pokemon') as HTMLInputElement;
const namePoke = document.querySelector('.namePoke') as HTMLElement;
const imgPoke = document.querySelector('.imgPoke') as HTMLImageElement;
const typePoke = document.querySelector('.tipos') as HTMLUListElement;
const ulPokemon = document.querySelector('.movimientos') as HTMLUListElement;
const estaPoke = document.querySelector('.poke-esta') as HTMLUListElement;

function renderPokemon(data: InterPoke) {
  ulPokemon.textContent = '';
  typePoke.textContent = '';
  estaPoke.textContent = '';
  namePoke.textContent = `${data.name[0].toUpperCase() + data.name.slice(1)}`;
  imgPoke.setAttribute(
    'src',
    `${data.sprites.other?.dream_world.front_default}`
  );

  data.abilities.forEach(item => {
    ulPokemon.insertAdjacentHTML(
      'beforeend',
      `
        <li>${item.ability.name}</li>
      `
    );
  });

  data.types.forEach(item => {
    typePoke.insertAdjacentHTML(
      'beforeend',
      `
        <li>${item.type.name}</li>
      `
    );
  });

  estaPoke.insertAdjacentHTML(
    'beforeend',
    `
    <li> El peso es: ${data.weight}</li>
    <li> La altura es: ${data.height}</li>
    <li> Numero de pokemon: ${data.order}</li>

  `
  );

  data.stats.forEach(item => {
    estaPoke.insertAdjacentHTML(
      'beforeend',
      `
        <li>${item.stat.name}: ${item.base_stat}</li>
      `
    );
  });

  pokemonInput.value = '';
  pokemonInput.blur();
}

export default renderPokemon;
