import { StyleSheet, Text, View } from 'react-native';

export function Test() {
  return (
    <View style={styles.container}>
      <Text>Lets go for a Beer?</Text>
    </View>
  );
}
/* 

import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 2 * 16,
    padding: 4 * 4,
    width: '100%',
    alignItems: 'center',
  },
});
