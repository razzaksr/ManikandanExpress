import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { every, up } from "./API/contact";

const Edit=()=>{
    const[obj,setObj]=useState({
        fullname:"",
        contact:0,
        commercials:0,
        experience:0,
        expert:""
    })
    const{id}=useParams()
    let his=useHistory()

    useEffect(()=>{
        loadExpert()
    },[])

    const loadExpert=async()=>{
        //alert(id)
        const exp=await every(id)
        setObj(exp.data)
    }

    const track=(e)=>{
        const{name,value}=e.target;
        setObj((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const update=async()=>{
        await up(obj)
        his.push('/')
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <form action="/techie" method="POST" class="rounded shadow p-5">
                        <input type="hidden" name="_id" value={obj._id}/>
                        <div class="form-group">
                            <label>Full name</label>
                            <input type="text" onChange={track}
                            class="form-control" placeholder="fullname please" name="fullname" value={obj.fullname}/>
                        </div>
                        <div class="form-group">
                            <label>Contact</label>
                            <input type="number"  onChange={track} class="form-control" placeholder="Contact please" name="contact" value={obj.contact}/>
                        </div>
                        <div class="form-group">
                            <label>Expert In</label>
                            <input type="text" onChange={track} class="form-control" placeholder="Expert on technology" name="expert" value={obj.expert}/>
                        </div>
                        <div class="row">
                            <div class="col form-group">
                                <label>Experience</label>
                                <input type="text" onChange={track} class="form-control" placeholder="experience please" name="experience" value={obj.experience}/>
                            </div>
                            <div class="col form-group">
                                <label>Commercials</label>
                                <input type="text" onChange={track} class="form-control" placeholder="commercials please" name="commercials" value={obj.commercials}/>
                            </div>
                        </div>
                        <div class="row justify-content-around mt-5">
                            <input type="button" class="col-4 btn btn-outline-info"
                                value="Update" onClick={update}/>
                            <input type="reset" class="col-4 btn btn-outline-danger" value="Clear"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Edit;