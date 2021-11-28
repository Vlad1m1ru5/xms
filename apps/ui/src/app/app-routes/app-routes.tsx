import { Home } from '@xms/ui-home';
import { Login } from '@xms/ui-login';
import { Markdown, MarkdownList, MarkdownUpload } from '@xms/ui-markdown';
import { User, UserList } from '@xms/ui-user';
import { Route, Switch } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/markdown/:id" component={Markdown} />
      <Route path="/markdown/upload" component={MarkdownUpload} />
      <Route path="/markdown" component={MarkdownList} />
      <Route path="/user/:id" component={User} />
      <Route path="/user" component={UserList} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default AppRoutes;
