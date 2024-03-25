import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, Metrix} from '../config';
import {AnimatedText, Favorites, SearchMovies, Tabs} from '../components';

const renderComponent = {
  0: <SearchMovies />,
  1: <Favorites />,
};

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <View style={styles.titleContainer}>
          <AnimatedText title={'Welcome To The Movie App'} />
        </View>
        <View style={{marginVertical: Metrix.VerticalSize(20)}}>
          <Tabs
            tabs={['Search Movie', 'Favorites']}
            selected={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </View>
        {renderComponent[selectedTab]}
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black},
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(20),
  },
});

