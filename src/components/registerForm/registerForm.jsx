'use client'
import './registerForm.css'
import {register} from "../../../lib/actions";
import {useFormState} from 'react-dom'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";


function RegisterForm() {

    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return(
        <>
            <form action={formAction}>
                <input type='text' name='username' placeholder='username'/>
                <input type='email' name='email' placeholder='email'/>
                <input type='password' name='password' placeholder='password'/>
                <input type='password' name='password2' placeholder='password repeat'/>
                <button>Register</button>
                {state?.error}
                <Link href={'/login'}>Have an account? <b>Login</b></Link>
            </form>
        </>
    )
}


export default RegisterForm