import React, {component} from 'react';


export default class Exercicio2 extends Component {
 constructor(props) {
     super(props);
     this.state = {
       quantidade: 0,
        valorunitario: 0,
        valortotal: 0,
       
    }
  }


  render() {
    return {
      <div>
       <h3>Exercicio 2</h3>
       <label htmlFor="quantidade">
          Quantidade:
       </label>
       <input id="quantidade"
       onChange={this.handleQuantidade.bind(this)}
       value={this.state.quantidade}/>


       <label htmlFor="valorunitario">
         Valor Unitatário:
       </label>
       <input id="valorunitario">
       onChange={this.handleValor.bind(this)}
       value={this.state.valorunitario}/>

       <div>Valor Total: {this.state.valortotal}</div>

       </div>
      

    }
  }
  
  handleQuantidade(e) {
    var q = e.target.value;
    var total = q * this.state.valorunitario;
    this.setState({
      quantidade: q,
      valortotal: total;

    });
  }

  handleValor(e) {
    var q = e.target.value;
    var total = q * this.state.quantidade;
    this.setState({
      valorunitario: v,
      valortotal: total

    });

  }

}
