import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(10000);
  const [startTime, setStartTime] = useState(Date.now());

  const requestRef = useRef();

  function frameFunc() {
    const elapsed = Date.now() - startTime;
    const newCounter = counter - elapsed;
    if (newCounter < 0) {
      setCounter(0);
      return cancelAnimationFrame(requestRef.current);
    }
    setCounter(newCounter);
    requestRef.current = requestAnimationFrame(frameFunc);
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(frameFunc);
    return () => cancelAnimationFrame(requestRef.current);
  }, [startTime]);
  


  return (
    <View style={styles.container}>
      <Text>Time left: {(counter / 1000).toFixed(3)}</Text>
      <Button title='Next' onPress={() => {
        setCounter(10000);
        setStartTime(Date.now());
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
