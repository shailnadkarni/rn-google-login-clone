import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {Button, Checkbox} from './components';

const App = () => (
  <KeyboardAvoidingView
    style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
    behavior="padding"
    enabled>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.googleImageContainer}>
          <Image
            style={styles.googleImage}
            source={require('./img/google.png')}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>One account. All of Google.</Text>
          <Text style={styles.subtitle}>Sign in to continue to Gmail</Text>
        </View>
        <View style={styles.loginbox}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('./img/login.png')} />
          </View>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.buttonContainer}>
            <Button
              label="login"
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
          <View style={styles.helpRow}>
            <View style={styles.checkboxContainer}>
              <Checkbox label="Stay signed in" isChecked={true} />
            </View>

            <Text style={styles.helpLabel}>Need help?</Text>
          </View>
        </View>

        <Text style={styles.subfooter}>Create an account</Text>
        <Text style={styles.footer}>
          One Google Account for everything Google
        </Text>
      </SafeAreaView>
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleImageContainer: {
    justifyContent: 'center',
    marginBottom: 56,
  },
  googleImage: {
    width: 150,
    height: 72,
  },
  header: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#aaa',
    marginVertical: 12,
  },
  subtitle: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginVertical: 4,
  },
  loginbox: {
    width: '80%',
    backgroundColor: '#f7f7f7',
    height: 360,
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    marginBottom: 24,
  },
  image: {
    width: 72,
    height: 72,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 8,
  },
  button: {
    width: '100%',
    backgroundColor: '#4b8ffb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  subfooter: {
    fontSize: 14,
    color: '#c9dafd',
    marginTop: 16,
  },
  footer: {
    fontSize: 14,
    color: '#c8c8c8',
    marginTop: 28,
  },
  helpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
    color: '#eaeaec',
  },
  staySignedlabel: {
    fontSize: 12,
    color: '#afafaf',
    margin: 8,
  },
  helpLabel: {
    fontSize: 12,
    color: '#a1bbed',
    justifyContent: 'flex-end',
    marginTop: 8,
    marginBottom: 8,
  },
});

export default App;
