import React, {Component} from "react";
import ProfileImage from '../components/ProfileImage';
import Description from '../components/Description';

class Blog extends Component
{
    render()
    {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="offset-6 col-lg-3 col-md-3">
                            <h1>Blog Posts</h1>   
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                         <ProfileImage imgUrl="./assets/images/profile/profile.png" />   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <Description title="Post Title 1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />            
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <i className="text-primary fa fa-thumbs-up display-4 m-1"></i>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                         <ProfileImage imgUrl="./assets/images/profile/profile.png" />   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <Description title="Post Title 2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />            
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <i className="fa fa-thumbs-up display-4 m-1"></i>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                         <ProfileImage imgUrl="./assets/images/profile/profile.png" />   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <Description title="Post Title 3" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />            
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <i className="text-primary fa fa-thumbs-up display-4 m-1"></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Blog;