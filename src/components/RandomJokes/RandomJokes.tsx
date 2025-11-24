import Button from "components/Button/Button"
import Spinner from "components/Spinner/Spinner"
import {
  ButtonWrapper,
  JokesContainer,
  JokeText,
  RandomJokesWrapper,
  Error,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randomJokes/randomJokesSlice"
function RandomJokes() {
  const { data, error, status } = useAppSelector(randomJokesSelectors.jokeData)
  const dispatch = useAppDispatch()
  const getJoke = () => {
    dispatch(randomJokesActions.getJoke())
  }
  return (
    <RandomJokesWrapper>
      <ButtonWrapper>
        <Button name="GET JOKES" onClick={getJoke} />
      </ButtonWrapper>
      {status === "loading" && <Spinner />}
      <JokesContainer>
        <JokeText>{data}</JokeText>
      </JokesContainer>
      {status === "error" && <Error>{error}</Error>}
    </RandomJokesWrapper>
  )
}
export default RandomJokes
