import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView,View, StatusBar, TouchableOpacity, TextInput, Modal, ImageBackground } from 'react-native';


export default function App() {
  function Caminhos(){
    alert("Rotas com ciclovia até seu destino.");
  }
  function Parking(){
    alert("Bicicletários encontrados com base na sua localização, em um raio de 10km.");
  }
  function Aluguel(){
    alert("Estabelecimentos que fornecem o aluguel de bicicletas.");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>

      <ImageBackground source={require('./assets/mapa.jpg')} style={styles.mapImage}>
        <View style={styles.optionsBar}>
          <TouchableOpacity style={styles.Cbutton} onPress={Caminhos}>
            <Text style={styles.TextOp}>Caminhos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.EButton} onPress={Parking}>
            <Text style={styles.TextOp}>Bicicletários</Text>  
          </TouchableOpacity>

          <TouchableOpacity style={styles.PButton} onPress={Aluguel}>
            <Text style={styles.TextOp}>Aluguel</Text>
          </TouchableOpacity>
        </View>
          <TextInput style={styles.Input} placeholder = "Para onde você quer ir?"></TextInput>
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a91ac',
  },
  mapImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center'
  },
  optionsBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#4a91ac',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextOp: {
    color: 'white'
  },
  Input: {
    width: 300,
    height: 40,
    padding: 9,
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 640,
    fontSize: 20
  }
});
