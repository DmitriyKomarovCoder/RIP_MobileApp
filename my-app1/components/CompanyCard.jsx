import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function CompanyCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Компаний', { id: props.company_id });
    };

    const newHost = "192.168.1.95";

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `${props.image_url.replace("localhost", newHost)}` }}
// resizeMode='contain'
            />
            <View style={styles.container}>
                <Text style={styles.textGreen}>{props.name}</Text>
                <View style={styles.row}>
                    {/*<Text style={styles.text}>{props.summary}</Text>*/}
                    {/*<Text style={styles.text}>{props.price} р.</Text>*/}
                </View>
            </View>
            <Button title='Подробнее' onPress={handlePress} color='#BB87EAFF'/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 320,
        backgroundColor: '#6e608d',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'column' },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#bb87ea', fontSize: 18 , marginBottom: 5},
});
