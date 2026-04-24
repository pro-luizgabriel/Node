import {createFile, updateFile, showFile, deleteFile} from './index.js';

createFile ('Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.');
showFile ();
updateFile ('Conteúdo modificado!');
showFile ();
deleteFile ();
