import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {resetCompany, setCompanies, setCompany} from '../store/companySlice';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { axiosInstance } from '../api';

export default function CompanyScreen({ route, navigation }) {
    const handlePressCompanies = () => {
        navigation.navigate('Список компаний');
    };

    const { id } = route.params;
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.company);
    useEffect(() => {
        async function getCompanyById() {
            console.log(id)
            await axiosInstance.get(`/companies/${id}`).then((response) => {
                dispatch(setCompany(response.data));
                console.log(company)}).catch((err) => {console.log(err)})
        }
        getCompanyById();
        // return () => {
        //     dispatch(resetCompany());
        // };
    }, [dispatch]);

    const newHost = "192.168.1.95";
    console.log(company.image_url.String())
    return (
    <ScrollView>
        <View style={styles.page}>
                <View>
                    <Text style={styles.breadcrumb} onPress={handlePressCompanies}>Список компаний -></Text>
                        <Text style={styles.textGreen} onPress={handlePressCompanies}>
                        { "->" + company.name}
                    </Text>
                </View>
            {company != null &&  company.name != "" && company.image_url != undefined &&
            <View style={{margin: 15}}>
                <View>
                    <Image style={styles.image} source={{ uri: company.image_url }}/>
                    <View>
                        <Text style={styles.textTitle}>{company.name}</Text>
                        <Text style={styles.text}>{company.description}</Text>
                        <View>
                            <Text style={styles.textTitle}>О компаний:</Text>
                            <Text style={styles.text}>
                                ИИН: {company.iin}
                            </Text>
                        </View>
                    </View>
                </View>
            </View> }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6e608d',
    },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#f0f0f0'},
    textTitle: { color: '#f0f0f0', fontSize: 18 , marginTop: 10, marginBottom: 10},
    breadcrumb: { color: '#f0f0f0', fontSize: 16 },
    image: { height: 320, alignSelf: 'stretch' },
});
