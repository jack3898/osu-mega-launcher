// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

type ElectronWindow = Window['electron'];

const getEnvironmentVariables: ElectronWindow['getEnvironmentVariables'] = function () {
	return new Promise((resolve) => {
		ipcRenderer.once('env', (_, envs) => {
			resolve(envs.getEnvironmentVariables);
		});
	});
};

const properties: Record<keyof ElectronWindow, unknown> = {
	getEnvironmentVariables
};

contextBridge.exposeInMainWorld('electron', properties);
