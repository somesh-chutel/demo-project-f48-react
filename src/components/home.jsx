
import { useEffect, useState } from 'react';
import '../App.css';
import DisplayUsers from './homeComp/displayUsers';

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
                            allValues.users.map( each => <DisplayUsers each = {each}/>)
                        }
                    </ul>
                )
            }



        </div>
    )
}


export default Home;


