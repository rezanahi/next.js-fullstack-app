import {register} from "../../../../lib/actions";

function Register () {


    return (
        <>
            <form action={register}>
                <input type='text' name='username' placeholder='username'/>
                <input type='email' name='email' placeholder='email'/>
                <input type='password' name='password' placeholder='password'/>
                <input type='password' name='password2' placeholder='password repeat'/>
                <button>Register</button>
            </form>
        </>
    )
}

export default Register