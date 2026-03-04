import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
              1000
          </Text>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.functionButton}>
        <Text style={styles.functionText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.functionButton}>
        <Text style={styles.functionText}>+/-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.functionButton}>
        <Text style={styles.functionText}>%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
        <Text style={styles.operatorText}>÷</Text>
      </TouchableOpacity>

       <View style={styles.row}>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
        <Text style={styles.operatorText}>+</Text>
      </TouchableOpacity>

      <View style={styles.row}>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
        <Text style={styles.operatorText}>-</Text>
      </TouchableOpacity>

       <View style={styles.row}>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
        <Text style={styles.operatorText}>x</Text>
      </TouchableOpacity>

       <View style={styles.row}>
      <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <Text style={styles.buttonText}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
        <Text style={styles.operatorText}>=</Text>
      </TouchableOpacity>
      </View>

      </View>

      </View>

      </View>

      </View>

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
    paddingBottom: 20
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 50,
    height: '75%',
    backgroundColor: "#FF9500",
  },
  functionText: {
    color: '#fff',
    fontSize: 50,
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 50,
    height: '75%',
    backgroundColor: "#FF9500",
  },
  operatorText: {
    color: '#fff',
    fontSize: 28,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 50,
    height: '75%',
    backgroundColor: "#FF9500",
  },
  buttonText: {
    color: '#fff',
    fontSize: 50,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 50,
    height: '75%',
    backgroundColor: "#333333",
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  },
  doubleWidthButton: {
    flex: 2,
    alignItems: 'center',
    paddingLeft: 32,
  }
});