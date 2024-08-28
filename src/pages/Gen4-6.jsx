import PokemonGeneration from '../components/Pokemoncard'
import Genpage from './Genpages.module.css'

export default function Gen46 () {
    return (
        <main>
            <div className={Genpage.container}>
                <div className={Genpage.cont}>
                    <PokemonGeneration start={387} end={721} title="Pokémon Generations 4-6" />
                </div>
            </div>
        </main>
    )
}