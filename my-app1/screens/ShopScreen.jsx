// ShopScreen.js
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setSearchValue } from '../store/filterSlice';
import {setCompanies} from '../store/companySlice';
import CompanyCard from '../components/CompanyCard';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { companies_list } = useSelector((state) => state.company);
    const { searchValue } = useSelector((state) => state.filter);

    useEffect(() => {
        async function getAllCompanies() {
            try {
                const response = await axiosInstance.get(`/companies/?company_name=${searchValue}`);
                dispatch(setCompanies(response?.data.companies));
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        }
        getAllCompanies();
    }, [dispatch, searchValue]);

    const onTextChange = (text) => {
        dispatch(setSearchValue(text));
        console.log(text);
    };

    return (
        <ScrollView>
            <View style={styles.page}>
                <Breadcrumbs pages={[]} navigation={navigation} />
                <TextInput
                    style={styles.input}
                    onChangeText={onTextChange}
                    value={searchValue}
                />
                {!!companies_list &&
                    companies_list.map((company) => <CompanyCard key={company.company_id} {...company} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#453b64',
    },
    input: {
        height: 40,
        margin: 8,
        width: 320,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#6e608d',
        borderRadius: 8,
    },
});
