import '../App.css'; 


const NotFound = ()=>(

    <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZqn9DkEqTxt5MmWJtL7t9oV5E3Ph9zJB-wECA3JX-w&s=10" width="40%" />
        <br />
        <h2>The path you mentioned is wrong please go back to home</h2>
        <br />
        <button className='btn btn-primary'>Home</button>
    </div>
)


export default NotFound;