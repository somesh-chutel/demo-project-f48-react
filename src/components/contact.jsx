import DisplayUsers from './homeComp/displayUsers';
import '../App.css';

const managersArr = [
    {
        id : 1,
        name : "Rajesh Sharma",
        email : "rsharma@gmail.com",
        status : "Active",
        CTC : '20LPA'
    },
    {
        id : 2,
        name : "Vikas Patil",
        email : "vpatil@gmail.com",
        status : "Active",
        CTC : '10LPA'
    },
    {
        id : 3,
        name : "Kunal Malhotra",
        email : "lmalhotra@gmail.com",
        status : "Inactive",
        CTC : '15LPA'
    },
    {
        id : 4,
        name : "Suyog Kalamkar",
        email : "skalamkar@gmail.com",
        status : "Active",
        CTC : '30LPA'
    },
    {
        id : 5,
        name : "Shivani Chauhan",
        email : "schauhan@gmail.com",
        status : "Inactive",
        CTC : '22LPA'
    },
    {
        id : 6,
        name : "Sonal Shahu",
        email : "sshahu@gmail.com",
        status : "Active",
        CTC : '18LPA'
    }
]

const Contact = () => {

    return(

        <div className='main-cont'>
            <h1 className='text-success'> Contact Component </h1>
            <br />
            <ul className='flex-column w-50'>
                {
                    managersArr.map( each => <DisplayUsers key = {each.id} each = {each}/>)
                }
            </ul>
        </div>
    )
}


export default Contact;