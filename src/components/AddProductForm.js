import React from 'react';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      img:'',
      price:'',
      description:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name === "price")
      value = Number(value)

    this.setState({
      [name]: value
    });
  }

    render() {
      return (
        <form  action = "http://localhost:9000/addItem" method = "POST">
        <h1>Enter Product Info</h1>
        <p>product Name:</p>
        <input
          type='text'
          name='name'
          value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
        />
        <p>imgae Link</p>
        <input
          type='text'
          name='img'
          value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
        />
        <p>Product Price</p>
        <input
          type='text'
          name='price'
          value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
        />
        <p>product Description</p>
        <input
          type='text'
          name='description'
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
        />
        <br/>
        <br/>
        <input type='submit' />
        </form>
      );
    }
  }

export default AddProductForm;
  