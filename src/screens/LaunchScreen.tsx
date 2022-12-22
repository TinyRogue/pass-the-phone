import React from "react";
import {Pressable, Text, View} from 'react-native';

const LaunchScreen = () => {
    return (
        <>
            <View>
                <Text>
                    Player one
                </Text>
            </View>
            <View>
                <Text>
                    Player two
                </Text>
            </View>
            <Pressable>
                <Text>Add player</Text>
            </Pressable>
        </>
    );
};

export default LaunchScreen;