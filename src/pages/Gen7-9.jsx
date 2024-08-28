import PokemonGeneration from '../components/Pokemoncard'
import Genpage from './Genpages.module.css'

export default function Gen79 () {
    return (
        <main>
            <div className={Genpage.container}>
                <div className={Genpage.cont}>
                    <PokemonGeneration start={722} end={1010} title="Pokémon Generations 7-9" />
                </div>
            </div>
        </main>
    )
}