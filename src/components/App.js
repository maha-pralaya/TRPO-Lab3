import React, { Component } from 'react';
import '../styles/App.css';
import getResult from './getResult';

class Sent extends Component {
  constructor(props) {
    super(props);
    this.state = { shortest: 'пока не определено', longest: 'пока не определено' };
    this.change = this.change.bind(this);
    this.clear = this.clear.bind(this);
  }

  change() {
    const txArea = document.getElementById('mainText');
    const text = txArea.value;
    const results = getResult(text);
    this.setState({ longest: results[1], shortest: results[0] });
  }

  clear() {
    document.getElementById('mainText').value = '';
    document.getElementById('mainText').focus();
    this.setState({ shortest: 'пока не определено', longest: 'пока не определено' });
  }

  render() {
    const { shortest } = this.state;
    const { longest } = this.state;
    return (
      <div>
        <textarea onChange={this.change} id="mainText" name="mainText" cols="40" rows="6" placeholder="Введите свой текст..." />
        <div>
          <button type="button" id="clear" onClick={this.clear}>Очистить</button>
        </div>
        <p id="shortest">
          Самое короткое предложение:
          {shortest}
        </p>
        <p id="longest">
          Самое длинное предложение:
          {longest}
        </p>
      </div>
    );
  }
}

export default Sent;
