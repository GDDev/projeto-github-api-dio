import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
    return (
        <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel><RepositoryItem name="css-transitions-dio" linkToRepo="https://github.com/GDDev/css-transitions-dio" fullName="GDDev/css-transitions-dio"/></S.WrapperTabPanel>
            <S.WrapperTabPanel><RepositoryItem name="curso_php" linkToRepo="https://github.com/matheusbattisti/curso_php" fullName="matheusbattisti/curso_php"/></S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositories;