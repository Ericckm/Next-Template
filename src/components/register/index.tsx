import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../services/loginRequestCall'
import { validateEmail } from '../../utils/validateEmail'
import { Loader } from '../loader'
import {
  ButtonContainer,
  Container,
  FormContainer,
  Left,
  Right,
  Title
} from './styles'

export const Register = () => {
  const [inputs, setInputs] = useState({})
  const router = useRouter()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const { isFetching, error, loggedIn } = useSelector(
    (state: any) => state.user
  )

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    register(dispatch, inputs)
    showContent()
  }

  const handleEmail = (e) => {
    const verifyEmail = validateEmail(e.target.value)
    if (!verifyEmail) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const showContent = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2500)
  }

  useEffect(() => {
    loggedIn && router.push('/training')
  }, [loggedIn])

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
            <input
              type="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleEmail}
            />
            {emailError && <span>invalid email</span>}
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            {!error && show && <Loader />}
          </form>
        </FormContainer>
        <ButtonContainer>
          <button onClick={handleSubmit}>Register</button>
          <Link href={'/'}>already have an account?</Link>
        </ButtonContainer>
      </Right>
    </Container>
  )
}
