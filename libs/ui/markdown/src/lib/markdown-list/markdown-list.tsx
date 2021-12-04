import { Box, List, ListItem } from '@mui/material';
import { Link, Page } from '@xms/ui-components';
import { useLocation } from 'react-router-dom';
import useSwr from 'swr';

export interface MarkdownEntity {
  id: string;
  name: string;
}

export interface MarkdownListProps {
  uploadPath: string;
}

export function MarkdownList(props: MarkdownListProps) {
  const { pathname } = useLocation();
  const { data } = useSwr('/api/markdown', (markdownApi) =>
    fetch(markdownApi)
      .then((response) => response.json())
      .then((json) => json as MarkdownEntity[])
      .catch(() => [])
  );

  const MarkdownListItem = (entity: MarkdownEntity) => (
    <ListItem key={entity.id}>
      <Link to={`${pathname}/${entity.id}`} fullWidth>
        {entity.name}
      </Link>
    </ListItem>
  );

  const getListItems = () =>
    !data ? 'Loading...' : data.map(MarkdownListItem);

  return (
    <Page titleName="Markdown List" titlePrevPagePath="/">
      <Box sx={{ mt: 1 }}>
        <Link variant="contained" to={props.uploadPath}>
          Upload
        </Link>
      </Box>
      <List>{getListItems()}</List>
    </Page>
  );
}

export default MarkdownList;
