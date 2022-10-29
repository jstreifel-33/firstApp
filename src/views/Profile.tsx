import { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

export const Profile = ({ navigation }) => {
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
      <Text>Profile Page</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
