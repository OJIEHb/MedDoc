const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let printWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ show: false });

  mainWindow.setMenu(null);
  mainWindow.maximize();

  mainWindow.show();

  // mainWindow.webContents.openDevTools();

  mainWindow.loadURL(path.join(__dirname, '/dist/index.html'))

  mainWindow.on('closed', function () {
    win = null;
    app.quit();
  })

  printWindow = new BrowserWindow();
  printWindow.loadURL(path.join(__dirname + "/dist/print.html"));
  printWindow.hide();
  printWindow.on("closed", () => {
    printWindow = undefined;
  });
}

ipcMain.on("printPDF", (event, content) => {
  printWindow.webContents.send("printPDF", content);
});

ipcMain.on("readyToPrintPDF", (event) => {
  printWindow.webContents.print({}, res => console.log("ok"));
});

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
})