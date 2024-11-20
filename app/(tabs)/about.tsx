import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import LanguageItem from "@/components/LanguageItem";
import { languages } from '@/data';

export default function AboutScreen() {
  const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return ( <
        View style = { styles.container } >
          <FlatList 
            data = { languages }
            keyExtractor = { (item) => item.id.toString() }
            renderItem = { ({ item }) => ( 
                <LanguageItem language = { item.name } experience = { item.experience } logo = { item.logo }/>
            )}
            refreshControl = { 
                <RefreshControl refreshing = { refreshing } onRefresh = { onRefresh }/>
            }
        /> 
      </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#D3D3D3',
    },
});

