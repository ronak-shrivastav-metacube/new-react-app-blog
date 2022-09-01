import React from "react";
import { Route } from 'react-router-dom';
import UserTemplate from "../components/userTemplate";

import ShowFormAllData from "./ShowFormAllData";

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            personalDetailes : {
                fname : "", 
                mname : "", 
                lname : "", 
                dob : "", 
                gender: ""
            },
            contactDetailes : {
                contactNumber : null,
                email : "",
                address : "",
            },
            photograph : {
                photograph : null,
                img : null,
            },
            userTemplate : []
        };
    }


    getFormData = (e) => 
    {
        e.preventDefault();
        
        this.setState({
            // personalDetailes: Object.assign({},this.state.personalDetailes, {fname : e.target.fname.value})
            personalDetailes:{
                fname : e.target.fname.value,
                mname : e.target.mname.value,
                lname : e.target.lname.value,
                dob : e.target.dob.value,
                gender: e.target.gender.value               
            },
            contactDetailes:{
                contactNumber : e.target.number.value,
                email : e.target.email.value,
                address : e.target.address.value,
            },
        }, ()=>{
            this.setState({
                userTemplate : [...this.state.userTemplate,<UserTemplate userData={this.state} />]
            });
        });
    }


    render(){
        return(
        <section className="my-5">
            <form onSubmit={this.getFormData}>
                <div className="container border p-4">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <p className="card-title lead text-light">Personal Details</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="fname">First Name</label>
                                        <input defaultValue={this.state.personalDetailes.fname} className="form-control" name="fname"  placeholder="Enter First Name." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="mname">Middle Name</label>
                                        <input defaultValue={this.state.personalDetailes.mname} className="form-control" name="mname" placeholder="Enter Middle Name." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="lname">Last Name</label>
                                        <input defaultValue={this.state.personalDetailes.lname} className="form-control" name="lname" placeholder="Enter Last Name." />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="dob">DOB</label>
                                        <input defaultValue={this.state.personalDetailes.dob} type="date" name="dob" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <select className="form-control" name="gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header bg-primary">
                            <p className="card-title lead text-light">Contact Details</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="number">Contact Number</label>
                                        <input className="form-control" name="number" defaultValue={this.state.contactDetailes.contactNumber} placeholder="Enter Contact Number." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input defaultValue={this.state.contactDetailes.email} type="email" className="form-control" name="email" placeholder="Enter Email." />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                    <label htmlFor="address">Address</label>
                                    <textarea defaultValue={this.state.contactDetailes.address} type="address" name="address" placeholder="Enter Your Address." className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4">
                        <div className="card-header bg-primary">
                            <p className="text-light lead card-title">Photograph and Other Datiles</p>
                        </div>
                        <div className="card-body">
                            <input className="form-control" type="file" onChange={(e)=>{this.setState({photograph:{photograph:e.target.files[0], img : URL.createObjectURL(e.target.files[0])}})}} name="photograph" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-sm-12 col-md-2 col-xs-12 d-flex justify-content-between">
                            <button type="reset" className="btn btn-primary btn-sm">Reset </button>
                            <button type="submit" className="btn btn-primary btn-sm">Submit </button>
                        </div>
                    </div>
                    {/* {JSON.stringify(this.state.personalDetailes)}
                    {JSON.stringify(this.state.contactDetailes)}
                    {JSON.stringify(this.state.photograph)} */}
                </div>
            </form>
            {this.state.userTemplate.map((data,index)=>{
                return (<div key={index}>{data}</div>);
            }).reverse()}
        </section>
        )
    }
}

export default Register;