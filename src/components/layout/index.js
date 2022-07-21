import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import Header from '../header';

const Layout = ({ children }) => {
    const { githubState } = useGithub();

    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    );
};

export default Layout;