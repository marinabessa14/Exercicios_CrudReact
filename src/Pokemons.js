import React, {component} from 'react';
export default class Poke extends Component {
    state = {
        dados: []
    }
    // método executado automaticate ao inserir o componente
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
        .then((resultado) => resultado.json())
        .then((resultado) => {
            this.setState({
                dados: resultado.results
            })
        })
    }
    render() {
        return <ul>
            {

                this.state.dados.map((obj, index) => {
                    return <li key={index}>{obj.name}</li>
                })
            }
        </ul>
    }
}