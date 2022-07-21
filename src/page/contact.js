import {React, Component} from 'react';

class Contact extends Component
{
    render()
    {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" name="fullName" className="form-control" placeholder="Enter Your Name..."/> 
                    </div>
                    <div className="form-group">
                        <label for="emailId">Email</label>
                        <input type="email" name="emailId" className="form-control" placeholder="Enter Your Email..."/> 
                    </div> 
                    <div className="form-group">
                        <label for="mobNum">Mobile Number</label>
                        <input type="text" name="mobNum" className="form-control" placeholder="Enter Your Mobile Number..."/> 
                    </div> 
                    <div className="form-group">
                        <label for="comment">Comment</label>
                        <textarea className="form-control" rows="5" cols="8" placeholder='Enter Your Comments...'></textarea>
                    </div> 
                    <button className="btn btn-sm btn-success" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Contact;