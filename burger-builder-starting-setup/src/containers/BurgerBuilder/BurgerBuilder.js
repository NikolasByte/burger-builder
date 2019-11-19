import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {


    state = {
        ingredidents: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 2
        }
    }



    render () {
        return (
            <Aux>
                <Burger ingredidents={this.state.ingredidents}/>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;