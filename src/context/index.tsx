import { Job } from '@/api/types';
import { createContext, useState } from 'react';

interface RootState {
  jobs: Job[];
}

interface IContext {
  state: RootState;
  setState: (state: RootState) => void;
}

const initialState: RootState = {
  jobs: [],
};

export const Context = createContext<IContext>({
  state: initialState,
  setState: () => {},
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<RootState>(initialState);

  return (
    <Context.Provider
      value={{
        state,
        setState: newState => setState({ ...state, ...newState }),
      }}
    >
      {children}
    </Context.Provider>
  );
};
