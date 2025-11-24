import Counter from "components/Counter/Counter"
import { Lesson17Wrapper } from "./styles"
// 9. Импортировать хуки для dispatch(useAppDispatch) и получения данных(useAppSelector)
import { useAppDispatch, useAppSelector } from "store/hooks"
// 10. Импортируем экшены и селекторы из файла со слайсом
import {
  counterActions,
  counterSelectors,
} from "store/redux/counter/counterSlice"

function Lesson17() {
  // 11. Получаем ф-цию dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch()

  // 12. Забираем значение counter из store
  const counter = useAppSelector(counterSelectors.counterValue)

  // 13. Вызываем dispatch и передаем в него вызов необходимых экшенов.
  // вызов dispatch нужно делать внутри ф-ции, которая срабатывает при клике на кнопку
  const onPlus = () => {
    dispatch(counterActions.plus(10))
  }

  const onMinus = () => {
    dispatch(counterActions.minus(5))
  }

  return (
    <Lesson17Wrapper>
      <Counter counter={counter} onPlusClick={onPlus} onMinusClick={onMinus} />
    </Lesson17Wrapper>
  )
}
export default Lesson17
