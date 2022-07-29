import {useState} from 'react';
import Contain from '../components/Contain';

export default function Sidebar(){
    let [contain,setContain] = useState(<Contain objContain={{count : 1, styleClass:'bg-success text-light'}} />);

    function setContainWithKey(arryObj)
    {
        // console.log(arryObj);
        // myFunction();
        // element.classList.add("active");
        setContain(<Contain objContain={arryObj} />);
    }

    function myFunction() {
        var element =  document.querySelector('.list-group');
        var allElement = element.childNodes;
        allElement.forEach(li => {
            // console.log(li.innerText);
            li.classList.remove("active");
        });
      }
      
    return (
        <section className="main">
            <div className="sidebar-box">
                <div className="list-group">
                {[{count : 1, styleClass:'bg-success text-light'},{count : 2, styleClass:'bg-dark text-light'},{count : 3, styleClass:'bg-danger text-light'},{count : 4, styleClass:'bg-info text-dark'},{count : 5, styleClass:'bg-warning text-danger'}].map((data,index)=>{
                            return ( 
                                <a href="#" key={index} className="text-center p-4 list-group-item list-group-item-action" menuid={data} onClick={() => setContainWithKey(data)}><i className="fa fa-envelope" /> Comment {data.count}</a>
                            )
                        })}        
                </div>
            </div>
            {contain}            
        </section>
    );
}