const path = require("path");
const { app, BrowserWindow, Menu, shell } = require("electron");
//const { rootCertificates } = require("tls");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const template = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: ()=> app.quit(),
        accelerator: 'Alt + F4'
      },
    ]

  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        role: 'reload'
      },
      {
        label: 'Ferramenta de Desenvolvedor',
        role: 'toggleDevTools'
      },
      {
        type: 'separator'
      },
      {
        label: 'Aplicar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Diminuir zoom',
        role: 'zoomOut'
      },
      {
        label: 'Restaurar o zoom',
        role: 'resetZoom'
      }
    ]
  },
  {
    label:  'Ajuda',
    submenu: [
      {
        label: 'Documentação',
        click:()=> shell.openExternal('https://www.electronjs.org/')
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => janelaSobre()
      }
      
    ]
  },
]

const janelaSobre = () =>{
  const sobre = new BrowserWindow({
    width: 320,
    height: 220,
    resizable: false,
    autoHideMenuBar: true,
  });
  sobre.loadFile('sobre.html')
}