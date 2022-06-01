import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	typescript: {
		outputFile: path.resolve(__dirname, './generated-types.ts'),
	},
  collections: [
    {
      slug: 'posts',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'users',
        },
      ]
    }
  ]
});
