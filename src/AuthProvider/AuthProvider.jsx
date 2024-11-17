import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext()

const AuthProvider = ({children})=> {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    

    const googleProvider = new GoogleAuthProvider()

    const handleRegister = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const handleLogin = (email,password)=>{
      return   signInWithEmailAndPassword(auth,email,password)
    }

    const handleGoogleLogin = ()=>{
       return signInWithPopup(auth,googleProvider)
    }

    const handleLogout = ()=>{
        signOut(auth)
    }

    const manageProfile = (name,photo)=>{

        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                if(currentUser){
                    setUser(currentUser)
                }else{
                    setUser(null)
                }
                setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        manageProfile,
        user,
        setUser,
        loading

    }
   
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
