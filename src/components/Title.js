import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = ({content, size }) => {
    const {title, small } = styles;
    const getTitleStyle = () => {
        switch (size) {
            case 'big':
                return title;
            case 'small':
                return small;
            case 'medium':
                return medium;
        }
    }
    return (
        <View style={styles.container}>
            <Text style={getTitleStyle()}>{content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
        fontSize:30,
        color:"white",
        fontWeight:"bold",
        fontFamily:"LeckerliOne",
    },
    small: {
        color:"rgba(0,0,0,0.6)",
        fontFamily:"LeckerliOne",
        fontSize:12,
        lineHeight:28,
    }
})

export default Title;