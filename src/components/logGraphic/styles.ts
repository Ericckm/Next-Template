import styled from 'styled-components'

export const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  h2 {
    color: ${(props) => props.theme.colors.third};
  }
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const Mid = styled.div`
  display: flex;
  flex: 4;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`

export const ExercisesUl = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  overflow-y: hidden;

  .active button {
    border-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.third};
  }

  li {
    button {
      font-size: 14px;
      padding: 4px 10px;
      text-align: center;
      text-decoration: none;
      border: none;
      border: 1px solid;
      border-radius: 10px;
      cursor: pointer;
      transition: all 1s ease;
      font-weight: 500;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
      color: ${(props) => props.theme.colors.third};
      background-color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.colors.secundary};

      :hover {
        border-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.third};
      }
    }
  }
`

export const GraphContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
`

export const SpanContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .active {
    border-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.third};
  }

  button {
    font-size: 14px;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    border: none;
    border: 1px solid;
    border-radius: 10px;
    cursor: pointer;
    transition: all 1s ease;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    color: ${(props) => props.theme.colors.third};
    background-color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.secundary};

    :hover {
      border-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.third};
    }
  }
`
export const ProgressionContainer = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 80%;
    min-width: 50%;
  }
`
