import {React, Component} from 'react';

class Contact extends Component
{
    render()
    {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="shadow-lg p-4 rounded-lg offset-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <form>
                            <div className="form-group mb-4">
                                <label for="fullName">Full Name</label>
                                <input type="text" name="fullName" className="form-control" placeholder="Enter Your Name..."/> 
                            </div>
                            <div className="form-group mb-4">
                                <label for="emailId">Email</label>
                                <input type="email" name="emailId" className="form-control" placeholder="Enter Your Email..."/> 
                            </div> 
                            <div className="form-group mb-4">
                                <label for="mobNum">Mobile Number</label>
                                <input type="text" name="mobNum" className="form-control" placeholder="Enter Your Mobile Number..."/> 
                            </div> 
                            <div className="form-group mb-4">
                                <label for="comment">Comment</label>
                                <textarea className="form-control" rows="5" cols="8" placeholder='Enter Your Comments...'></textarea>
                            </div> 
                            <button className="btn btn-sm btn-success" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;