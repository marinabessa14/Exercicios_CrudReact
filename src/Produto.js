import React, {Component} from 'react';

export default class Produto extends Component {
    render() {
        return (
            <div>
                 <hr/>
                <div>
                    Descrição: 
                    {this.props.descricao}
                </div>
                <div>
                    Marca:
                    {this.props.marca}
                </div>
                <div>
                    Preço:
                    {this.props.preco}
                </div>
            </div>
        );
    }
}