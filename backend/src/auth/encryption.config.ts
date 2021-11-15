import * as dotenv from 'dotenv';

const config = dotenv.config({
  path: process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env',
});

export const EncryptionTransformerConfig = {
  key: config.parsed.ENCRYPTION_KEY,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
};
