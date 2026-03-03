import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

        <view style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
           1000
        </Text>
        </view>
          
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText: {
    color: '#ffffff',
    fontSize: 72,
    fontWeight: '300',
  },
  row: 1,
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 10
   
  },
});
