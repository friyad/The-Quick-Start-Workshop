import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(isLoading)

    if (isLoading) {
        return (
            <div className="py-5">
                <div className="py-5 my-5">
                    <div className="py-5 my-5">
                        <div className="py-5 my-5">
                            <div className="py-5 my-5">
                                <Spinner animation="border" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user &&
                        (user.email || user.displayName)
                        ? (children)
                        :
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                }
            >

            </Route>
        );
    }
};

export default PrivetRoute;