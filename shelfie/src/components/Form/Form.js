import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                products: [],
                nameInput: '',
                priceInput: 0,
                imgInput: ''
            }
        }
    }

    componentDidMount() {
        axios.get('/api/products').then( res => {
          this.setState({
            products: res.data
          })
        })
      }


    addProduct() {
        let body = {
          nameInput: this.state.nameInput,
          priceInput: this.state.priceInput,
          imgInput: this.state.imgInput,
        }
          axios.post('/api/products', body).then((res) => {
            this.setState({
              products: res.data,
              nameInput: '',
              priceInput: '',
              imgInput: ''
            })
          })
      }
      

    render() {
  
        return (
        <div>
        <h3> Form 
        <input  value={this.state.nameInput} onChange={(e) => this.setState({nameInput: e.target.value})}/>
        <input value={this.state.priceInput} onChange={(e) => this.setState({priceInput: e.target.value})}/>
        <input  value={this.state.imgInput} onChange={(e) => this.setState({imgInput: e.target.value})}/>
        <button> Cancel </button>
        <button onClick={() => this.addProduct()}>Add to Inventory</button>
        </h3>     
         </div>
        );
    }
}

export default Form;