import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';

class Recipe extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentWillUnmount() {
        if (this.refs.shipping.checked) {
            this.props.substractShipping()
        }
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.substractShipping();
        }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    
                    <button className="btn modal-trigger" onClick={() => { alert(`Total: ${this.props.total}`); }}>Checkout</button>
                    
                </div>
                <button onClick={this.togglePopup.bind(this)}>show popup</button>
                {this.state.showPopup ?
                    <Modal              
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        addItems: state.addItems,
        total: state.total
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({type: 'SUB_SHIPPING'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);