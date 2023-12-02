import { type ReactElement } from 'react';

export function Card({ children }: { children: ReactElement }): ReactElement {
	return <div className="bg-black bg-opacity-10 rounded border white p-4">{children}</div>;
}
