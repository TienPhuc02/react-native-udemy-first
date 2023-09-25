import { StyleSheet, Text, View, Button } from "react-native";
export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text>hello world</Text>
        <Button title="click me" />
        <Button title="click me" />
      </View>
    </View>
  );
}
//View -> kiểu như thẻ div
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
