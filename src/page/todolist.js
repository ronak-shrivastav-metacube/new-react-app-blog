import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ModelBootstrap from '../components/modelBootstrap';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
function  Todolist(porps)
{
    let navigateX = useNavigate();
    const [todos ,setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [todoId, setTodoId] = useState(0);

    const [todoDataViewed, setTodoDataViewed] = useState({
        username : "",
        description : "",
        status : ""
    });

    const [selectStatus, setSelectStatus] = useState("All");

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todosData')));
    },[]);
    
    const toggleModal = (id) => {
    
        let searchedTodo = todos.filter((item)=>{
            if(item.id == id)
            {
                return (item);
            }
            // return (item.id == props.todoid)?[{username:item.data.username,description:item.data.description,status:item.status}]:"not Found";
        });

        let btnStyle = (searchedTodo[0].status==='Pending')?'btn btn-sm btn-outline-danger':'btn btn-sm btn-outline-success disabled';

        setTodoDataViewed({
            todoid : id,
            username : searchedTodo[0].data.username,
            description : searchedTodo[0].data.userdescription,
            status : searchedTodo[0].status,    
            btnStyle : btnStyle
        });

        setShowModal(!showModal);
        setTodoId(id);
    }

    const changeStatus = (id)=> {
        let changedTodo = todos.filter((item)=>{
            if(item.id == id)
            {
                item.status = "Completed";
                return (item);
            }
            else
            {
                return (item);
            }
        })
        localStorage.setItem('todosData' , JSON.stringify(changedTodo));
        setTodos(JSON.parse(localStorage.getItem('todosData')));
    }
    
    const addTodo = () => {
        navigateX('/todo',{replace:true});
    };

    const filterTable = (e) => {
        setSelectStatus(e);
        let allTodos = JSON.parse(localStorage.getItem('todosData'))
        let array = allTodos.filter((item)=>{
            if(item.status === e)
            {
                return item;
            }
            else if(e === "All")
            {
                return item;
            }
        });
        setTodos(array);
    }
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <button type="button" className="btn btn-sm btn-primary" onClick={addTodo}><BsFillArrowLeftCircleFill />    Add Todo</button>
                    </div>
                </div>

                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="form-group col-3 mb-3">
                            <label>Fitler By Status</label>
                            <select className="form-control" value={selectStatus} onChange={(e) => filterTable(e.target.value)}>
                                <option value="All" >All</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <table className="table table-sm table-stripped table-bordered table-hover">
                            <thead className="bg-dark text-light">
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody className='lead'>
                                { 
                                (todos && todos.length != 0)?

                                    todos.map((value,key)=>{
                                        let username = value.data.username.charAt(0).toUpperCase() + value.data.username.slice(1);
                                    
                                        let statusClass = value.status === 'Pending'?"btn btn-outline-danger btn-sm":"btn btn-outline-success btn-sm disabled";

                                        return <tr key={key} className="text-center">
                                            <td>{username}</td>
                                            <td>
                                                {
                                                value.status === 'Pending'?
                                                <button className={statusClass} type="button" onClick={()=>changeStatus(value.id)} key={value.id}>{value.status}</button>
                                                :
                                                <button className={statusClass} type="button" key={value.id}>{value.status}</button>
                                                }
                                            </td>
                                            <td><button onClick={()=>toggleModal(value.id)} type="button" className="btn btn-primary btn-sm" key={value.id}>View</button></td>
                                        </tr>
                                    }):
                                    <tr>
                                        <td className="text-center" colSpan={3}>Record Not Found</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <ModelBootstrap isOpen={showModal} todoDataViewed={todoDataViewed} toggle={toggleModal} todoid={todoId} setStatus={changeStatus} />
            </div>
        </section> 
    )
}
export default Todolist;