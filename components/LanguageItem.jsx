import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LanguageItem ({ language, experience, logo }) {
    return ( 
        <View style={styles.container}>
          <Text style={styles.title}>{language}</Text> 
          <Text style = { styles.experience } > { experience } < /Text> 
          <Image source = { { uri: logo } } style = { styles.logo }/> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        alignItems: 'center',
         backgroundColor: '#5F9EA0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 16,
        color: '#555',
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
});
