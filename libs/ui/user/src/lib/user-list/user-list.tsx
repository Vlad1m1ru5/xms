import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserListProps {}

const StyledUserList = styled.div`
  color: pink;
`;

export function UserList(props: UserListProps) {
  return (
    <StyledUserList>
      <h1>Welcome to UserList!</h1>
    </StyledUserList>
  );
}

export default UserList;
