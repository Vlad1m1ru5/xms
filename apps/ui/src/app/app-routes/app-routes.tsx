import { Home } from '@xms/ui-home';
import { Login, LoginProps } from '@xms/ui-login';
import { Markdown, MarkdownList, MarkdownUpload } from '@xms/ui-markdown';
import { User, UserList } from '@xms/ui-user';
import { Route, Switch } from 'react-router-dom';

export interface AppRoutesProps extends LoginProps {
  isAuth: boolean;
  isAdmin: boolean;
}

export function AppRoutes(props: AppRoutesProps) {
  return (
    <Switch>
      {props.isAuth && <Route path="/markdown/:id" component={Markdown} />}
      {props.isAuth && (
        <Route path="/markdown/upload" component={MarkdownUpload} />
      )}
      {props.isAuth && <Route path="/markdown" component={MarkdownList} />}
      {props.isAdmin && <Route path="/user/:id" component={User} />}
      {props.isAdmin && <Route path="/user" component={UserList} />}
      <Route
        path="/login"
        render={() => <Login handleLogin={props.handleLogin} />}
      />
      <Route
        path="/"
        render={() => <Home isAuth={props.isAuth} isAdmin={props.isAdmin} />}
      />
    </Switch>
  );
}

export default AppRoutes;
