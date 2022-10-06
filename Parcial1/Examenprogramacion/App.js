import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert, ImageBackground} from "react-native";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "./firebase-config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const fotosuperior = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/01/triforce.jpg?itok=c0cve74r'
const fotoadministrativa= 'https://www.thetimes.com.ng/wp-content/uploads/2022/09/OOT-Kokiri-Shopkeep-780x470.jpg'
const fondo= 'https://thumbs.dreamstime.com/t/las-estrellas-brillan-el-fondo-del-efecto-en-la-pantalla-negra-animaci%C3%B3n-de-decoraci%C3%B3n-festiva-o-vacacional-twinkle-chroma-key-172088047.jpg'
const uri ='https://previews.123rf.com/images/tolkachev/tolkachev1911/tolkachev191102406/133398459-mapa-mundial-y-fondo-interior-de-gabinete-minimalista-exposici%C3%B3n-doble-concepto-de-negocio-internaci.jpg'

function Logscreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app= initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta lista')
      const user = userCredential.user;
      console.log (user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Inicio')
      const user = userCredential.user;
      console.log (user)
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error)
    })
  }
    return (
      <View style={styles.contenedor}>
        <Image source={{ uri }} style={[styles.imagen, StyleSheet.absoluteFill]}/>
        <ScrollView contentContainerStyle= {{
          flex:1,
          width: '100%',
          height:'100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <View style={styles.login}>
              <Image source={{ uri: fotosuperior }} style={styles.fotosuperior}/>
              <View>
              <Text style={{fontSize: 17, fontWeight: '700', color: 'white',}}></Text>
              <TextInput onChangeText= {(text) => setEmail(text)} style={styles.entrada} placeholder="Correo electrónico"/>
              </View>
              <View>
              <TextInput onChangeText= {(text) => setPassword(text)} style={styles.entrada} placeholder="Contraseña"/>
            </View>
            <TouchableOpacity onPress={SignIn} style={[styles.boton, {bakcgroundColor:'black'}]}>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.boton, {bakcgroundColor:'black'}]}>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
}
const Stack = createNativeStackNavigator();
export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initializeRoute= 'Login'>
        <Stack.Screen name = "Home" component={Home}/>
          <Stack.Screen name = "Login" component={Logscreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );

  function Home() {
    return (
      <View style={styles.home}>
        <Image source={{ uri : fondo }} style={[styles.imagen, StyleSheet.absoluteFill]}/>
              <View style={styles.kokirishop}>
                <Text style={{fontSize: 35, fontWeight: '800', color: 'yellow'}}>Bienvenido a KokiriShop</Text>
                <Image source={{ uri: fotoadministrativa }} style={styles.fotoadministrativa}/>
                <View>
                <Text style={{fontSize: 25, fontWeight: '600', color: 'white',top: 75}}>¿Qué documento desea buscar?</Text>
                <TextInput style={styles.entrada1} placeholder="Analizar"/>
                </View>
              <TouchableOpacity style={[styles.boton1, {bakcgroundColor:'white'}]}>
                <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Buscar</Text>
              </TouchableOpacity>
              </View>
        </View>
    );
  }
}
 const styles = StyleSheet.create({
  contenedor: {
    flex:1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
      flex:1,
      alignItems: 'center'
  },
  kokirishop: {
    flex:1,
    alignItems: 'center',
    top: 10 
},
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode:'cover',
  },
  login : {
    width: 350,
    height: 700,
    borderColor: 'yellow',
    borderRadius: 30,
    padding: 150,
    alignItems: 'center',
  },
  fotosuperior :{
    width: 200,
    height: 50,
    borderRadius:200,
    borderColor: 'yellow',
    marginVertical: 2,
    padding: 1
  },
  fotoadministrativa :{
    width: 200,
    height: 200,
    borderRadius:100,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  },
  entrada:{
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 9,
    marginVertical: 10,
    backgroundColor: 'white',
    marginBottom: 10
  },
  entrada1:{
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 80,
    backgroundColor: 'white',
    marginBottom: 50
  },
  boton:{
    width: 100,
    height: 40,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor: 'white',
    borderWidth: 1,
  },boton1:{
    width: 100,
    height: 40,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor: 'blue',
    backgroundColor: 'red'
  }
});

