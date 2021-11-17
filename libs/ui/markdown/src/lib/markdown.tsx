import { ArrowBack } from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

export interface Markdown {
  md: string;
  name: string;
}

export function Markdown() {
  const params = useParams<{ id: string }>();
  const [markdown, setMarkdown] = useState<Markdown>({ md: '', name: '' });

  useEffect(() => {
    fetch(`/api/markdown/${params.id}`)
      .then((response) => response.json())
      .then((json) => json as Markdown)
      .then((markdown) => setMarkdown(markdown))
      .catch(() => setMarkdown({ md: '', name: '' }));
  }, [params.id]);

  return (
    <Container>
      <Typography component="h1" variant="h2">
        <Button
          variant="text"
          sx={{ mr: 2, fontSize: 'inherit', color: 'inherit' }}
          component={Link}
          to="/markdown"
        >
          <ArrowBack fontSize="inherit" />
        </Button>
        {markdown.name}
      </Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.md}</ReactMarkdown>
    </Container>
  );
}

export default Markdown;
