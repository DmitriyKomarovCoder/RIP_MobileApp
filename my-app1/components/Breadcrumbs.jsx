import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Breadcrumbs({ navigation, pages}) {
    const handlePressCompanies = () => {
        navigation.navigate('Список компаний');
    };

    return (
    <View>
        <View>
            <Text style={styles.breadcrumb} onPress={handlePressCompanies}>Список компаний</Text>
            {pages && pages.map((page) => (
                <Text style={styles.breadcrumb} onPress={handlePressCompanies}>
                    { " / " + page.company.companies_list.name }
                </Text>
            ))}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    breadcrumb: { color: '#f0f0f0', fontSize: 16 }
});
