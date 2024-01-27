
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <samp class="number">#001</samp>
            <samp class="name">${pokemon.name}</samp>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
