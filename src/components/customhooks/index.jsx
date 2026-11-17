import { useState } from "react";

export const useCards = () =>{

        const [allvalues,setvalues] = useState({
            contact : "",
            contactArr : []
        });

        const addContact = () =>{

            setvalues({...allvalues,contactArr : [...allvalues.contactArr,{id : allvalues.contactArr.length+1,email : `${allvalues.contact}${allvalues.contactArr.length+1}@gmail.com`,name : allvalues.contact}]})
        }

        const deleteContact = (id)=>{
            
            setvalues({...allvalues,contactArr : allvalues.contactArr.filter( each => each.id !== id )});
        }

        const changeContact = (value)=>{

            setvalues({...allvalues,contact : value});
        }


        return [allvalues,addContact,deleteContact,changeContact];

}