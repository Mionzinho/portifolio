import Botao from './Botao';
import React, { Component } from 'react';
import fire from '../fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('nome').push( this.inputNome.value );
    fire.database().ref('email').push( this.inputEmail.value );
    fire.database().ref('msg').push( this.inputMsg.value );
    this.inputNome.value = ''; // <- clear the input
    this.inputEmail.value = ''; // <- clear the input
    this.inputMsg.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <ul>
          <li><input className="texto" type="text" id="nome" placeholder="Nome" ref={ nome => this.inputNome = nome }/></li>
          <li><input className="texto" type="email" id="email" placeholder="E-mail" ref={ email => this.inputEmail = email } /></li>
          <li><textarea className="texto" id="msg" placeholder="mensagem" ref={ msg => this.inputMsg = msg }></textarea></li>
        </ul>

        <Botao></Botao>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default App;