import {signIn, auth, signOut} from "../../../../lib/auth";
import {handleGithubLogin, handleGithubLogout} from '../../../../lib/actions'
async function Login () {

    return(
        <>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
        </>
    )
}

export default Login