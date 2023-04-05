import { createModel } from "@rematch/core";
import { RootModel } from "../root.model";
import { CocktailService } from "../services/cocktail.service";

export type TCocktail = {
  cocktailId: string;
  cocktailName: string;
  category: string;
  description: string;
  image: string;
};

type TCocktailState = {
  cocktailList: TCocktail[] | [];
};

const COCKTAIL_INITIAL_STATE: TCocktailState = {
  cocktailList: []
};

export const cocktailModel = createModel<RootModel>()({
  state: {...COCKTAIL_INITIAL_STATE},
  reducers: {
    setFetchedCocktailList(state: TCocktailState, payload: TCocktail[])  {
      return {...state, cocktailList: payload}
    }
  },
  effects: (dispatch)  => ({
    async fetchCocktailList() {
      const response = await CocktailService.FetchRandomCocktails();
      dispatch.cocktailModel.setFetchedCocktailList(response);
    }

  })
})

