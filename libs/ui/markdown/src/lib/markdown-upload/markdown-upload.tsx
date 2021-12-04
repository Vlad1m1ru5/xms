import { Box, Button } from '@mui/material';
import { Page } from '@xms/ui-components';
import { useForm } from 'react-hook-form';

interface UploadValues {
  file: string;
  private?: boolean;
}

/* eslint-disable-next-line */
export interface MarkdownUploadProps {
  handleUpload: (values: UploadValues) => void;
}

export function MarkdownUpload(props: MarkdownUploadProps) {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <Page titleName="Markdown Upload" titlePrevPagePath="/markdown">
      <Box
        component="form"
        onSubmit={handleSubmit(props.handleUpload)}
        sx={{ mt: 1 }}
        noValidate
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" component="label">
            Upload File
            <input
              type="file"
              hidden
              {...register('file', { required: true })}
            />
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Page>
  );
}

export default MarkdownUpload;
