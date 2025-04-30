import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

//components
import Home from './components/home'
import Artist from './components/artist'

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/artist/:artistid" component={Artist}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));