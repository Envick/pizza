import {
  ADD_MOCARELLO, REMOVE_MOCARELLO,ADD_TARTUFATA, REMOVE_TARTUFATA, ADD_MARGHARITA, REMOVE_MARGHARITA, ADD_COCABELLA, REMOVE_COCABELLA, ADD_TWENKY, REMOVE_TWENKY, ADD_ITALIAN, REMOVE_ITALIAN, ADD_KESTERATA, REMOVE_KESTERATA, ADD_NAMELITA, REMOVE_NAMELITA
} from '../actions/types'

const initialState = { 
  Mocarello: {
    img: 'Pizza',
    count: 1,
    name: 'Mocarello',
    price:{
      dollars: 40,
      euros: 25
    },
    costDollars: 40,
    costEuros: 25,
  },
  Tartufata: {
    img: 'Pizza',
    count: 1,
    name: 'Tartufata',
    price:{
      dollars: 45,
      euros: 30
    },
    costDollars: 45,
    costEuros: 30,
  },
  Margharita: {
    img: 'Pizza',
    count: 1,
    name: 'Margharita',
    price:{
      dollars: 50,
      euros: 35
    },
    costDollars: 50,
    costEuros: 35,
  },
  Italian: {
    img: 'Pizza',
    count: 1,
    name: 'Italian',
    price:{
      dollars: 27,
      euros: 12
    },
    costDollars: 27,
    costEuros: 12,
  },
  Cocabella: {
    img: 'Pizza',
    count: 1,
    name: 'Cocabella',
    price:{
      dollars: 60,
      euros: 45
    },
    costDollars: 60,
    costEuros: 45,
  },
  Twenky: {
    img: 'Pizza',
    count: 1,
    name: 'Twenky',
    price:{
      dollars: 50,
      euros: 37
    },
    costDollars: 50,
    costEuros: 37,
  },
  Kesterata: {
    img: 'Pizza',
    count: 1,
    name: 'Kesterata',
    price:{
      dollars: 50,
      euros: 35
    },
    costDollars: 50,
    costEuros: 35,
  },
  Namelita: {
    img: 'Pizza',
    count: 1,
    name: 'Namelita',
    price:{
      dollars: 100,
      euros: 85
    },
    costDollars: 100,
    costEuros: 85,
  },
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_MOCARELLO:
      return {
        ...state,
        Mocarello:{
          ...state.Mocarello,
          count: state.Mocarello.count + 1,
          costDollars: (state.Mocarello.count + 1) * state.Mocarello.price.dollars,
          costEuros: (state.Mocarello.count + 1) * state.Mocarello.price.euros
        }
      }
    case REMOVE_MOCARELLO:
      return {
        ...state,
        Mocarello:{
          ...state.Mocarello,
          count: state.Mocarello.count - 1,
          costDollars: (state.Mocarello.count -1) * state.Mocarello.price.dollars,
          costEuros: (state.Mocarello.count - 1) * state.Mocarello.price.euros
        }
      }
      case ADD_TARTUFATA:
        return {
          ...state,
          Tartufata:{
            ...state.Tartufata,
            count: state.Tartufata.count + 1,
            costDollars: (state.Tartufata.count + 1) * state.Tartufata.price.dollars,
            costEuros: (state.Tartufata.count + 1) * state.Tartufata.price.euros
          }
        }
    case REMOVE_TARTUFATA:
      return {
        ...state,
        Tartufata:{
          ...state.Tartufata,
          count: state.Tartufata.count - 1,
          costDollars: (state.Tartufata.count - 1) * state.Tartufata.price.dollars,
          costEuros: (state.Tartufata.count - 1) * state.Tartufata.price.euros
        }
      }
    case ADD_MARGHARITA:
      return {
        ...state,
        Margharita:{
          ...state.Margharita,
          count: state.Margharita.count + 1,
          costDollars: (state.Margharita.count + 1) * state.Margharita.price.dollars,
          costEuros: (state.Margharita.count + 1) * state.Margharita.price.euros
        }
      }
    case REMOVE_MARGHARITA:
      return {
        ...state,
        Margharita:{
          ...state.Margharita,
          count: state.Margharita.count - 1,
          costDollars: (state.Margharita.count - 1) * state.Margharita.price.dollars,
          costEuros: (state.Margharita.count - 1) * state.Margharita.price.euros
        }
      }
    case ADD_ITALIAN:
      return {
        ...state,
        Italian:{
          ...state.Italian,
          count: state.Italian.count + 1,
          costDollars: (state.Italian.count + 1) * state.Italian.price.dollars,
          costEuros: (state.Italian.count + 1) * state.Italian.price.euros
        }
      }
    case REMOVE_ITALIAN:
      return {
        ...state,
        Italian:{
          ...state.Italian,
          count: state.Italian.count - 1,
          costDollars: (state.Italian.count - 1) * state.Italian.price.dollars,
          costEuros: (state.Italian.count - 1) * state.Italian.price.euros
        }
      }
    case ADD_COCABELLA:
      return {
        ...state,
        Cocabella:{
          ...state.Cocabella,
          count: state.Cocabella.count + 1,
          costDollars: (state.Cocabella.count + 1) * state.Cocabella.price.dollars,
          costEuros: (state.Cocabella.count + 1) * state.Cocabella.price.euros
        }
      }
    case REMOVE_COCABELLA:
      return {
        ...state,
        Cocabella:{
          ...state.Cocabella,
          count: state.Cocabella.count - 1,
          costDollars: (state.Cocabella.count - 1) * state.Cocabella.price.dollars,
          costEuros: (state.Cocabella.count - 1) * state.Cocabella.price.euros
        }
      }
    case ADD_TWENKY:
      return {
        ...state,
        Twenky:{
          ...state.Twenky,
          count: state.Twenky.count +  1,
          costDollars: (state.Twenky.count + 1) * state.Twenky.price.dollars,
          costEuros: (state.Twenky.count + 1) * state.Twenky.price.euros
        }
      }
    case REMOVE_TWENKY:
      return {
        ...state,
        Twenky:{
          ...state.Twenky,
          count: state.Twenky.count - 1,
          costDollars: (state.Twenky.count - 1) * state.Twenky.price.dollars,
          costEuros: (state.Twenky.count - 1) * state.Twenky.price.euros
        }
      }
    case ADD_KESTERATA:
      return {
        ...state,
        Kesterata:{
          ...state.Kesterata,
          count: state.Kesterata.count + 1,
          costDollars: (state.Kesterata.count + 1) * state.Kesterata.price.dollars,
          costEuros: (state.Kesterata.count + 1) * state.Kesterata.price.euros
        }
      }
    case REMOVE_KESTERATA:
      return {
        ...state,
        Kesterata:{
          ...state.Kesterata,
          count: state.Kesterata.count - 1,
          costDollars: (state.Kesterata.count - 1) * state.Kesterata.price.dollars,
          costEuros: (state.Kesterata.count - 1) * state.Kesterata.price.euros
        }
      }
    case ADD_NAMELITA:
      return {
        ...state,
        Namelita:{
          ...state.Namelita,
          count: state.Namelita.count + 1,
          costDollars: (state.Namelita.count + 1) * state.Namelita.price.dollars,
          costEuros: (state.Namelita.count - 1) * state.Mocarello.price.euros
        }
      }
    case REMOVE_NAMELITA:
      return {
        ...state,
        Namelita:{
          ...state.Namelita,
          count: state.Namelita.count - 1,
          costDollars: (state.Namelita.count - 1) * state.Namelita.price.dollars,
          costEuros: (state.Namelita.count - 1) * state.Namelita.price.euros
        }
      }
    default:
      return state;
  }
}