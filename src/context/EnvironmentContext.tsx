import { type ReactElement, createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type EnvironmentContextValue = {
	localAppDataPath: string | undefined;
};

/**
 * This context will be used to provide specific environment variables to the app.
 */
const EnvironmentContext = createContext<EnvironmentContextValue | null>(null);

export function EnvironmentContextProvider({ children }: { children: ReactNode }): ReactElement {
	const [localAppDataPath, setLocalAppData] = useState<string | undefined>(undefined);

	useEffect(() => {
		window.electron.getLocalAppData().then(setLocalAppData);
	}, []);

	return <EnvironmentContext.Provider value={{ localAppDataPath }}>{children}</EnvironmentContext.Provider>;
}

export function useEnvironmentContext(): EnvironmentContextValue {
	const context = useContext(EnvironmentContext);

	if (!context) {
		throw new Error('useEnvironmentContext must be used within a EnvironmentContextProvider');
	}

	return context;
}
