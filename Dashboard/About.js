import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{marginTop: 20, marginHorizontal: 20}}>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          Hadirnya aplikasi apotek online terbaik, tentunya sangat memudahkan masyarakat dalam mendapat obat-obatan yang dibutuhkan.
        </Text>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          Dan tidak hanya itu, melalui aplikasi apotek online terbaik, kamu dan pelanggan lainnya juga bisa mendapatkan banyak informasi seputar kesehatan, obat-obatan, hingga bisa melakukan konsultasi dokter gratis.
        </Text>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          Dengan kata lain, aplikasi apotek online terbaik menyediakan banyak informasi dan fitur yang bisa dinikmati para pelanggan.
        </Text>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          Untuk konsultasi fast respond, Silahkan hubungi nomor dibawah ini :
        </Text>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          1.) Dr. Gibran = 081393063997
        </Text>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
        2.) Dr. Ilham = 0895149730881
        </Text>
      </ScrollView>
    </View>
  );
}