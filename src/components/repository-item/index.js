import React from 'react'
import * as S from './styled';

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
        <S.Wrapper>
            <h2><a href={linkToRepo} target="_blank" rel="noreferrer">{name}</a></h2>
            <h4>full name:</h4>
            <span>{fullName}</span>
        </S.Wrapper>
    )
}

export default RepositoryItem