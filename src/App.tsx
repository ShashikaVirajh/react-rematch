import { Grid, Typography } from '@mui/material';
import { CocktailCard } from './components/cocktail-card.component';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from './store/store';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();

  const cocktailList = useSelector((state: RootState) => state.cocktailStore.cocktailList);
  const isLoading = useSelector((state: RootState) => state.loading.models.cocktailStore.loading);
  const cocktailError = useSelector((state: RootState) => state.loading.models.cocktailStore.error);

  useEffect(() => {
    dispatch.cocktailStore.fetchCocktailList();
  }, [dispatch]);

  if (isLoading) {
    return (
      <Typography textAlign='center' mt='20rem' color='blue'>
        Loading...
      </Typography>
    );
  }

  if (cocktailError) {
    return (
      <Typography textAlign='center' mt='20rem' color='red'>
        ERROR: {(cocktailError as Error).message}
      </Typography>
    );
  }

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
