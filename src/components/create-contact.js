import React, { Component } from 'react';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        this.onChangeContactFirstName = this.onChangeContactFirstName.bind(this);
        this.onChangeContactLastame = this.onChangeContactLastName.bind(this);
        this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onChangeContactDepartment = this.onChangeContactDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contact_first_name: '',
            contact_last_name: '',
            contact_phone: '',
            contact_email: '',
            contact_department: '',
        }
    }

    onChangeContactFirstName(e) {
        this.setState({
            contact_first_name: e.target.value
        });
    }

    onChangeContactLastName(e) {
        this.setState({
            contact_last_name: e.target.value
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
        console.log(`Contact First Name: ${this.state.contact_first_name}`);
        console.log(`Contact Last Name: ${this.state.contact_last_name}`);
        console.log(`Contact Phone: ${this.state.contact_phone}`);
        console.log(`Contact Email: ${this.state.contact_email}`);
        console.log(`Contact Department: ${this.state.contact_department}`);
        
        this.setState({
            contact_first_name: '',
            contact_last_name: '',
            contact_phone: '',
            contact_email: '',
            contact_department: '',
            todo_completed: false
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
                            value={this.state.contact_first_name}
                            onChange={this.onChangeContactFirstName}
                            />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.contact_last_name}
                            onChange={this.onChangeContactLastName}
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
                    <input type="submit" value="Create Contact" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}