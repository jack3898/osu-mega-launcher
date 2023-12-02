import { type ReactElement } from 'react';
import { useEnvironmentContext } from './context/EnvironmentContext';
import { Heading } from './components/Heading';
import { Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Card } from './components/Card';
import { Form } from './components/Form';

const formSchema = z.object({
	osuDir: z.string()
});

export function Home(): ReactElement {
	const { localAppDataPath } = useEnvironmentContext();

	if (!localAppDataPath) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<header>
				<Heading.H1>Osu Mega Launcher</Heading.H1>
			</header>
			<main>
				<Card>
					<article>
						<Heading.H2>Locations</Heading.H2>
						<Formik
							initialValues={{
								osuDir: `${localAppDataPath}\\osu!`,
								rewindDir: `${localAppDataPath}\\Programs\\Rewind`,
								danserDir: '',
								otdDir: '',
								trainerDir: ''
							}}
							validationSchema={toFormikValidationSchema(formSchema)}
							onSubmit={(values): void => {
								alert(JSON.stringify(values, null, 2));
							}}
						>
							{({ values, handleSubmit, handleChange }): ReactElement => (
								<Form onSubmit={handleSubmit}>
									<Form.SpaceRows>
										<Form.InputZone>
											<Form.Label htmlFor="osuDir">Osu! location</Form.Label>
											<Form.TextInputButtonContainer
												className="w-full"
												textInput={
													<Form.TextInput
														name="osuDir"
														className="w-full"
														id="osuDir"
														value={values.osuDir}
														onChange={handleChange}
													/>
												}
												buttons={[<Form.Button>...</Form.Button>]}
											/>
										</Form.InputZone>
										<Form.InputZone>
											<Form.Label htmlFor="rewindDir">Rewind location</Form.Label>
											<Form.TextInputButtonContainer
												textInput={
													<Form.TextInput
														name="rewindDir"
														id="rewindDir"
														value={values.rewindDir}
														className="w-full"
														onChange={handleChange}
													/>
												}
												buttons={[<Form.Button>...</Form.Button>]}
											/>
										</Form.InputZone>
										<Form.InputZone>
											<Form.Label htmlFor="danserDir">Danser location</Form.Label>
											<Form.TextInputButtonContainer
												textInput={
													<Form.TextInput
														name="danserDir"
														id="danserDir"
														value={values.danserDir}
														className="w-full"
														onChange={handleChange}
													/>
												}
												buttons={[<Form.Button>...</Form.Button>]}
											/>
										</Form.InputZone>
										<Form.InputZone>
											<Form.Label htmlFor="otdDir">Open Tablet Driver location</Form.Label>
											<Form.TextInputButtonContainer
												textInput={
													<Form.TextInput
														name="otdDir"
														id="otdDir"
														value={values.otdDir}
														className="w-full"
														onChange={handleChange}
													/>
												}
												buttons={[<Form.Button key="btn">...</Form.Button>]}
											/>
										</Form.InputZone>
										<Form.InputZone>
											<Form.Label htmlFor="trainerDir">FunOrange Osu! Trainer location</Form.Label>
											<Form.TextInputButtonContainer
												textInput={
													<Form.TextInput
														name="trainerDir"
														id="trainerDir"
														value={values.trainerDir}
														className="w-full"
														onChange={handleChange}
													/>
												}
												buttons={[<Form.Button>...</Form.Button>]}
											/>
										</Form.InputZone>
									</Form.SpaceRows>
									<Form.Spacer />
									<Form.Button type="submit">Save</Form.Button>
								</Form>
							)}
						</Formik>
					</article>
				</Card>
			</main>
		</>
	);
}
