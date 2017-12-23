import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RemoveItem} from '../actions/index';


class OrderItem extends Component{

    createItemsList(){
        return this.props.items.map((orderitem) => {
            if(orderitem.ordered == "true"){
                return(

                    <div class="card col-md-2"  key={orderitem.id} >
                      <img class="card-img-top img" src={orderitem.imageURL} alt="Card image cap"></img>
                      <div class="card-block">
                        <h4 class="card-title">{orderitem.item}</h4>
                        <p class="card-text">{orderitem.currency}{orderitem.cost} * {orderitem.Qty} = {orderitem.currency}{orderitem.totalcost}</p>
                        <button onClick={() => this.props.RemoveItem(orderitem)} class="btn-group btn-primary remCartBtn">
                            Remove from Cart
                        </button>
                      </div>
                    </div>
                );
            }
        });
    }

    calculateTotal(){
        var total = 0;
        this.props.items.map((menuitem) => {

                total += menuitem.cost*(menuitem.Qty)

        });
        return total;
    }

    render(){
        return(
            <div className="row">
            <div>
            <button class="btn-group btn-success totalValBtn">
                Total : ${this.calculateTotal()}
            </button>

            </div>
                <div className="col-md-12">
                    <div role="alert">
                        <ul class="list-unstyled">
                            {this.createItemsList()}
                        </ul>


                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({RemoveItem: RemoveItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
