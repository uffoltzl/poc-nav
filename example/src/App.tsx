import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { PocNavView, calculateRoute } from 'react-native-poc-nav';

export default function App() {
  const [routeId, setRouteId] = React.useState<string | null>(null);
  return (
    <View style={styles.container}>
      {routeId ? <PocNavView style={styles.box} /> : null}
      <Button
        title="Calculate Route"
        onPress={async () => {
          const id = await calculateRoute();
          setRouteId(id);
        }}
      />
      <Text>Route ID: {routeId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
  },
});
