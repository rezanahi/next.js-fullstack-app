'use client'
import './LoginForm.css'
import {handleGithubLogin, login} from "../../../lib/actions";
import {useFormState} from "react-dom";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Link from "next/link";


function LoginForm() {

    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/')
    }, [state?.success, router])

    return(
        <>
            <form action={formAction}>
                <input type='text' placeholder='username' name='username'/>
                <input type='password' placeholder='password' name='password'/>
                <button>Login</button>
            </form>
            {state?.error}
            <Link href={'/register'}>
                Do not have an account? <b>Register</b>
            </Link>
        </>
    )
}


export default LoginForm