//Create subclass App -'extends' keyword from React Component
class App extends React.Component {
    //"state" object stores property values that belong to the component
    state = {
        baseURL: 'http://jservice.io/api/random',
        question:[],
        showHideAnswer:false,
        score:0
  }

  // Method fetches questions from API as json objects. 
    handleFetchQuestion() {
         console.log("handleFetchQuestion");
        fetch(this.state.baseURL)
        .then((response) => response.json())
        .then(json => {
             console.log(json);
            this.setState({ question: json }),
            err => console.log(err)
        }
      )
    }

   // Method toggles the state of showHideAnswer.
    showHideAnswer() {
        this.setState({ showHideAnswer: !this.state.showHideAnswer });
  }//"this.setState()" changes a value in the state object
  //When a value in the "state" object changes, the component will re-render,
  //meaning that the output will change according to the new value


  //Method increases the score based on the question's value points.
  //"parseInt"function converts first argument to a string, parses that string,
  //then returns an integer or NaN when a question is not pulled up before clicking
  //increase or decrease.
   increaseScore(){
     const score = (this.state.question.map(values => (values.value)));
     console.log("from API: " + score);
     console.log("from state constructor: " + parseInt(this.state.score));
     let newScore = parseInt(score) + parseInt(this.state.score);
     console.log("API + state constructor: " + newScore);
     console.log("setState: ");
     this.setState({
       score: newScore});
   }
   //Method decreases the score based on the question's value points.
   decreaseScore(){
     const score = (this.state.question.map(values => (values.value)));
     console.log("from API: " + score);
     console.log("from state constructor: " + parseInt(this.state.score));
     let newScore = parseInt(this.state.score) - parseInt(score);
     console.log("API + state constructor: " + newScore);
     console.log("setState: ");
     this.setState({
       score: newScore});
   }

  //Method reset the Question & Answer
   resetQuestion(){
     console.log("resetQuestion");
     this.setState({question:[], showHideAnswer:false});
     }

  //Method to reset the score   
   resetScore(){
     console.log("resetScore"); 
     this.setState({score:0});
   }

    render() {
    
      //"map()"function manipulates items in array by iterating and accessing individual items
      //Renders a list of data to DOM, eexpects a callback as the argument and executes it once 
      //each element in the array
      const {showHideAnswer} = this.state;
      const question = (this.state.question.map(question => (question.question)));
      const title = (this.state.question.map(title => (title.category.title)));
      const points = (this.state.question.map(point => (point.value)));
      const answer = (this.state.question.map(answer => (answer.answer)));

        return (
            //Div class to style App
            //Each item in div coded where it should appear on page 
            //"Onclick uses "this" keyword to call a specific method
            <div className="container">
            <h1>Welcome to Jeopardy!</h1>
            <label className="score" htmlFor='score'>Score: </label><label id="score-val">{this.state.score}</label><br /><br />
            <button className="decrease-button" onClick={() => this.decreaseScore()}>Decrease</button>
            <button className="increase-button" onClick={() => this.increaseScore()}>Increase</button>
            <button className="score-reset-button" onClick={() => this.resetScore()}>Reset Score</button>
            <button id="question-reset-button" onClick={() => this.resetQuestion()}>Reset Question</button>
            <h2>Let's Play!</h2>
            <button className="question-button" onClick={() => this.handleFetchQuestion()}>Get Question</button><br /><br />
            <div className="question">{question}</div><br />
            <div><label className="category" htmlFor='category'>Category: </label><label id="category-type">{title}</label></div><br />
            <div><label className="points" htmlFor='points'>Points: </label><label id="point-val"> {points}</label></div><br /><br />
            <button className="answer-button" onClick={() => this.showHideAnswer()}>Click to Reveal Answer</button><br /><br />
            {showHideAnswer && (<div className="answer">{'What is ' + answer}</div> )}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
//Renders a React element into the Dom in the supplied container
//and returns a reference to the root React Component (or null for stateles components)