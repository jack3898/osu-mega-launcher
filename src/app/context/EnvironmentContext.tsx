import { type ReactElement, createContext, useContext, useState, useEffect, type ReactNode, useMemo } from 'react';

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
		window.electron.getEnvironmentVariables().then(({ localAppData }) => {
			setLocalAppData(localAppData);
		});
	}, []);

	// A useMemo is good practice to avoid unnecessary re-renders. In this case it's not necessary.
	// Any future internal state changes to this provider would trigger a re-render of all context consumers even if the value doesn't need it.
	const providerValue = useMemo(() => ({ localAppDataPath }), [localAppDataPath]);

	return <EnvironmentContext.Provider value={providerValue}>{children}</EnvironmentContext.Provider>;
}

export function useEnvironmentContext(): EnvironmentContextValue {
	const context = useContext(EnvironmentContext);

	if (!context) {
		throw new Error('useEnvironmentContext must be used within a EnvironmentContextProvider');
	}

	return context;
}
