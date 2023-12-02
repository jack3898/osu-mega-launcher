declare global {
	interface Window {
		electron: {
			getEnvironmentVariables: () => Promise<{
				localAppData: string;
			}>;
		};
	}
}

export {};
