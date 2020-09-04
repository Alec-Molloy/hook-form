import React, {useState} from 'react'

const UserForm = (props) =>{

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirm:""
    })
    
    const handleUser = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form>
                <div>
                    <h1>User Form</h1>
                    <label>First Name:</label>
                    <input 
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleUser}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleUser}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleUser}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input 
                        type="password"
                        name="confirm"
                        value={user.confirm}
                        onChange={handleUser}
                    />
                </div>
            </form>
            <div>
                <h1>Form Data</h1>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
                <p>{user.confirm}</p>
            </div>
        </div>
    )
}

export default UserForm;