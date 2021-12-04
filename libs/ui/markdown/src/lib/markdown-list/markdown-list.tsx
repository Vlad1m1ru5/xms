import { Box, List, ListItem } from '@mui/material';
import { Link, Page } from '@xms/ui-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface MarkdownEntity {
  id: string;
  name: string;
}

export interface MarkdownListProps {
  uploadPath: string;
}

export function MarkdownList(props: MarkdownListProps) {
  const { pathname } = useLocation();
  const [markdown, setMarkdown] = useState<{ entities: MarkdownEntity[] }>({
    entities: [],
  });

  useEffect(() => {
    fetch('/api/markdown')
      .then((response) => response.json())
      .then((json) => json as MarkdownEntity[])
      .then((entities) => setMarkdown({ entities }))
      .catch(() => setMarkdown({ entities: [] }));
  }, []);

  const MarkdownListItem = (entity: MarkdownEntity) => (
    <ListItem key={entity.id}>
      <Link to={`${pathname}/${entity.id}`} fullWidth>
        {entity.name}
      </Link>
    </ListItem>
  );

  return (
    <Page titleName="Markdown List" titlePrevPagePath="/">
      <Box sx={{ mt: 1 }}>
        <Link variant="contained" to={props.uploadPath}>
          Upload
        </Link>
      </Box>
      <List>{markdown.entities.map(MarkdownListItem)}</List>
    </Page>
  );
}

export default MarkdownList;
