import AsyncStorage from "@react-native-async-storage/async-storage";


export const fonts = {
    Bold: 'Roboto-Bold',
    Light: 'Roboto-Light',
    Medium: 'Roboto-Medium',
    Regular: 'Roboto-Regular',
  }
  

  export const getFavoritesMovies = async () => {
    try {
      let favoritesMovies = await AsyncStorage.getItem('Favorites');
      favoritesMovies = JSON.parse(favoritesMovies);
      return favoritesMovies;
    } catch (err) {
      console.log('err in retrieving favorite Movies', err);
    }
  };

 export const setFavoriteData = async(data)=>{
    try {
      await AsyncStorage.setItem('Favorites', JSON.stringify(data));
    } catch (e) {
      console.log('err in storing', e);
    }
  }