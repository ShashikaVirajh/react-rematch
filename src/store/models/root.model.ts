import { Models } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin from '@rematch/persist';
import { cocktailStore } from './cocktail.model';



export interface RootModel extends Models<RootModel> {
  cocktailStore: typeof cocktailStore
}

export const models: RootModel = {
  cocktailStore
};
