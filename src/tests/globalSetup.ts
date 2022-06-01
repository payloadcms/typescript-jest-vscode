import '../server';
import { resolve } from 'path';
import testCredentials from './credentials';

require('dotenv').config({
  path: resolve(__dirname, '../.env'),
});

const { PAYLOAD_PUBLIC_SERVER_URL } = process.env;

const globalSetup = async (): Promise<void> => {
  const response = await fetch(`${PAYLOAD_PUBLIC_SERVER_URL}/api/users/first-register`, {
    body: JSON.stringify({
      email: testCredentials.email,
      password: testCredentials.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
  });

  const data = await response.json();

  if (!data.user || !data.user.token) {
    throw new Error('Failed to register first user');
  }
};

export default globalSetup;
