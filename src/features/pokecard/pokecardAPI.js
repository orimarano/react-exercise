export function fetchPokeInfo(id = 1) {
    return new Promise((resolve) => {
        resolve(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
    })
}