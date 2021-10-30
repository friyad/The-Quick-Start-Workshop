import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import Divider from '../../../images/divider.png'


const LogIn = () => {
    const {
        user,
        error,
        setError,
        setUser,
        setEmail,
        setPassword,
        setIsLoading,
        handleGoogleSignIn,
        handleTwitterSignIn,
    } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";

    const handleRedirects = (signInMethod) => {
        setIsLoading(true)
        signInMethod()
            .then(result => {
                setUser(result.user)
                setError('')
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    return (
        <div className="py-5" style={{ backgroundColor: '#eeeeee' }} >
            <div className="my-5 py-5 w-75 mx-auto">
                <div className="p-5 rounded-3 row shadow-lg"
                    style={{ backgroundColor: 'white' }} data-aos="fade-up">

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="p-2 w-50 mx-auto">
                            <img onClick={() => handleRedirects(handleGoogleSignIn)} src="https://i.ibb.co/TrXWCNN/Google.png" alt=""
                                className="w-100" style={{ height: '44px', cursor: 'pointer' }} />
                            <img onClick={() => handleRedirects(handleTwitterSignIn)} src="https://i.ibb.co/7KsF8c7/twitter.png" alt=""
                                className="w-100 mt-4 coursor-pointer" style={{ height: '44px', cursor: 'pointer' }} />
                            <img src="https://i.ibb.co/9yZxYgj/facebook.png" alt=""
                                className="w-100 mt-4 coursor-pointer" style={{ height: '44px', cursor: 'pointer' }} />
                            <img src="https://i.ibb.co/QMm05bm/github.png" alt=""
                                className="w-100 mt-4 coursor-pointer" style={{ height: '44px', cursor: 'pointer' }} />
                        </div>
                    </div>

                    <div className="col-1 select-none d-flex align-items-center">
                        <img className="w-100" src={Divider} alt="" />
                    </div>

                    <div className="col-1"></div>

                    <div className="col-4 text-start">
                        <Form>
                            <h2 className="m-0">Please Log In</h2>
                            <hr className="my-2 mb-4" />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicReTypePassword">
                                <Form.Label>Re-Type Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-Type Password" />
                            </Form.Group>
                            <p className="text-danger">{error}</p>

                            <p>New user? Please <Link to="registration">Registration</Link></p>
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default LogIn;