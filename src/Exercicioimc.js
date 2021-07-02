Import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0.0,
      altura: 0.0,
      imc: 0.0,
      situacao: ""
    };
  }

  render() {
    return (

            <div>
             <h3>IMC</h3>
             <label htmlFor="peso">
                Peso:
             </label>
             <input id="peso"
             onChange={this.handlePeso.bind(this)}
             value={this.state.peso}/>
      
      
             <label htmlFor="altura">
              Altura:
             </label>
             <input id="altura">
             onChange={this.handleAltura.bind(this)}
             value={this.state.altura}/>
      
             <div>IMC:{this.state.imc}</div>
             <div>Situação: {this.state.situacao}</div>
        </div>
      </div>
         
        </div>
      
      
      
          }
        }
    );
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  calcular() {
    var s;
    var imc = this.state.peso / (this.state.altura * this.state.altura);

    if (imc < 21) {
      s = "Magrelo";
    } else if (imc >= 21 && imc < 24) {
      s = "Magro";
    } else if (imc >= 24 && imc < 26) {
      s = "Em forma";
    } else if (imc >= 26 && imc < 29) {
      s = "Gordinho";
    } else if (imc >= 29) {
      s = "Gordo";
    }

    this.setState({ imc: imc });
    this.setState({ situacao: s });
  }
}
