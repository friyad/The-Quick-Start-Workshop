import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Authentication/firebase/firebase.initialize";
import {
    getAuth, signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    TwitterAuthProvider,
} from "firebase/auth";
import { useHistory } from "react-router";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    // console.log(user)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])


    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const handleTwitterSignIn = () => {
        return signInWithPopup(auth, twitterProvider)
    }


    const handleLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    return {
        user,
        email,
        password,
        error,
        isLoading,
        setIsLoading,
        setUser,
        setEmail,
        setPassword,
        setName,
        setError,
        handleLogOut,
        handleGoogleSignIn,
        handleTwitterSignIn,
    }
};

export default useFirebase;