import Link from 'next/link'
import {
  ButtonContainer,
  Container,
  FormContainer,
  Left,
  Right,
  Title
} from './styles'

export const Register = () => {
  return (
    <Container>
      <Left>
        <img src="assets/Gym.jpg" alt="" />
      </Left>
      <Right>
        <Title>
          <h2>Welcome to our app</h2>
        </Title>
        <FormContainer>
          <form action="">
            <p>Create an account</p>
            <input type="name" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </form>
        </FormContainer>
        <ButtonContainer>
          <button>Register</button>
          <Link href={'/'}>already have an account?</Link>
        </ButtonContainer>
      </Right>
    </Container>
  )
}