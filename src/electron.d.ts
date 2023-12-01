declare global {
	interface Window {
		electron: {
			getLocalAppData: () => Promise<string>;
		};
	}
}

export {};
