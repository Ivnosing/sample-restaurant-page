class Router {
  private routes: { path: string; callback: () => void }[] = [];
  private mode: 'history' | 'hash' = null;
  private root: string = '/';
  private current: string;
  private interval: any;

  constructor(options: { routes: { path: string; callback: () => void }[], mode?: 'history' | 'hash'; root?: string }) {
    this.mode = window.history.pushState ? 'history' : 'hash';
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;
    this.listen();

    options.routes.forEach(route => this.routes.push(route));

    this.navigate(this.getFragment() ? `/${this.getFragment()}` : `/${this.routes[0].path}`);
  }

  public add(path: string, callback: () => void): void {
    this.routes.push({ path, callback });
  }

  public remove(path: string): void {
    const index = this.routes.findIndex(route => route.path === path);
    this.routes.splice(index, 1);
  }

  public flush(): void {
    this.routes = [];
  }

  private clearSlashes(path: string): string {
    return path
      .toString()
      .replace(/\/$/, '')
      .replace(/^\//, '');
  }

  private getFragment(): string {
    let fragment = '';

    if (this.mode === 'history') {
      fragment = this.clearSlashes(
        decodeURI(window.location.pathname + window.location.search)
      );
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }

    return this.clearSlashes(fragment);
  };

  public navigate(path = ''): void {
    if (this.mode === 'history') {
      window.history.pushState(null, null, this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
  };

  public listen() {
    clearInterval(this.interval);
    this.interval = setInterval(this.intervalFn, 50);
  };

  private intervalFn = () => {
    if (this.current === this.getFragment()) {
      return;
    }

    this.current = this.getFragment();

    this.routes.some(route => {
      const match = this.current.match(route.path);

      if (match) {
        match.shift();
        route.callback.apply({}, match);
        return match;
      }

      return false;
    });
  };
}

export default Router;
