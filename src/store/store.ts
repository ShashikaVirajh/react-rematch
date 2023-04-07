import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin from "@rematch/persist";
import storage from 'redux-persist/lib/storage';

import { RootModel, models } from './models/root.model';

type FullModel = ExtraModelsFromLoading<RootModel, { type: 'full' }>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cocktailStore']
};

export const store = init<RootModel, FullModel>({
    models,
    plugins: [loadingPlugin({ type: 'full' }), persistPlugin(persistConfig)],
  });

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;


