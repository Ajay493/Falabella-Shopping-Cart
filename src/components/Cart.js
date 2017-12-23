import React,{Component} from 'react';
import MenuItem from './MenuItem';
import OrderItem from './OrderItem';

class Cart extends Component{
    render(){
        return(
            <div className="container-fluid">
                  <div className="card col-md-12">
                        <div className="card-body">
                            {
                                <OrderItem/>
                            }
                        </div>
                    </div>

            </div>
        );
    }
}

export default Cart;
