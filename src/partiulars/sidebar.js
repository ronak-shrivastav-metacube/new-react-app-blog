import {useState} from 'react';
import Contain from '../components/Contain';

export default function Sidebar(){
    let [contain,setContain] = useState(<Contain objContain={{count : 1, styleClass:'bg-success text-light'}} />);

    let[counter,setCounter] = useState(1);

    function setContainWithKey(arryObj)
    {
        setCounter(arryObj.count);
        setContain(<Contain objContain={arryObj} />);
    }
      
    return (
        <section className="main">
            <div className="sidebar-box">
                <div className="list-group">
                {[{count : 1, styleClass:'bg-success text-light'},{count : 2, styleClass:'bg-dark text-light'},{count : 3, styleClass:'bg-danger text-light'},{count : 4, styleClass:'bg-info text-dark'},{count : 5, styleClass:'bg-warning text-danger'}].map((data,index)=>{
                            return ( 
                                <a href="#" key={index} className={ "text-center p-4 list-group-item list-group-item-action" + ((index == (counter-1))?' active':'')}  menuid={index} onClick={() => setContainWithKey(data)}><i className="fa fa-envelope" /> Comment {data.count}</a>
                            )
                        })}        
                </div>
            </div>
            {contain}            
        </section>
    );
}