import PokemonGeneration from '../components/Pokemoncard'
import Genpage from './Genpages.module.css'

export default function Gen13 () {
    return (
        <main>
            <div className={Genpage.container}>
                <div className={Genpage.cont}>
                    <PokemonGeneration start={1} end={386} title="Pokémon Generations 1-3" />
                </div>
            </div>
        </main>
    )
}