export default function UserTemplate(props)
{
    return (
        <section className="my-4">
            <div className="container px-0">
                <div className="card mb-3">
                    <div className="card-header bg-success text-light">
                        <h4 className="card-title">This is Personal Detiles</h4>
                    </div>
                    <div className="mb-0 card-body bg-danger text-light h5">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-xs-12 col-xs-12 float-left">
                                <p><span className="font-weight-bold">Name :</span> <span className="small font-italic"><strong><u>{props.userData.personalDetailes.fname} {props.userData.personalDetailes.mname} {props.userData.personalDetailes.lname}</u></strong></span></p> 
                            </div>
                            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 float-right">
                                <img src={props.userData.photograph.img} className="img-fluid w-50 rounded-circle" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <p><span className="font-weight-bold">D.O.B.</span>: <span><strong><u>{props.userData.personalDetailes.dob}</u></strong></span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <p><span className="font-weight-bold">Gender</span>: <span><strong><u>{props.userData.personalDetailes.gender}</u></strong></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-header mt-0 bg-success text-light" >
                        <h4 className="card-title">This is Contact Detiles</h4>
                    </div>
                    <div className="card-body bg-danger text-light h5">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-12 col-xs-12">
                                <p><span className="font-weight-bold">Contact Ph. :</span> <span className="small font-italic"><strong><u>{props.userData.contactDetailes.contactNumber}</u> </strong></span></p> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <p><span className="font-weight-bold">Email</span>: <span><strong><u>{props.userData.contactDetailes.email}</u></strong></span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p><span className="font-weight-bold">Address</span>: <span><strong><u>{props.userData.contactDetailes.address}</u></strong></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}