// 1. Импортируем ф-цию, с помощью которой создаем slice
import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"

const counterInitialState: CounterStateSlice = {
  count: 0,
}

// 2. Создаем слайс для counter с помощью вызова ф-ции  createAppSlice,
// в которую передаем объект настройки
export const counterSlice = createAppSlice({
  // 3. Создаем имя, под которым будет храниться объект со значением COUNTER(state)
  // Стейт для отдельных частей данных всегда представляет собой объект!
  name: "COUNTER",
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // 5. Создаем объект, внутри которого будут храниться reducers(ф-ции),
  // которые отвечают за изменение состояния
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),
  // Шаг 6. Создаем селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

// 7. Экспорт экшенов и селекторов для удобства их использования в компоненте
export const counterActions = counterSlice.actions;
export const counterSelectors = counterSlice.selectors;

// reducers: {
// plus: ()=>{}
// minus:()=>{}
// }
