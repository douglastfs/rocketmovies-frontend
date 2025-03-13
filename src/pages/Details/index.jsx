import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from '../../components/Tag';
import { FiArrowLeft } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { FaStar, FaRegStarHalfStroke  } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Details() {
  const [data, setData] = useState();
  const params = useParams();
  const { user } = useAuth();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const navigate = useNavigate()

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");
    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate('/');
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
        {
          data && 
          <main>
            <Content>
              <div id="first-section">
                <Link to="/"><ButtonText title="Voltar" icon={FiArrowLeft}/></Link>
                <div id="title-rating">
                  <h1>{data.title}</h1>
                  <div id="rating">
                  {
                    Array.from({length: data.rating}, (_, index) => (
                      <FaStar key={index}/>
                    ))
                  }
                  </div>
                </div>
                <div id="notes-info">
                  <img 
                    src={avatarUrl}
                    alt={`Foto de ${user.name}`}
                  />
                  <span>{`Por ${user.name}`}</span>
                  <IoTimeOutline />
                  <span>{data.created_at}</span>
                </div>
              </div>

              <div id="second-section">
                { 
                  data.tags && data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    /> 
                  ))
                }
              </div>

              <div id="third-section">
                <p>
                  {data.description}
                </p>
              </div>
              <Button 
                title="Excluir nota"
                onClick={handleRemove}
              />
            </Content>
          </main>
        }

    </Container>
  );
}