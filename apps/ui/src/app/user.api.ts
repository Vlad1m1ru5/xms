export interface RoleFetchDto {
  name: string;
}

export interface UserFetchDto {
  roleId: string;
}

export interface ProfileFetchDto {
  userId: string;
}

export interface AuthFetchDto {
  access_token: string;
}

export interface StatusFetchDto {
  username: string;
  password: string;
}

export const fetchStatus = async (payload: StatusFetchDto) => {
  const auth: AuthFetchDto = await fetchAuth(payload);
  const profile: ProfileFetchDto = await fetchProfile(auth);
  const user: UserFetchDto = await fetchUser(profile);
  const role: RoleFetchDto = await fetchRole(user);
  return { ...auth, roleName: role.name };
};

export const fetchRole = async (payload: UserFetchDto) => {
  const response = await fetch(`/api/role/${payload.roleId}`);
  return await response.json();
};

export const fetchUser = async (payload: ProfileFetchDto) => {
  const response = await fetch(`/api/user/${payload.userId}`);
  return await response.json();
};

export const fetchProfile = async (payload: AuthFetchDto) => {
  const options = {
    headers: {
      Authorization: `Bearer ${payload.access_token}`,
    },
  };
  const response = await fetch('/api/profile', options);
  return await response.json();
};

export const fetchAuth = async (payload: StatusFetchDto) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('/api/auth/login', options);
  return await response.json();
};
