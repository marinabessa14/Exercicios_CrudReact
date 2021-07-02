import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modelo: "", 
        placa: "", 
        cor: "",
        direcao: "",
        ano: "",
    };

}

handleInput(e) {
    this.setState({
        [e.target.id]: e.target.value
    });
}

salvar() {
  var raw = JSON.stringify(this.state);

  var requestOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:5000/veiculos", requestOptions)
          .then(response => response.text())
          .then(result => {
              alert("registro salvo com sucesso");
          })
          .catch(error => console.log('error', error));
    }




  render() {
    return (

            <div>
             <h3>Veiculos</h3>
             <label htmlFor="modelo">
                Modelo:
             </label>
             <input id="modelo"
             onChange={this.handleInput.bind(this)}
             value={this.state.modelo}/>
      
      
             <label htmlFor="placa">
              Placa:
             </label>
             <input id="placa"
             onChange={this.handleInput.bind(this)}
             value={this.state.placa}/>
      
             <label htmlFor="cor">
              Cor:
             </label>
             <input id="cor"
             onChange={this.handleInput.bind(this)}
             value={this.state.cor}/>

             <label htmlFor="direcao">
              Direcao:
             </label>
             <input id="direcao"
             onChange={this.handleInput.bind(this)}
             value={this.state.direcao}/>

             <label htmlFor="ano">
              Ano:
             </label>
             <input id="ano"
             onChange={this.handleInput.bind(this)}
             value={this.state.ano}/>




             <div>Veiculo:{this.state.veiculo}</div>

       
      </div>
         
        
      
      
      
          
        
    );
  }
}
  
  
    
  

