import { InterPoke } from '../interfaces/pokemon';

// const pokedex = document.querySelector('.pokedex') as HTMLDivElement;
const pokemon = document.querySelector('.pokemon') as HTMLDivElement;
const namePoke = document.querySelector('.namePoke');
const imgPoke = document.querySelector('.imgPoke') as HTMLImageElement;

export default function () {
  namePoke?.value = '';
}
