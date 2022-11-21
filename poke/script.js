const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('#btn-search');
const pokeContainer = document.querySelector('#poke-container');

const pokePokemon = 15;

const initPokemon = async() => {
    for (let i = 1; i <=pokeCount; i++) {
        await getPokemon(i);
        }
};

const getPokemon = async(id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createPokemonBox(data);
};

const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    const color = colors[type];

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('poke-box');

    pokemonEl.innerHTML = `
    <img 
    src="https://assets.pokemon.com/assets/cm2/img/pokedex/full/${id}.png"
    alt="${name} image"
    />
    

    
    `
}

initPokemon();