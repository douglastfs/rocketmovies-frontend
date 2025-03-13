import { Container } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
  return(
    <Container 
      type="button"
      disabled={false}
      {...rest}
    >
      { Icon && <Icon size={16} />}
      { title }
    </Container>
  )
}