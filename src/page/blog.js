import React, {Component} from "react";

import Card from '../components/Card';
class Blog extends Component
{
    render()
    {
        // console.log(this.props.blogData);
        // const item = this.props.blogData.map((data, index) => <Card blog={data} key={index} /> );
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="offset-5 col-lg-3 col-md-3">
                            <h1 className="text-success mt-3"><u>Blog Posts</u></h1>   
                        </div>
                    </div>
                    {this.props.blogData.map((data,index) => <Card blog={data} key={index}/>)}
                </div>
            </>
        );
    }
}

export default Blog;