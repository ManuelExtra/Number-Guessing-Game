import { StyleSheet, Text, Dimensions, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 15 : 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
