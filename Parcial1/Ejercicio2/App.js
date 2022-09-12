import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert } from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      <Image
          style={page.tinyLogo}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
      <Text style={flattenStyle}>Orozco Valdez Florencio Miguel</Text>
      <Text>Cosas por hacer:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>
    </View>

    <Separator />

    <View style={page.fixToText}>
    <Button
        title="pagina izquierda"
        onPress={() => Alert.alert('Cuidado pa')}
      />
      <Button
        title="pagina derecha"
        onPress={() => Alert.alert('siempre a la derecha')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>Mostrando la modal!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#E1E1E8",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#FFFFED"
  },
  tinyLogo: {
    width: 200,
    height: 100,

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "#05C3DD",
    fontSize: 30,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);


export default App;