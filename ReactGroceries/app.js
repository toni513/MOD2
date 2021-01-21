class App extends React.Component {
  state = {
    groceries,
    item: '',
    brand: '',
    units: '',
  };
  itemChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  removeItem = (e) => {
    let count = 0;
    var array = [...this.state.groceries]; 
    var index = array.indexOf(groceries[count]);
    this.state.groceries.map((grocery) => {
      if (grocery.item == e.target.id) {
        console.log(array);
        array.splice(index, 1);
        this.setState({ groceries: array });
      }
      count++;
    });
  };
  submit = (event) => {
    event.preventDefault();
    console.log('Submit');
    const item = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: 1,
      isPurchased: false,
    };
    this.setState({
      groceries: [item, ...this.state.groceries],
      item: '',
      brand: '',
      units: '',
    });
  };
  render() {
    return (
      <div>
        
        <form onSubmit={this.submit}>
               <h1>Grocery List</h1> 
				<label htmlFor="item">Item:</label>
				<input type="text" id="item" onChange={this.itemChange} value={this.state.item} placeholder={"Add Item"}/>

				<label htmlFor="brand">Brand:</label>
				<input type="text" id="brand" onChange={this.itemChange} value={this.state.brand} placeholder={"Add Brand"}/>

				<label htmlFor="units">Unit:</label>
                <input type="text" id="units" onChange={this.itemChange} value={this.state.units} placeholder={"Add Units"} />

				<label htmlFor="quantity">Quantity:</label>
				<input type="text" id="quantity" onChange={this.itemChange} value={this.state.quantity} placeholder={"Add Quantity"} />

				<button className="submit-button">SUBMIT</button>
			</form>
        <div>
           <ol>
            {this.state.groceries.map((grocery) =>
              !grocery.isPurchased ? (
                <li>
                  {grocery.item}
                  <button
                    onClick={this.removeItem}
                    groceries={this.props.groceries}
                    id={grocery.item}
                    className="remove-button"
                  >
                    remove
                  </button>
                </li>
              ) : (
                ''
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))