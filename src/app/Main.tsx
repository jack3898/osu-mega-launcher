import { type ReactElement } from 'react';
import { EnvironmentContextProvider } from '../context/EnvironmentContext';
import { Home } from './Home';

export function Main(): ReactElement {
	return (
		<EnvironmentContextProvider>
			<Home />
		</EnvironmentContextProvider>
	);
}
