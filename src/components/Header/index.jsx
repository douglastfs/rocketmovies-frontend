import { Container, Profile } from './styles';
import { Input } from '../Input';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { useState, useEffect } from 'react';

export function Header({searchNotes}) {
  const [search, setSearch] = useState('');
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  useEffect(() => {
    if(searchNotes)
      searchNotes(search)
  }, [search]);

  return (
    <Container>
      <div>
        <Link to="/"><h1>RocketMovies</h1></Link>
        <Input 
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <Link to="/" onClick={signOut}>Sair</Link>
          </div>
          <Link to="/profile">
            <img 
              src={avatarUrl}
              alt={user.name}
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
};