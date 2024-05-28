import { useContext } from 'react';

import { Context } from './Provider.context';

export const useProvider = () => {
	return useContext(Context);
};
