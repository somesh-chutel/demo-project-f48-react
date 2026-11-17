import { useCards } from './customhooks';
import '../App.css';
import DisplayUsers from './homeComp/displayUsers';

const About = () => {

    const [allvalues,addContact,deleteContact,changeContact] = useCards();

    return(

        <div className='main-cont text-secondary'>
            <h1 className='text-primary'>Contact Details</h1>
            <br />
            <input onChange={e=>{ changeContact(e.target.value) }}  type="text" className='form-control w-50' placeholder='Add Contact'/>
            <br />
            <button onClick={()=>{ addContact() }} className='btn btn-primary'>Add</button>
            <br />
            <ul className='w-50 p-3 flex-column'>
                {
                allvalues.contactArr.map( each => <DisplayUsers each = {each} key={each.id} deleteContact = {deleteContact}/>)
                }
            </ul>
        </div>
    )
}


export default About;