const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("linePuppySettings", {
  loadSchedule() { return ipcRenderer.invoke("settings:load-schedule"); },
  saveSchedule(data) { return ipcRenderer.invoke("settings:save-schedule", data); },
});
