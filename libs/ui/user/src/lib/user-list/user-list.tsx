import { Box, List, ListItem } from '@mui/material';
import { Link, Page } from '@xms/ui-components';
import { useLocation } from 'react-router';
import useSwr from 'swr';

export interface UserEntity {
  id: string;
  username: string;
}

/* eslint-disable-next-line */
export interface UserListProps {}

export function UserList(props: UserListProps) {
  const { pathname } = useLocation();
  const { data: users } = useSwr('/api/user', (userApi) =>
    fetch(userApi)
      .then((response) => response.json())
      .then((json) => json as UserEntity[])
      .catch(() => [])
  );

  const UserListItem = (user: UserEntity) => (
    <ListItem key={user.id}>
      <Link to={`${pathname}/${user.id}`} fullWidth>
        {user.username}
      </Link>
    </ListItem>
  );

  const getListItems = () => (!users ? 'Loading...' : users.map(UserListItem));

  return (
    <Page titleName="User List" titlePrevPagePath="/">
      <Box sx={{ mt: 1 }}>
        <List>{getListItems()}</List>
      </Box>
    </Page>
  );
}

export default UserList;
