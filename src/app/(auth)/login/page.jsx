import {signIn, auth, signOut} from "../../../../lib/auth";
import {handleGithubLogin, handleGithubLogout, login} from '../../../../lib/actions'
async function Login () {

    return(
        <>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <form action={login}>
                <input type='text' placeholder='username' name='username'/>
                <input type='password' placeholder='password' name='password'/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login