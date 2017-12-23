import {ADD_ITEM} from '../actions/index';
import {REMOVE_ITEM} from '../actions/index';

const initialState =[
        {
            id: 1,
            item: "Product A",
            cost: 250,
            totalcost: 250,
            ordered: "false",
            Qty: 0,
            imageURL: "http://placehold.it/150/1b21a0/ffffff",
            currency: "$"
        },
        {
            id: 2,
            item: "Product B",
            cost: 350,
            totalcost: 350,
            ordered: "false",
            Qty: 0,
            imageURL: "http://placehold.it/150/bc4125/ffffff",
            currency: "$"
        },
        {
            id: 3,
            item: "Product C",
            cost: 200,
            totalcost: 200,
            ordered: "false",
            Qty: 0,
            imageURL: "http://placehold.it/150/5abc25/ffffff",
            currency: "$"
        },
        {
            id: 4,
            item: "Product D",
            cost: 500,
            totalcost: 500,
            ordered: "false",
            Qty: 0,
            imageURL: "http://placehold.it/150/ebf742/ffffff",
            currency: "$"
        },
        {
            id: 5,
            item: "Product E",
            cost: 100,
            totalcost: 100,
            ordered: "false",
            Qty: 0,
            imageURL: "http://placehold.it/150/d121c8/ffffff",
            currency: "$"
        }
];


const items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM :
        return state.map((item) => {
            if (item.id == action.clickedItem.id) {
                return Object.assign({}, item, {
                    totalcost:action.clickedItem.cost*(action.clickedItem.Qty+1),
                    ordered: "true",
                    Qty: action.clickedItem.Qty +1
                })
              }
              return item
        });

        case REMOVE_ITEM :
        return state.map((item) => {
            if (item.id == action.clickedItem.id) {
                if(action.clickedItem.Qty > 1){
                    return Object.assign({}, item, {
                        totalcost:action.clickedItem.totalcost - action.clickedItem.cost,
                        ordered: "true",
                        Qty: action.clickedItem.Qty -1
                    })
                }
                else{
                    return Object.assign({}, item, {
                        totalcost:action.clickedItem.cost,
                        ordered: "false",
                        Qty: 0
                    })
                }
            }
            return item
        });

        default :
            return state;

    }
};

export default items;
