import path from 'path';
import { type TaskProcessorInput } from '../processTasks';

export function loadIndexHtml({ browserWindow }: TaskProcessorInput): void {
	// and load the index.html of the app.
	if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
		browserWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
	} else {
		browserWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
	}
}
