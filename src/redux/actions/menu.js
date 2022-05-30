export default {
  getMenu: (menu = 'Home') => ({
    type: 'CHANGE_MENU',
    payload: menu,
  }),
};
