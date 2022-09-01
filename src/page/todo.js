import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Todolist from "./todolist";

function Todo ()
{
    let navigateX = useNavigate();
    const [name,setName] =useState("");
    const [description, setDescription] = useState("");
    const [object, setObject] = useState([]); 
    const [count, setCount] = useState(0);
    const [todolists , setTodolists] = useState([]);    

    const submitHendller = (e) => {
        e.preventDefault();
        setCount(count + 1);
        
        let counter = JSON.parse(localStorage.getItem('todosData') || "[]");

        let xid = 0;
        counter.length > 0 ? xid = (JSON.parse(localStorage.getItem('todosData')).at(-1).id) + 1:xid = 1;
        // JSON.parse(localStorage.getItem('todosData')).at(-1).id

        let data = {
            id: xid,
            data : {
                username : e.target.name.value,
                userdescription : e.target.description.value,
            },
            status : "Pending"
        };

        setObject((obj) => [...obj, data]);
        let array = JSON.parse(localStorage.getItem('todosData') || "[]");
        array.push(data);
        console.log(array);
        localStorage.setItem('todosData' , JSON.stringify(array));
        
        navigateX('/todolist',{replace:true});
    }
    
    return (
        <section className="my-4">
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <form onSubmit={submitHendller}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Name..."/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" value={description} name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Description...."></textarea>
                            </div>
                            <button className="mt-4 btn btn-primary btn-sm" type="submit">Add</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        
                        {todolists.map((value, key)=>{
                            return value;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Todo;