import './todo-test.css'
import {AddPost} from '../../../lib/actions'

function TodoText() {



    return(
        <>
            <h1>to do Test</h1>
            <form action={AddPost} method='post'>
                <input type="text" name='todo-name'/>
                <input type="text" name='todo-slug'/>
                <button type='submit'>Add To do</button>
            </form>
        </>
    )
}

export default TodoText