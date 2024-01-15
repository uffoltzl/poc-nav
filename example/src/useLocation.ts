import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const useLocation = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [location, setLocation] = useState<[number, number] | null>(null);

  const requestPermission = () => {
    Geolocation.requestAuthorization(
      () => {
        setIsAuthorized(true);
      },
      (err) => {
        Alert.alert('Error', err.message);
        setIsAuthorized(false);
      }
    );
  };

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      const id = Geolocation.watchPosition((value) => {
        setLocation([value.coords.latitude, value.coords.longitude]);
      });
      return () => {
        Geolocation.clearWatch(id);
      };
    }
    return;
  });

  return {
    isAuthorized,
    location,
  };
};
