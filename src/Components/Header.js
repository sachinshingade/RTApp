/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, ActivityIndicator, Linking,Platform, Button } from 'react-native';
const Header = () => {
    return(
        <View style={styles.toprow}>
            <View style={{ width: '75%' }}>
              <Text style={styles.orderText}>Orders</Text>
            </View>
            <View style={{width: '25%', justifyContent: 'space-between'}}>
              <Button
                onPress={null}
                title="Online"
                color="#47ef47"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                onPress={null}
                title="Offline"
                color="lightgray"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: {
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    toprow: {
      display: 'flex',
      alignContent: 'space-between',
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 20,
      marginTop: 30,
      height: 80
    },
    orderText: {
      fontSize: 20,
      fontWeight: '700',
      color: '#0e2c4a'
    },
  });