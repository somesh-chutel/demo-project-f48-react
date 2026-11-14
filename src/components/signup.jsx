import { useRef, useState } from 'react';
import '../App.css';

// {
//   "name": "Aarav Sharma",
//   "email": "aarav.sharma@example.com",
//   "status": "active",
// }

const Signup = () => {

    const [allValues,setvalues] = useState({
        name : "",
        email : "",
        status : "active",
        errorMsg : "",
        myStyle : ""
    });

    const name = useRef();
    const email = useRef();
    const status = useRef();
    

    const sendUserData = async(e)=>{

        e.preventDefault();

        const api = "https://gorest.co.in/public/v3/users";

        const userDeatil = {
            name : allValues.name,
            email : allValues.email,
            status : allValues.status
        }

        const options = {
            method : "Post",
            headers : {
                "Content-type" : "application/json",
                Authorization : "Bearer gorest_2dOilVgSwFC29hDQDuzzdTcozcMonhkIjnkfduc1B6E2PkbzN"
            },
            body : JSON.stringify( userDeatil )
        }

        try {

            const response = await fetch( api, options );
            const data = await response.json();

            if( response.ok ){
                setvalues({...allValues,errorMsg : "Signup Success",myStyle : "text-success"});
            }
            else{
                let temp = data.errors[0].pointer + " " + data.errors[0].detail;
                setvalues({...allValues,errorMsg : temp.slice(1),myStyle : "text-danger"});
            }

            console.log( response );
            console.log( data );
            
        } catch (error) {
            console.log( error );
        }

        name.current.value = "";
        email.current.value = "";
        status.current.value = "active";
    }


    const getUsername = (e) =>{

        setvalues({...allValues,name : e.target.value});

    }

    return (

        <div className='main-cont'>
            <h1 className='text-primary'>Signup Form</h1>
            <button onClick={()=>{ heading.current.textContent = "Heading hass been changed" }} className='btn btn-primary'>Change Heading</button>
            <br /> 

            <form style={{width:"40%",textAlign:"left"}} className='shadow p-3 rounded' onSubmit={sendUserData}>
                <label htmlFor="name">Name : </label>
                <input ref = {name} onChange = {getUsername} className='form-control' type="text" id = "name" placeholder='Enter your name...'/>
                <br />
                <label htmlFor="email">Email : </label>
                <input ref = {email} onChange={(e)=>{ setvalues({...allValues,email : e.target.value})}} className='form-control' type="email" id = "email" placeholder='Enter your email...'/>
                <br />
                <label htmlFor="status">Status : </label>
                <select ref = {status} onChange={(e)=>{setvalues({...allValues,status : e.target.value})}} id="status" className='form-control'>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <br />
                <button type = "submit" className='btn btn-primary'>Signup</button>
                <br /><br /> 
                <b className={allValues.myStyle}>{allValues.errorMsg}</b>
            </form>
        </div>
    )
}


export default Signup;