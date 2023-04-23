/* nextjs-app/src/keystone/context.ts */
import { getContext } from '@keystone-6/core/context';
import config from '../../keystone';
import { Context } from '.keystone/types';
import * as PrismaModule from '../../node_modules/.prisma/client';

// Making sure multiple prisma clients are not created during hot reloading
export const keystoneContext: Context =
  (globalThis as any).keystoneContext || getContext(config, PrismaModule);

if (process.env.NODE_ENV !== 'production') (globalThis as any).keystoneContext = keystoneContext;