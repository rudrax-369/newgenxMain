const BASE = '/newgenx';

export const navigate = (path: string) => {
  // Prepend base so the URL stays correct (e.g. '/newgenx/hiring-solutions')
  const fullPath = path === '/' ? `${BASE}/` : `${BASE}${path}`;

  window.history.pushState(null, '', fullPath);

  // Notify App that the route changed
  const popStateEvent = new PopStateEvent('popstate');
  window.dispatchEvent(popStateEvent);

  // Always scroll to top on navigation
  window.scrollTo(0, 0);
};
