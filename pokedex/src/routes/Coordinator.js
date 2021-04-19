export const goToHomePage = (history) => {
    history.push('/');
  };
  
  export const goToPokedex = (history) => {
    history.push('/pokedex');
  };
  
  export const goToLastPage = (history) => {
    history.goBack();
  };
  
  export const goToTripDetailsPage = (history) => {
    history.push('/details');
  };
  