import React from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if(!usernameForSearch) return getUser(usernameForSearch);
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Procurar usuário" onChange={submitGetUser}/>
                <button type="submit">Buscar</button>
            </S.Wrapper>
        </header>
    )
}

export default Header;