import { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

export const Home = ({ navigation }) => {
  const [hideBar, setHideBar] = useState(false);

  const handleStatusButton = () => {
    setHideBar((prevState) => !prevState);
  };

  return (
    <View>
      <StatusBar
        hidden={hideBar}
        animated={false}
        showHideTransition={'slide'}
      />
      <Text>Home Page</Text>
      <Button title="Show/Hide status bar" onPress={handleStatusButton} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};
