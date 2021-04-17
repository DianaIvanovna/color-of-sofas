
import { ADD_GENDER, SHOW_ALERT, HIDE_ALERT, SAVE_PHOTO, NEXT_PAGE_FORM } from "../actions/actionTypes";

const initialState = {
  gender: null,
  interests: [],
  sofaPropertys: [],
  alertText: null,
  activePageForm: 1,
  form: [
    {
      title: 'твои данные',
      subtitle: 'Мы подберём для тебя идеальную пару',
    },
    {
      title: 'твои Интересы',
      subtitle: 'Расскажи о своих интересах.<br>Выбери три критерия:',
      interestsWomen: [
        'Вечеринки 🎉','Блогинг 💻','Путешествия 🌴',
        'Романтические комедии 💏','Музыка 🎤',
        'Книги 📚',
        'Бьюти-процедуры 💄',
        'Кулинария 🍳',
        'Фитнес 💪',
        'Видеоигры 🎮',
        'Астрология ✨',
        'Мода 🛍',
      ]
    }
  ],
  photo: null
}

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case ADD_GENDER:
      return {...state, gender: action.payload };
    case SHOW_ALERT:
      return {...state, alertText: action.payload};
    case HIDE_ALERT:
        return {...state, alertText: null};
    case SAVE_PHOTO:
      return {...state, photo: action.payload};
    case NEXT_PAGE_FORM: 
      return {...state, activePageForm: state.activePageForm + 1 }
    default: return state;
  }
}