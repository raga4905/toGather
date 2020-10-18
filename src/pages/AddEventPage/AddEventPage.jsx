import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './AddEventPage.css';

class AddEventPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            img: 'https://source.unsplash.com/random',
            description: '',
            date: '',
            location: ''
        }
    }
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddEvent(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() {
        return (
            <div className="text-center">
                <h1 >Add Event</h1>
                <form className="form-group col-sm-8 text-center" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-12">
                        <label>Event Name (required)</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Description</label>
                        <input
                            className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Image Link</label>
                        <input
                            className="form-control"
                            type="text"
                            name="img"
                            value={this.state.formData.img}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Event's Date</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="date"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Location</label>
                        <input
                            className="form-control"
                            name="location"
                            value={this.state.formData.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={this.state.invalidForm}
                    >
                        ADD EVENT
         </button> <Link to='/'>CANCEL</Link>
                </form>

            </div>
        );
    }

}

export default AddEventPage; 
