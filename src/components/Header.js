import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import bg from '../../assets/bg.png'

const Header = () => {
  return (
    <View style= {styles.header}>

        <Image source={bg} style={styles.logoheader}/>
        <Text style={styles.HeaderTitle}>Garden Gourmet</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        alignItems: 'center',
      
    },
    logoheader: {
      width: 165,
      height: 132
    },
    HeaderTitle: {
      alignItems: 'center',
      justifyContent: 'center', 
    }

   
  });

export default Header