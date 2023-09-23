export interface RoutesClient {
  root: '';
  home: string;
  contactUs: string;
  // aboutUs: string;
  // login: string;
  // listClients: string;
}

export const MODULES = {
  PUBLIC: '',
  USER: 'user',
};

// RUTAS DEL CLIENTE EN MODULO
export const PATHS_MODULE_CLIENT: RoutesClient = {
  root: '',
  home: 'inicio',
  contactUs: 'contactanos',
  // aboutUs: 'quienes-somos',
  // login: 'login',
  // listClients: 'list-clients'
};

// RUTAS COMPLETAS PARA EL ROUTE LINK
export const PATHS_FULL_CLIENT: RoutesClient = {
  root: '',
  home: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.home}`,
  contactUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.contactUs}`,
  // aboutUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.aboutUs}`,
  // login: `${MODULES.USER}/${PATHS_MODULE_CLIENT.login}`,
  // listClients: `${MODULES.USER}/${PATHS_MODULE_CLIENT.listClients}`,
};
