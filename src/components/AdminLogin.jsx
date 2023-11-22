// import React from 'react';
// import LockIcon from '@mui/icons-material/Lock';
// import { useEffect } from 'react';

// const AdminLogin = () => {

//     let fieldSize = {
//         border: '1px solid lightgray',
//         padding: '8px 90px',
//         borderRadius: '10px',
//     }

//     let btnSize = {
//         fontSize: '20px',
//         // padding: '5px 118px',
//         padding: '5px 156px',
//         borderRadius: '10px',
//     }

//     useEffect(() => {
//         handleLogin()
//       }, [])

//       const handleLogin = async () => {
//         console.warn("email, password", Email, Password)
//         let result = await fetch("http://localhost:5000/admin/login", {
//           method: 'post',
//           body: JSON.stringify({ Email, Password }),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         })
//         result = await result.json()
//         console.warn(result)

//       }

//     return (
//         <>
//             <div className='pt-5 my-5'>
//                 <div className="mt-5 my-5" style={{ display: 'grid', placeItems: "center" }}>
//                 <LockIcon sx={{ fontSize: '40px', color: 'rgb(53, 138, 148)', marginBottom: '15px' }} />
//                     <h1 className="fs-1 fw-bold lh-1 mb-4" style={{ color: 'rgb(53, 138, 148)' }}>
//                        Admin Login
//                     </h1>

//                     <div className='mb-3'>
//                         <input type="email" placeholder="Email" style={fieldSize} />
//                     </div>

//                     <div className='mb-3'>
//                         <input type="password" placeholder="Password" style={fieldSize} />
//                     </div>

//                     <button className=" btn btn-primary" type="submit" style={btnSize}>
//                         Login
//                     </button>


//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminLogin


import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate(); 

    let fieldSize = {
        border: '1px solid lightgray',
        padding: '8px 90px',
        borderRadius: '10px',
    }

    let btnSize = {
        fontSize: '20px',
        padding: '5px 156px',
        borderRadius: '10px',
    }

    useEffect(() => {
        // navigate("/")
    })

    const handleLogin = async () => {
        console.warn("email, password", Email, Password);

        try {
            const response = await fetch("https://mlm-backend-mx3k.onrender.com/admin/login", {
                method: 'POST',
                body: JSON.stringify({ Email, Password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok === true) {
                // If the login is successful, save the admin email in localStorage
                localStorage.setItem('adminEmail', Email);
                console.log(response.ok);
                // Navigate to the main page (replace '/main' with the actual path)
                navigate("/")

            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    }

    return (
        <>
            <div className='pt-5 my-5'>
                <div className="mt-5 my-5" style={{ display: 'grid', placeItems: "center" }}>
                    <LockIcon sx={{ fontSize: '40px', color: 'rgb(53, 138, 148)', marginBottom: '15px' }} />
                    <h1 className="fs-1 fw-bold lh-1 mb-4" style={{ color: 'rgb(53, 138, 148)' }}>
                        Admin Login
                    </h1>

                    <div className='mb-3'>
                        <input
                            type="email"
                            placeholder="Email"
                            style={fieldSize}
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-3'>
                        <input
                            type="password"
                            placeholder="Password"
                            style={fieldSize}
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary" type="submit" style={btnSize} onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;
