import React, { Component } from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }

    handleInputChange = (event)=>{
        const {value,name} = event.target;
        const {form: newForm} = this.state;
        newForm[name]=value;
        this.setState({
            form: {...newForm}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.form);
        this.props.add(this.state.form);//what does this do exactly?
        this.clearForm();
    }

    clearForm = () => {
        event.preventDefault();
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }

    render() {
        const {firstName,lastName,phone,email} = this.state.form;
        return (
            <form>
                <Field
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={this.handleInputChange}
                />
                <Field
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={this.handleInputChange}
                />
                <Field
                    name="phone"
                    label="Phone Number"
                    type="text"
                    value={phone}
                    onChange={this.handleInputChange}
                />
                <Field
                    name="email"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={this.handleInputChange}
                />
                <button className="btn btn-success" onClick={this.handleSubmit}>Add Contact</button>
                <button type="button" className="btn btn-warning" onClick={this.clearForm}>Clear Forms</button>           
            </form>
        );
    }
}

export default ContactForm;