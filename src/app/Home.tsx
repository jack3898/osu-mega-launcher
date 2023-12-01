import { type ReactElement } from 'react';
import { useEnvironmentContext } from '../context/EnvironmentContext';

export function Home(): ReactElement {
	const { localAppDataPath } = useEnvironmentContext();

	return (
		<div>
			<h1 className="text-xl">First Electron!</h1>
			<p>As a test, here's a system environment variable:</p>
			<code>{localAppDataPath}</code>
		</div>
	);
}
