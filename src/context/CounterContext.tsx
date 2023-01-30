import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactElement,
  useCallback,
  useContext,
  useReducer,
} from "react";

// USE REDUCER SETUP START
type initState = {
  count: number;
  text: string;
};

export const initialState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_TEXT,
  CLEAR_TEXT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_TEXT:
      return { ...state, text: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.CLEAR_TEXT:
      return { ...state, text: "" };
    default:
      return state;
  }
};
// USE REDUCER SETUP END

const useCounterContext = (initialState: initState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Functions
  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: REDUCER_ACTION_TYPE.NEW_TEXT, payload: e.target.value }),
    []
  );

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_TEXT });
  }, []);

  return { state, increment, decrement, handleTextChange, handleFormSubmit };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleTextChange: (e: ChangeEvent<HTMLInputElement>) => {},
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initialState
}: ChildrenType & initState): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  handleTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const useText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextChange,
    handleFormSubmit,
  } = useContext(CounterContext);
  return { text, handleTextChange, handleFormSubmit };
};
