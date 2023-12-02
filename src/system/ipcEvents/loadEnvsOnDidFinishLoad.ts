import { type TaskProcessorInput } from '../processTasks';

export function loadEnvsOnDidFinishLoad({ browserWindow }: TaskProcessorInput): void {
	browserWindow.webContents.on('did-finish-load', () => {
		browserWindow.webContents.send('env', {
			getEnvironmentVariables: {
				localAppData: process.env.LOCALAPPDATA
			}
		});
	});
}
