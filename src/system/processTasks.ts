import { type BrowserWindow } from 'electron';
import { loadEnvsOnDidFinishLoad } from './ipcEvents/loadEnvsOnDidFinishLoad';
import { loadIndexHtml } from './init/loadIndexHtml';

export type TaskProcessorInput = {
	browserWindow: BrowserWindow;
};

// This function is called from src/main.ts
// It will process all tasks that are passed to it for the electron backend
// No fancy automatic module detection and loading system here, just a simple function that calls functions! Nice and simple!
export function processTasks(taskProcessorInput: TaskProcessorInput): void {
	[loadEnvsOnDidFinishLoad, loadIndexHtml].forEach((task) => task(taskProcessorInput));
}
