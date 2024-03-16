import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>

           <Text style={styles.title}>Get your groceries delivered to your home</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Shop now
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10
       
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        marginTop: 5,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#D8D7D5',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Landing