import React from 'react'

const Repos = ({repos}) => (

    <React.Fragment>
        {repos.map(repo => (
            <div className="card mb-3" key={repo.id}>
                <div className="card-body">
                    <a
                        href={repo.html_url}
                       target="_blank"
                       rel="noreferrer">{repo.name}</a>
                </div>
            </div>
        ))}
        </React.Fragment>


)
export default Repos