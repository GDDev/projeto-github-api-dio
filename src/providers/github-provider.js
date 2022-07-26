import React, { createContext, useCallback, useState } from 'react';
import Api from "../services/api";

export const GithubContext = createContext({
    loading: false,
    user: {
    },
    repositories: [],
    starred: []
});

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });

    const getUser = (username) => {

        setGithubState(prevState => ({
            ...prevState, loading: !prevState.loading
        }));

        Api.get(`users/${username}`).then(({ data }) => {
            setGithubState(prevState => ({
                ...prevState, hasUser: true, user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos
                }
            }));
        }).finally(() => {
            setGithubState(prevState => ({
                ...prevState, loading: !prevState.loading
            }));
        })
    };

    const getUserRepos = () => {
        Api.get(`users/${githubState.user.login}/repos`).then(({ data }) => {
            console.log(`users/${githubState.user.login}/repos`);
            setGithubState(prevState => ({
                ...prevState, repositories: data
            }));
        });
    };

    const getUserStarred = () => {
        Api.get(`users/${githubState.user.login}/starred`).then(({ data }) => {
            setGithubState(prevState => ({
                ...prevState, starred: data
            }));
        });
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback(() => getUserRepos(), []),
        getUserStarred: useCallback(() => getUserStarred(), [])
    };

    return (
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    )
}

export default GithubProvider;