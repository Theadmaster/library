const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  user: state => state.user.user,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roleOptions: state => state.role.roleOptions,
  menuTree: state => state.menu.menuTree
}
export default getters
