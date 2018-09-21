import React,{Component} from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from './data/contacts';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {//not mutating state directly simply means not changing it like this.state = something else
            contacts: contactData
        }
    }

    addContact = (contact)=>{
        console.log('App: addComponent',contact);
        const newContacts = this.state.contacts.slice();
        newContacts.unshift(contact)
        this.setState({
            contacts: newContacts
            // contacts: contactData.push(contact) why does this not work with this.props on ContactList
            // contacts: [contact, ...this.state.contacts]
        })
    }

    render(){
        return(
            <div className="container">
                <h1 className="text-center my-3">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact} />
                    </div>
                    <ContactList contacts={this.state.contacts} />    
                </div>
            </div>
        )
    }
};
//line 24 is setting prop.add as having addContact(){} as its value, making props.add a function

export default App;
