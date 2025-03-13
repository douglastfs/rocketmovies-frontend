import { Container, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";


export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  
  const navigate = useNavigate();

  function searchNotes(note) {
    setSearch(note);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header searchNotes={searchNotes} />
      <main>
        <Content>
          <div id="fixed-menu">
            <h1>Meus Filmes</h1>
            <NewNote to="/new">
              <FaPlus />
              Adicionar filme
            </NewNote>
          </div>

          <div id="catalog">
            {
              notes.map(note => (
                <Note 
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </div>
        </Content>
      </main>
    </Container>
  );
};