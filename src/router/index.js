import Home from './../routes/Home.svelte'
import Eco from './../routes/Eco.svelte'
import NotFound from './../routes/NotFound.svelte'
import Thanks from './../routes/Thanks.svelte'

const routes = {
    
    '/': Home,
    '/eco': Eco,
    '/thanks':Thanks,
    '*': NotFound,
}

export default routes;