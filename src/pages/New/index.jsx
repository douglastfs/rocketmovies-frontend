import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {

    if(!title) {
      return alert("Digite um título para a nota.");
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo e não clicou em adicionar. Clique para adicionar a Tag ou deixe o campo vazio");
    }

    await api.post('notes', {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>

        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
        <Form>
          <h1>Novo filme</h1>
          <div id="title-rating">
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            /> 
          </div>
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <h3>Marcadores</h3>
          <div id="markers">
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
          
          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          /> 
        </Form>
      </main>
    </Container>
  )
}