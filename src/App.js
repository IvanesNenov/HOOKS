import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {NavBar} from "./components/NavBar";
import Home from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import Alert from "./components/Alert";
import {AlertState} from './context/alert/alertState'

function App() {
    return (
        <AlertState>
            <React.Fragment>
                <NavBar/>
                <div className="container pt-4">
                    <Alert alert={{text: 'test alert'}}/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                    </Switch>
                    {/*<Home/>*/}
                </div>
            </React.Fragment>
        </AlertState>
    )
}

export default App
