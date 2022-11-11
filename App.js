import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(10000);
  const [startTime, setStartTime] = useState(Date.now());
  
  useEffect(() => {
    setStartTime(Date.now());

    function frameFunc() {
      const elapsed = Date.now() - startTime;
      let newCounter = counter - elapsed;
      if (newCounter < 0) {
        newCounter = 0;
        cancelAnimationFrame(frameFunc);
      }
      setCounter(newCounter);
    }

    requestAnimationFrame(frameFunc);
  }, [counter]);
  


  return (
    <View style={styles.container}>
      <Text>Time left: {(counter / 1000).toFixed(3)}</Text>
      <Button title='Next' onPress={() => {
        setStartTime(Date.now());
        setCounter(10000);
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
