//create subclass App with 'extends' keyword from parent class React Component
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player class="O" />
        <Player class="X" />
        <Board />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>React Tac Toe</h1>;
  }
}

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <h2 className={this.props.class}>Player{this.props.class}</h2>
        <h3>Wins: </h3>
      </div>
    );
  }//"Props"(properties) are arguments passed into React components
}//Props are passed to components via attributes

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <div>
        <h4>square</h4>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));