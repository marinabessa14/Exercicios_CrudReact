import React, {component} from 'react';


export default class Exercicio1 extends Component {
 constructor(props) {
     super(props);



this.state = {
    nota1: 0,
    nota2: 0,
    media: 0,
    informacao:""
};

 }
    }
    render() {
        return (
            
      <div>
      <label htmlFor="nota1">Nota 1</label>
      <input id="nota1"
      onChange = {this.handleInput.bind(this)}
      value={this.state.nota1}/>      

      <label htmlFor="nota2">Nota 2</label>
      <input id="nota2"
      onChange = {this.handleInput.bind(this)}
      value={this.state.nota2}/>      

      <button onClick={this.calcular.bind(this)>}>
      Calcular
   </button>
   <div>Media: {this.state.media}</div>
   <div>{this.state.situacao}</div>

</div>

);
            
}

handleInput(e) {
    this.setState({
        [e.target.id]: e.target.value

    }, () => {;

    this.calcular();

}

calcular() {
    var n1 = parseInt(this.state.nota1);
    var n2 = parseInt(this.state.nota2);
    var m = (this.state.nota1 + this.state.nota2) / 2;
    this.setState((media: m));

    if (m >= 70) {
        this.setState((informacao: "aprovado"));

    } else {
        this.setState((informacao: "reprovado"));
    }
}
}