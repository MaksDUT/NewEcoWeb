import Home from './../routes/Home.svelte'
import Eco from './../routes/Eco.svelte'
import NotFound from './../routes/NotFound.svelte'

const routes = {
    
    '/': Home,
    '/eco': Eco,
    '*': NotFound,
}

export default routes;