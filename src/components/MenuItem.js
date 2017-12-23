import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AddItem} from '../actions/index';


class MenuItem extends Component{

    createItemsList(){
        return this.props.items.map((menuitem) => {
            return(

                <div class="card col-md-2"  key={menuitem.id} >
                  <img class="card-img-top img" src={menuitem.imageURL} alt="Card image cap"></img>
                  <div class="card-block">
                    <h4 class="card-title">{menuitem.item}</h4>
                    <p class="card-text">{menuitem.currency}{menuitem.cost}</p>
                    <button onClick={() => this.props.AddItem(menuitem)} class="btn-group btn-primary addCartBtn">
                        Add to Cart 
                    </button>
                  </div>
                </div>
            );
        });
    }



    render(){
        return(
            <div className="row justify-content-md-center">
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
    return bindActionCreators({AddItem : AddItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
