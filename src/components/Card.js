import React from "react";
import ProfileImage from '../components/ProfileImage';
import Description from '../components/Description';
function Card(props)
{
    return (
        <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <ProfileImage imgUrl={props.blog.imgUrl} />   
            </div>
            <div className="col-lg- 6 col-md-6 col-sm-12 col-xs-12">
                <Description title={props.blog.postTitle} description={props.blog.description} />            
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <i className="text-primary fa fa-thumbs-up display-4 m-1"></i>
            </div>
        </div>
    );
}
export default Card;