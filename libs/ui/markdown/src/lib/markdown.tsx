import { Page } from '@xms/ui-components';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
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
    <Page titleName={markdown.name} titlePrevPagePath="/markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.md}</ReactMarkdown>
    </Page>
  );
}

export default Markdown;
