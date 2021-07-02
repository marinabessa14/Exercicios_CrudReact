import React, {Component} from 'react';
export default class Veiculo extends Component {
    state = {
        dados: []
    }
    componentDidMount() {
        fetch("http://127.0.0.1:5000/veiculo")
        .then((resultado) => resultado.json())
        .then((resultado) => {
            this.setState({
                dados: resultado
            })
        });
    }
    render() {
        return <ul>
            {
                this.state.dados.map((obj, index) => {
                    return <li key={index}>
                        {obj.idveiculo} -  {obj.modelo} - 
                        {obj.placa} - {obj.cor}
                        {obj.direcao} - {obj.ano}
                    </li>
                })
            }
        </ul>
    }
}