import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: "#E98000" }}>


            <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '100%',justifyContent: 'flex-start' }}>

                <View style={{ width: '50%' }}>
                    <TouchableOpacity style={styles.addButton}>
                        <View>
                            <Icon
                                name="home-outline"
                                size={40}
                                color="#E98000"
                            />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ width: '50%' }}>
                    <TouchableOpacity style={styles.addButton}>
                        <View>
                            <Icon
                                name="home-outline"
                                size={40}
                                color="#E98000"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '50%' }}>
                    <TouchableOpacity style={styles.addButton}>
                        <View>
                            <Icon
                                name="home-outline"
                                size={40}
                                color="#E98000"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}