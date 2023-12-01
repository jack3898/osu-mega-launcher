// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	getLocalAppData: () => {
		return new Promise((resolve) => {
			ipcRenderer.once('localappdata', (_, envVar) => resolve(envVar));
			ipcRenderer.send('get-localappdata');
		});
	}
});
