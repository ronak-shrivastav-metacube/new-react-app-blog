import React,{useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap'

const ModelBootstrap = (props) => {

    let username =  props.todoDataViewed.username.charAt(0).toUpperCase() + props.todoDataViewed.username.slice(1);
    let status = props.todoDataViewed.status.charAt(0).toUpperCase() + props.todoDataViewed.status.slice(1);
    // let btnStyle = (status=='Pending')?'btn btn-sm btn-outline-danger':'btn btn-sm btn-outline-success';

    
    return (
      <div>
        <Modal show={props.isOpen} >
          <Modal.Header className="bg-primary text-light">
            <Modal.Title>Todo Title {username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
                <div className="col-12">
                    <table className="table table-sm table-stripped table-bordered">
                        <tbody>
                            <tr>
                                <th className="p-2">Status</th>
                                <td className="text-center">
                                    <button type="button" onClick={()=>props.setStatus(props.todoDataViewed.todoid)} className={props.todoDataViewed.btnStyle} >{status}</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="p-0">
                                    <h5 className="bg-primary text-light p-2 mb-0">Description</h5>
                                    <p className="p-2">{props.todoDataViewed.description}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
          </Modal.Body>
          <Modal.Footer className="bg-primary">
            <Button className="btn btn-outline-light" onClick={()=>props.toggle(props.todoid)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  
  
export default ModelBootstrap;