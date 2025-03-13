import { Container, } from './styles';
import { Tag } from '../Tag';
import { FaStar, FaRegStarHalfStroke  } from "react-icons/fa6";

export function Note({ icon: Icon, data, ...rest }){
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div>
        {
          Array.from({length: data.rating}, (_, index) => (
            <FaStar key={index}/>
          ))
        }
      </div>

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          { data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>) }
        </footer>
      }
    </Container>
  );
};