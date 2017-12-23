import React, {Component} from 'react';
import Menu from './Menu';
import Cart from './Cart';

class Main extends Component{
    render(){
        return(
            <div class="container-fluid" >
            <h1 className="text-center">Falabella Shopping Cart</h1>
                <div class="row" className="">
                    <div >
                        <Cart/>
                    </div>

                </div>

                <div class="row" className="">

                    <div >
                        <Menu/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;
