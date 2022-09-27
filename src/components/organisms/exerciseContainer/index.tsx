import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 3;
  width: 80%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  overflow-y: hidden;
`

export const ExerciseContainer = ({ children }) => {
  return <Container>{children}</Container>
}
