import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from "../assets/pokeball.png";
import Footer from '../components/Footer';
import styles from './pokemon.module.css';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';


const pokemon = () => {
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        async function getPokemon() {
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon);
        }
        getPokemon();
    }, [name]);

    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Go Back
            </button>
            <div className={styles.pokemon} >
                <main className={styles.pokemonInfo} >
                    <div className={styles.pokemonTitle} >{name?.toUpperCase()}</div>
                    <div>Nr. {pokemon?.id}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.imgSrc} />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack:  {pokemon?.attack}</div>
                    <div>Defense:  {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default pokemon;