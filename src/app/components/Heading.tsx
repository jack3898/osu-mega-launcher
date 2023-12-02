import { type ReactNode, type ReactElement } from 'react';

export function Heading(): void {
	return;
}

Heading.H1 = function H1({ children }: { children: ReactNode }): ReactElement {
	return <h1 className="text-xl py-4">{children}</h1>;
};

Heading.H2 = function H2({ children }: { children: ReactNode }): ReactElement {
	return <h2 className="text-lg py-4">{children}</h2>;
};

Heading.H3 = function H3({ children }: { children: ReactNode }): ReactElement {
	return <h3 className="text-base py-4">{children}</h3>;
};
