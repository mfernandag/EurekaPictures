import GetLocation from 'react-native-get-location';
export function getLocation() {
  new Promise((resolve, reject) => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        fetch(
          'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            location.latitude +
            ',' +
            location.longitude +
            '&key=' +
            'AIzaSyAwEj8YJigRV2mUFNNH067Ut9wHc57rBuI',
        )
          .then(response => response.json())
          .then(responseJson => {
            const city =
              responseJson.results[0].address_components[2].long_name;
            const province =
              responseJson.results[0].address_components[4].long_name;

            resolve({city, province});
          });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  });
}
