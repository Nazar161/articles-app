import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            text: e.target.value
        }) 
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.text !== "") {
            this.props.onAdd(this.state.text);
        }
        this.setState({
            text: ''
        })
    }

    render() {
        let btnClassNames = "btn btn-secondary";

        if (this.state.text !== "") {
            btnClassNames = "btn btn-success";
        }
        
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    className="form-control new-post-label"
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    onChange={this.onChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className={btnClassNames}>
                    Добавить
                </button>
            </form> 
        )
    }
}
