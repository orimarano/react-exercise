import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { advance, selectPokemon, pokeInfoAsync } from './pokecardSlice';

export function PokeCard()
{
    const dispatch = useDispatch();
    const pokemon  = useSelector(selectPokemon);
    const [pokemonId, setPokemonId] = useState(1);

    useEffect(() => {
        dispatch(pokeInfoAsync(pokemonId));
      }, [dispatch, pokemonId]);

    return (
        <div>
            <h1>{pokemon.pokecard.name}</h1>
            <img src={pokemon.pokecard.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}