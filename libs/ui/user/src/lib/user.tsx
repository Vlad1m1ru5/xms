import { Typography } from '@mui/material';
import { Page } from '@xms/ui-components';
import { useEffect, useState } from 'react';
import useSwr from 'swr';

interface UserEntity {
  username: string;
  roleId: string;
}

interface RoleEntity {
  name: string;
}

export interface UserProps {
  userId: string;
}

export function User(props: UserProps) {
  const [role, setRole] = useState<RoleEntity | null>(null);

  const { data: user } = useSwr(`api/user/${props.userId}`, (userIdApi) =>
    fetch(userIdApi)
      .then((response) => response.json())
      .then((json) => json as UserEntity)
      .catch(() => null)
  );

  useEffect(() => {
    const fetchUserRole = async (roleId: string) =>
      fetch(`/api/role/${roleId}`)
        .then((response) => response.json())
        .then((json) => json as RoleEntity)
        .catch(() => null)
        .then((role) => setRole(role));

    user?.roleId && fetchUserRole(user.roleId);
  }, [user?.roleId]);

  return !user || !role ? (
    <Page>Loading...</Page>
  ) : (
    <Page titleName={user.username} titlePrevPagePath="/user">
      <Typography>{role.name}</Typography>
    </Page>
  );
}

export default User;
