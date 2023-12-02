import { type ReactElement } from 'react';
import { EnvironmentContextProvider } from './context/EnvironmentContext';
import { Home } from './Home';
import { PageContainer } from './components/PageContainer';

export function Main(): ReactElement {
	return (
		<EnvironmentContextProvider>
			<PageContainer>
				<Home />
			</PageContainer>
		</EnvironmentContextProvider>
	);
}
