import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                products: [],
                itemInput: '',
                priceInput: 0,
                imgInput: ''
            }
        }
    }

    componentDidMount(){
        axios.get('api/products').then((res) =>{
            this.setState({
                products: res.data
            })
        })
    }
    addProduct() {
        let body = {
          itemInput: this.state.itemInput,
          priceInput: this.state.priceInput,
          imgInput: this.state.imgInput,
        }
        !body.itemInput
          ?
          alert('please fill out form')
          :
          axios.post('/api/products', body).then((res) => {
            this.setState({
              products: res.data,
              itemInput: '',
              priceInput: '',
              imgInput: ''
            })
          })
      }

    render() {
        console.log(this.addProduct)
        return (
        <div>
        <h3> Form 
        <input value={this.state.imgInput} onChange={e => this.setState({imgInput: e.target.value})}/>
        <input value={this.state.itemInput} onChange={e => this.setState({itemInput: e.target.value})}/>
        <input value={this.state.priceInput} onChange={e => this.setState({priceInput: e.target.value})}/>
        <button> Cancel </button>
        <button onClick={() => this.addProduct()}>Add to Inventory</button>
        </h3>     
                
         </div>
        );
    }
}

export default Form;