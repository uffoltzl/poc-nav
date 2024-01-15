import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { PocNavView, calculateRoute } from 'react-native-poc-nav';
import { useLocation } from './useLocation';

export default function App() {
  const { location } = useLocation();
  const [routeId, setRouteId] = React.useState<string | null>(null);
  React.useEffect(() => {
    calculateRoute().then((id) => {
      setRouteId(id);
    });
  }, []);
  return (
    <View style={styles.container}>
      {location ? (
        <Text>
          Location : ({location[0]}, {location[1]})
        </Text>
      ) : null}
      <Text>Route ID: {routeId}</Text>
      {routeId ? <PocNavView style={styles.box} /> : null}
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
    height: '80%',
  },
});
