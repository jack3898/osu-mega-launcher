import { type ReactNode, type ComponentProps, type ReactElement } from 'react';
import { mergeClassName } from '../../util/mergeClassName';

export function Form(formProps: ComponentProps<'form'>): ReactElement {
	return <form {...formProps} />;
}

Form.TextInput = function Input(inputProps: ComponentProps<'input'>): ReactElement {
	return (
		<input
			{...inputProps}
			type="text"
			className={mergeClassName('border rounded p-2 bg-opacity-50 bg-black', inputProps.className)}
		/>
	);
};

Form.Label = function Label(labelProps: ComponentProps<'label'>): ReactElement {
	return <label {...labelProps} className="block" />;
};

Form.Button = function Button(buttonProps: ComponentProps<'button'>): ReactElement {
	return <button {...buttonProps} className="border rounded bg-primary text-white p-2" />;
};

Form.SecondaryButton = function Button(buttonProps: ComponentProps<'button'>): ReactElement {
	return <button {...buttonProps} className="border rounded bg-default text-white p-2" />;
};

Form.Spacer = function Spacer(): ReactElement {
	return <hr className="my-4" />;
};

Form.InputZone = function InputZone({ children }: { children: ReactNode }): ReactElement {
	return <div>{children}</div>;
};

Form.SpaceRows = function Layout({ children }: { children: ReactNode }): ReactElement {
	return <div className="flex flex-col gap-4">{children}</div>;
};

Form.TextInputButtonContainer = function TextInputButtonContainer({
	textInput,
	buttons,
	...divProps
}: {
	textInput: ReactNode;
	buttons: ReactNode[];
} & ComponentProps<'div'>): ReactElement {
	return (
		<div {...divProps} className={mergeClassName('flex gap-2', divProps.className)}>
			<div className="flex-grow">{textInput}</div>
			{buttons.map((button, i) => (
				<div key={i}>{button}</div>
			))}
		</div>
	);
};
