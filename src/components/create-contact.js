import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        this.onChangeContactFirst = this.onChangeContactFirst.bind(this);
        this.onChangeContactLast = this.onChangeContactLast.bind(this);
        this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onChangeContactDepartment = this.onChangeContactDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contact_first: '',
            contact_last: '',
            contact_phone: '',
            contact_email: '',
            contact_department: ''
        }
    }

    onChangeContactFirs(e) {
        this.setState({
            contact_first: e.target.value
        });
    }

    onChangeContactLast(e) {
        this.setState({
            contact_last: e.target.value
        });
    }

    onChangeContactPhone(e) {
        this.setState({
            contact_phone: e.target.value
        });
    }

    onChangeContactEmail(e) {
        this.setState({
            contact_email: e.target.value
        });
    }

    onChangeContactDepartment(e) {
        this.setState({
            contact_department: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Contact First Name: ${this.state.contact_first}`);
        console.log(`Contact Last Name: ${this.state.contact_last}`);
        console.log(`Contact Phone: ${this.state.contact_phone}`);
        console.log(`Contact Email: ${this.state.contact_email}`);
        console.log(`Contact Department: ${this.state.contact_department}`);

        const newContact = {
            contact_first: this.state.contact_first,
            contact_last: this.state.contact_last,
            contact_phone: this.state.contact_phone,
            contact_email: this.state.contact_email,
            contact_department: this.state.contact_department
        };
        axios.post('http://localhost:4000/contacts/add', newContact)
            .then(res => console.log(res.data));
        
        this.setState({
            contact_first: '',
            contact_last: '',
            contact_phone: '',
            contact_email: '',
            contact_department: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Create New Contact</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>First Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.contact_first}
                            onChange={this.onChangeContactFirs}
                            />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.contact_last}
                            onChange={this.onChangeContactLast}
                            />
                </div>
                <div className="form-group">
                    <label>Phone: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.contact_phone}
                            onChange={this.onChangeContactPhone}
                            />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.contact_email}
                            onChange={this.onChangeContactEmail}
                            />
                </div>
                <div className="form-group">
                    <label>Department: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.contact_department}
                            onChange={this.onChangeContactDepartment}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Contact" className="" />
                </div>
            </form>
        </div>
        )
    }
}