import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const newestListItem = ({ item }) => (
<View style={styles.newest_list_item}>
<Image
    style={styles.newest_pic}
    source={{uri: item.newest_pic}}
    />
<Text style={styles.founder}>{item.founder}</Text>
<Text style={styles.newest_name}>{item.newest_name}</Text>
<Image
    style={styles.lock_icon2}
    source={{uri: item.lock_icon2}}
   />
<Text style={styles.about_newest}>{item.about_newest}</Text>
</View>
  );

const NewestList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.newest_list}
    data={item}
    renderItem={newestListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default NewestList;

const styles = StyleSheet.create({
    'newest_pic': {
        'width': '40vw',
        'height': '28vw',
        'marginTop': 5
    },
    'founder': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'newest_name': {
        'fontSize': 14,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'lock_icon2': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'about_newest': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});