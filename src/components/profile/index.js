import React from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/94084352?v=4" alt="User avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUsername>
                        <h3>Username: </h3>
                        <a href="https://github.com/GDDev" target="_blank" rel="noreferrer">{githubState.user.login}</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Follower</h4>
                        <span>{githubState.user.follower}</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>{}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
};

export default Profile;