import React, {useContext, useEffect} from 'react'
import {githubContext} from "../context/github/githubContext";
import Link from "react-router-dom/Link";
import Repos from "../components/Repos";
import Loading from "../components/Loading";

export const Profile = ({match}) => {
    // console.log('match', match)
    const urlName = match.params.name

    const {getUser, getRepos, user, loading, repos} = useContext(githubContext)

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
// eslint-disable-next-line
    }, [])

    if (loading) {
        return <Loading/>

    }

    const {
        name, company, avatar_url,
        login, location, followers,
        following, public_repos, public_gists,
        bio, blog, html_url
    } = user
    return (
        <React.Fragment>
            <Link to={'/'} className="btn btn-primary">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{width: 150}}/>
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            }
                            <a href={html_url}
                               target="_blank"
                               rel="noreferrer"
                               className="btn btn-dark">
                                Открыть профиль
                            </a>
                            <ul>
                                {login && <li><strong>User</strong>: {login}</li>}
                                {company && <li><strong>Company</strong>: {company}</li>}
                                {blog && <li><strong>Website</strong>: {blog}</li>}
                            </ul>

                            <div className="badge bg-success">Подписчиков: {followers}</div>
                            <div className="badge bg-primary">Подписок: {following}</div>
                            <div className="badge bg-info">Репозиториев: {public_repos}</div>
                            <div className="badge bg-danger">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos}/>

        </React.Fragment>
    )
}
