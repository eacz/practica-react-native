import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.greenBox}/>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		height: 400,
		width: 400,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: '#28c4d9'
	},
	purpleBox: {
		backgroundColor: '#5856D6',
		width: 100,
		height: 100,
		borderWidth: 5,
		borderColor: 'white',
		position: 'absolute',
		top: 0,
		right: 0
	},
	orangeBox: {
		backgroundColor: '#F0A23B',
		width: 100,
		height: 100,
		borderWidth: 5,
		borderColor: 'white',
		bottom: -300,
		left: 300,
	},
	greenBox: {
		backgroundColor: 'green',
		//width: 100,
		//height: 100,
		borderWidth: 5,
		borderColor: 'white',
		//position: 'absolute',
		//bottom: 0,
		//left: 0,
		...StyleSheet.absoluteFillObject
	},
	title: {
			fontSize: 30
	},
});

export default PositionScreen
