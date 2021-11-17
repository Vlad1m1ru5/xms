import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface MarkdownEntity {
  id: string;
  name: string;
}

export function MarkdownList() {
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
      <ListItemButton component={Link} to={`${pathname}/${entity.id}`}>
        {entity.name}
      </ListItemButton>
    </ListItem>
  );

  return (
    <Container>
      <List>{markdown.entities.map(MarkdownListItem)}</List>
    </Container>
  );
}

export default MarkdownList;
