/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, ActivityIndicator, Linking,Platform, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Ficons from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

const List = (props) => {
    return(
        <View key={props.index} style={styles.listItem}>
            {/* <TouchableOpacity> */}
                <View>
                    <Text style={styles.customerName}>{props.item.name}</Text>
                    <Text style={styles.location}>
                        <Icon name="md-location" color="#7c9fc2"/>
                        {props.item.address}
                    </Text>
                </View>
            {/* </TouchableOpacity> */}
            <View style={styles.floatingBlock}>
                <TouchableOpacity
                onPress={ () =>Linking.openURL(`google.navigation:q=${props.item?.location?.lat}+${props.item?.location?.long}`)}
                >
                    <View style={styles.iconParent}>
                        <Ficons name="directions" size={30} color='#0e2c4a'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>Linking.openURL(`tel:${props.item?.phone}`)}
                >
                    <View style={styles.iconParent}>
                        <Icon name="call" size={30} color='#0e2c4a'/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBtn}>
                <Button
                    title="Delivery/Return"
                    color="#7c9fc2"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}
export default class MapComp extends Component {
    constructor() {
      super();
      this.state = {
        orders: [],
        isLoading: true
      };
    }
    async componentDidMount() {
        // try {
        //     const resp = await fetch('https://demo8360259.mockable.io/clients');
        //     const data = await resp.json();
        //     this.setState({orders: data.orders, isLoading: false});
        // } catch (error) {
        //     console.log("Error fetching data-----------", error);
        // }
        axios.get('https://demo8360259.mockable.io/clients')
            .then(({ data })=> {
                console.log('dddd', data)
                this.setState({ 
                orders: data.orders,
                isLoading: false
                });
            })
            .catch((err)=> {})
    }
    render() {
        const { orders, isLoading } = this.state;
        return (
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
                { isLoading ? <ActivityIndicator/> : (
                    <View style={styles.listBlock}>
                    {
                    orders.map((item, index)=>{
                        return (
                            <List key={index} item={item} index={index}/>
                        )
                    })
                    }
                    </View>
                )}
        </ScrollView>
        );
      }
}

const styles = StyleSheet.create({
    listItem: {
      display: 'flex',
      height: 130,
      margin: 10,
      marginBottom: 5,
      padding: 10,
      paddingTop: 12,
      position: 'relative',
      elevation: 3,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      backgroundColor: 'white',
      borderRadius: 20
    },
    customerName: {
      fontSize: 16,
      color: '#0e2c4a',
      textTransform: 'capitalize',
    },
    location: {
      color: '#7c9fc2',
      textTransform: 'capitalize',
    },
    floatingBlock: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 5,
        right: 0,
    },
    iconParent: {
        backgroundColor: '#b0c6cc',
        padding: 10,
        marginRight: 10,
        borderRadius: 40
    },
    bottomBtn: {
        marginTop: 20
    }
});