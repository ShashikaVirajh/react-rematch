import { Grid } from '@mui/material';
import { CocktailCard } from './components/cocktail-card.component';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from './store/store';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();

  const cocktailList = useSelector((state: RootState) => state.cocktailStore.cocktailList);

  useEffect(() => {
    dispatch.cocktailStore.fetchCocktailList();
  }, [dispatch]);

  return (
    <Grid container justifyContent='center' spacing={'1rem'}>
      {cocktailList.map((cocktail, index) => (
        <Grid key={index} item xs={2}>
          <CocktailCard key={cocktail.cocktailId} cocktailInfo={cocktail} />
        </Grid>
      ))}
    </Grid>
  );
};
