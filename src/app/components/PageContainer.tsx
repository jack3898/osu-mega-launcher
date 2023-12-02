import { type ReactElement } from 'react';

export function PageContainer({ children }: { children: ReactElement }): ReactElement {
	return <div className="bg-fuchsia-950 h-screen p-4 text-white">{children}</div>;
}
