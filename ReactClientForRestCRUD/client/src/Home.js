import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { del, every } from './API/contact';
const Home=()=>{

    const[msg,setMsg]=useState()

    const[expert,setExpert]=useState([])

    useEffect(()=>{
        fetch()
    })

    const fetch=async()=>{
        const got=await every()
        setExpert(got.data)
    }

    const erase=async(id)=>{
        const hai= await del(id);
        setMsg(hai.data);
        fetch();
    }

    return(
        <>
            <div className="container">
            <p className="display-5 text-primary">{msg}</p>
            <div className="row justify-content-center">
                <table className="table table-responsive-md table-striped table-hover rounded shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th>Full Name</th><th>Contact</th>
                            <th>Technology</th><th>Experience</th>
                            <th>Commericials</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expert.map((each)=>
                        (
                            <tr>
                                <td>{each.fullname}</td>
                                <td>{each.contact}</td>
                                <td>{each.expert}</td>
                                <td>{each.experience}</td>
                                <td>{each.commercials}</td>

                                <td>
                                    <a href={`/edit/${each._id}`} className="btn btn-outline-warning">
                                        Edit
                                    </a>
                                    <input type="button" 
                                        className="btn btn-danger"
                                        value="Delete"
                                        onClick={()=>erase(each._id)}
                                    />
                                </td>

                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
}

export default Home;