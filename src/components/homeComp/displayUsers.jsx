

const DisplayUsers = ({each,deleteContact}) => {

    const onDeleteContact = ()=>{

        deleteContact(each.id);

    }

    return (
         <li style={{margin : "15pxs"}} className='w-100 d-flex justify-content-between align-items-center mb-3 shadow'>
                                    <div className='my-profile'>
                                        <h1>{each.name[0]}</h1>
                                    </div>
                                    <div>
                                        <h2>{each.name}</h2>
                                        <p>Email : <span className='text-danger'>{each.email}</span></p>
                                    </div>

                                    <button onClick={onDeleteContact} className="btn btn-danger">X</button>
                                </li>
    )
}


export default DisplayUsers;