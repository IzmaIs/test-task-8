import { createContext } from 'react';

import { ContextProps } from './Provider.types';

export const Context = createContext<ContextProps>(null!);
