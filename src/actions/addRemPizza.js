import {
  ADD_MOCARELLO, REMOVE_MOCARELLO,
  ADD_TARTUFATA, REMOVE_TARTUFATA,
  ADD_MARGHARITA, REMOVE_MARGHARITA,
  ADD_ITALIAN, REMOVE_ITALIAN,
  ADD_COCABELLA, REMOVE_COCABELLA,
  ADD_TWENKY, REMOVE_TWENKY,
  ADD_KESTERATA, REMOVE_KESTERATA,
  ADD_NAMELITA, REMOVE_NAMELITA,
} from './types'

export const addMocarello = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_MOCARELLO
    });
  }
}
export const removeMocarello = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_MOCARELLO
    });
  }
}
export const addTartufata = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_TARTUFATA
    });
  }
}
export const removeTartufata = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_TARTUFATA
    });
  }
}
export const addMargharita = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_MARGHARITA
    });
  }
}
export const removeMargharita = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_MARGHARITA
    });
  }
}
export const addItalian = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITALIAN
    });
  }
}
export const removeItalian = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITALIAN
    });
  }
}
export const addCocabella = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_COCABELLA
    });
  }
}
export const removeCocabella = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_COCABELLA
    });
  }
}
export const addTwenky = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_TWENKY
    });
  }
}
export const removeTwenky = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_TWENKY
    });
  }
}
export const addKesterata = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_KESTERATA
    });
  }
}
export const removeKesterata = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_KESTERATA
    });
  }
}
export const addNamelita = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_NAMELITA
    });
  }
}
export const removeNamelita = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_NAMELITA
    });
  }
}
