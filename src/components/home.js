import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>Welcome to our website!</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="logout"
                    mode="contained"
                    onPress={() => navigation.navigate('login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Logout
                </Button>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonsContainer: {
        width: '100%'
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#ADB3BC'
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
});

export default Home