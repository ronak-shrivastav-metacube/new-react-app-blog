import React from "react";
import UserTemplate from "../components/userTemplate";

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            personalDetailes : {
                fname : "Ronak", 
                mname : "Kumar", 
                lname : "Shrivastava", 
                dob : '31/01/1997', 
                gender: "Male"
            },
            contactDetailes : {
                contactNumber : 9587783508,
                email : "ronak.shrivastav@metacube.com",
                address : '37,madan',
            },
            photograph : {
                photograph : null,
            },
            userTemplate : []
        };
        console.log(this.state.personalDetailes.fname);
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
            photograph : {
                photograph:e.target.photograph.value
            }
        }, ()=>{
            this.setState({
                userTemplate : [...this.state.userTemplate,<UserTemplate userData={this.state} />]
            })
        });

        console.log(this.state.userTemplate);

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
                                            <input className="form-control" name="fname" value={this.state.personalDetailes.fname} onChange={(e)=>{this.setState({personalDetailes:{fname:e.target.value}})}} placeholder="Enter First Name." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="mname">Middle Name</label>
                                            <input className="form-control" name="mname" value={this.state.personalDetailes.mname} onChange={(e)=>{this.setState({personalDetailes:{mname:e.target.value}})}} placeholder="Enter Middle Name." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="lname">Last Name</label>
                                            <input className="form-control" name="lname" value={this.state.personalDetailes.lname} onChange={(e)=>{this.setState({personalDetailes:{lname:e.target.value}})}} placeholder="Enter Last Name." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="dob">DOB</label>
                                            <input type="date" name="dob" className="form-control" value={this.state.personalDetailes.dob} onChange={(e)=>{this.setState({personalDetailes:{dob:e.target.value}})}}/>
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
                                            <input className="form-control" name="number" value={this.state.contactDetailes.contactNumber} onChange={(e)=>{this.setState({contactDetailes:{contactNumber:e.target.value}})}} placeholder="Enter Contact Number." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control" name="email" value={this.state.contactDetailes.email} onChange={(e)=>{this.setState({contactDetailes:{email:e.target.value}})}} placeholder="Enter Email." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <label htmlFor="address">Address</label>
                                        <input type="address" name="address" placeholder="Enter Your Address." value={this.state.contactDetailes.address} onChange={(e)=>{this.setState({contactDetailes:{address:e.target.value}})}} className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card my-4">
                            <div className="card-header bg-primary">
                                <p className="text-light lead card-title">Photograph and Other Datiles</p>
                            </div>
                            <div className="card-body">
                                <input className="form-control" type="file" name="photograph" />
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