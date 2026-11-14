
import { useEffect, useState } from 'react';
import '../App.css';

// gorest_2dOilVgSwFC29hDQDuzzdTcozcMonhkIjnkfduc1B6E2PkbzN

const Home = () => {

    const [allValues,setvalues] = useState({

        users : [],
        showLoader : false
    });

    useEffect(()=>{

        const getUsers = async()=>{

            setvalues({...allValues,showLoader : true});

            const api = "https://gorest.co.in/public/v3/users";

            try{

                const response = await fetch( api );

                const data = await response.json();

                if( response.ok ){

                    setvalues({...allValues,users : data.data,showLoader : false});
                }

            }
            catch( error ){

                console.log( error );

            }

        }

        getUsers();

    },[]);

    return (

        <div className='main-cont'>


            <h1 className='text-info'> Users Details </h1>

            <br /> 

            {
                allValues.showLoader 
                ? 
                (
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                ) 
                : 
                (
                    <ul className='w-50 p-3 flex-column'>
                        {
                            allValues.users.map( each => (
                                <li style={{margin : "15pxs"}} key={each.id} className='w-100 align-items-center mb-3 shadow'>
                                    <div className='my-profile'>
                                        <h1>{each.name[0]}</h1>
                                    </div>
                                    <div>
                                        <h2>{each.name}</h2>
                                        <p>Email : <span className='text-danger'>{each.email}</span></p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
            }



        </div>
    )
}


export default Home;


