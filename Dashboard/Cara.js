import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CaraBeli() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [obat, setObat] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <ScrollView style={{marginTop: 20, marginHorizontal: 20}}>
        <View style={style.isi}>
          <TextInput
            placeholder="Masukkan nama"
            style={style.textInput}
            onChangeText={(e) => setNama(e)}
          />

          <TextInput
            placeholder="Masukkan Alamat"
            style={style.textInput}
            onChangeText={(e) => setAlamat(e)}
          />

          <TextInput
            placeholder="Masukkan No. Telepon"
            keyboardType="numeric"
            maxLength={13}
            style={style.textInput}
            onChangeText={(e) => setNoTelp(e)}
          />

          <TextInput
            placeholder="Masukkan Nama Obat"
            style={style.textInput}
            onChangeText={(e) => setObat(e)}
          />
        </View>
        <View style={style.hasil}>
          <Text style={style.text}>Nama : {nama}</Text>
          <Text style={style.text}>Alamat : {alamat}</Text>
          <Text style={style.text}>No. Telepon : {noTelp}</Text>
          <Text style={style.text}>Nama Obat : {obat}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  isi: { marginHorizontal: 20, marginTop: 10 },
  textInput: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  text: { fontSize: 20, color: "#fff", textAlign: "center" },
  hasil: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#242424",
  },
});