// import * as React from 'react';
// import { View } from 'react-native';
// import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper';


// import { Button } from 'react-native-paper';

// {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
// Press me
// </Button> */}

// const MyComponent = () => (
//   <Button icon="information" mode="contained" onPress={() => console.log('Pressed')}>Hello</Button>
// );

// const RNScreen:React.FC = () => {
//     return(<View>
//         <ActivityIndicator/>
//         <MyComponent/>
//     </View>)
// }

// export default RNScreen;




import * as React from 'react';
import { Image, View } from 'react-native';
import { Banner, Icon, MD3Colors } from 'react-native-paper';

import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const RNScreen = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>

    <MyComponent/>
    </>
  );
};

export default RNScreen;