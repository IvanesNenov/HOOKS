import React, {useContext} from 'react'
import Search from "../components/Search";
import Card from "../components/Card";
import {githubContext} from "../context/github/githubContext";
import Loading from "../components/Loading";


const Home = () => {

    const state = useContext(githubContext)
    return (
        <React.Fragment>
            <Search/>
            {
                state.loading ?
                    <Loading/>

                    :
                    <div className="row">
                        {state.users.map(user =>(
                                <div className="col-sm-4 mb-4" key={user.id}>
                                    <Card user={user}/>
                                </div>)
                        )}

                    </div>
                }




        </React.Fragment>
    )
}
export default Home