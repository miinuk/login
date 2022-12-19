import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export function login () {
  return (
    <View style={styles.container}>
      <Text>login</Text>

      <TextInput style={styles.input}></TextInput>

      <Text>senha</Text>

      <TextInput style={styles.input}></TextInput>

      <TouchableOpacity style={styles.botao}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  input:{

    backgroundColor:"violet",
    borderRadius: 10,
    paddingRight: "50%",
    display: "flex"
  },
  botao: {
    backgroundColor: "green",
    borderRadius : 10,
    padding: 10,
    marginTop: 10
  }
});
