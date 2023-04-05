import { Models } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin from '@rematch/persist';

import { cocktailModel } from './models/cocktail.model';

export interface RootModel extends Models<RootModel> {
  cocktailModel: typeof cocktailModel
}

export const models: RootModel = {
  cocktailModel
};
