import {signIn, auth, signOut} from "../../../../lib/auth";
import {handleGithubLogin, handleGithubLogout, login} from '../../../../lib/actions'
import LoginForm from '@/components/loginForm/LoginForm';
async function Login () {

    return(
        <>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <LoginForm></LoginForm>
        </>
    )
}

export default Login