import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import DiscoveryList from './DiscoveryList'
import NewestList from './NewestList'

const Discover = () => (
<ScrollView style={styles.discover} showsVerticalScrollIndicator={false}>
<DiscoveryList item={item.discovery_list}/>
<Text style={styles.new_in}>{item.new_in}</Text>
<Text style={styles.about_just_in}>{item.about_just_in}</Text>
<NewestList item={item.newest_list}/>
</ScrollView>
)

export default Discover;

const styles = StyleSheet.create({
    'new_in': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_just_in': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});