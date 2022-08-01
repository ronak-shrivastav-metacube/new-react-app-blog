import React from "react";

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            personalDetailes : {
                fname : undefined, 
                mname : undefined, 
                lname : undefined, 
                dob : undefined, 
            },
            contactDetailes : {
                contactNumber : undefined,
                email : undefined,
                address : undefined,
            },
            photograph : {
                photograph : undefined,
            }
            
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
            },
            contactDetailes:{
                contactNumber : e.target.number.value,
                email : e.target.email.value,
                address : e.target.address.value,
            },
            photograph : {
                photograph:e.target.photograph.value
            }
        }, ()=>{console.log(this.state);})
        console.log('first : '+e.target.fname.value);
        const user = this.state;
        console.log('second : '+this.state.personalDetailes.fname);
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
                                            <input className="form-control" name="fname" placeholder="Enter First Name." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="mname">Middle Name</label>
                                            <input className="form-control" name="mname" placeholder="Enter Middle Name." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="lname">Last Name</label>
                                            <input className="form-control" name="lname" placeholder="Enter Last Name." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="dob">DOB</label>
                                            <input type="date" name="dob" className="form-control" />
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
                                            <input className="form-control" name="number" placeholder="Enter Contact Number." />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control" name="email" placeholder="Enter Email." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <label htmlFor="address">Address</label>
                                        <input type="address" name="address" placeholder="Enter Your Address." className="form-control" />
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
                        {JSON.stringify(this.state.personalDetailes)}
                        {JSON.stringify(this.state.contactDetailes)}
                        {JSON.stringify(this.state.photograph)}
                    </div>
                </form>
            </section>
        )
    }
}

export default Register;