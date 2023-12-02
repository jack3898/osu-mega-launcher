// Sometimes components provide a className as a prop, but we want to add our own className to it.
export function mergeClassName(staticClassName: string, optionalClassName?: string): string {
	return optionalClassName ? `${staticClassName} ${optionalClassName}` : staticClassName;
}
