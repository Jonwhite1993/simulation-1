import React, { Component } from 'react';
import Product from './Product';

class Dashboard extends Component {
    render() {
        return (
            <div> DashBoard 
                <Product />
            </div>
        );
    }
}

export default Dashboard;