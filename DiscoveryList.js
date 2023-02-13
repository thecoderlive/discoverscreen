import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const discoveryListItem = ({ item }) => (
<View style={styles.discovery_list_item}>
<Image
    style={styles.discovery_pic}
    source={{uri: item.discovery_pic}}
    />
<Text style={styles.founder_name}>{item.founder_name}</Text>
<Text style={styles.discovery_name}>{item.discovery_name}</Text>
<Image
    style={styles.lock_icon}
    source={{uri: item.lock_icon}}
   />
<Text style={styles.about_discovery}>{item.about_discovery}</Text>
</View>
  );

const DiscoveryList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.discovery_list}
    data={item}
    renderItem={discoveryListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default DiscoveryList;

const styles = StyleSheet.create({
    'discovery_pic': {
        'width': '40vw',
        'height': '28vw',
        'marginTop': 5
    },
    'founder_name': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'discovery_name': {
        'fontSize': 14,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'lock_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'about_discovery': {
        'fontSize': 14,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});