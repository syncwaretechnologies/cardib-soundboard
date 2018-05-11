import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { Audio } from 'expo'

const sounds = [

];

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.soundInstance = null

        this.state = {

            shouldPlay: false,
            isPlaying: false,
            isBuffering: false,
            isLoading: true,
            fontLoaded: false,
            shouldCorrectPitch: true,
            volume: 1.0,
            rate: 1.0,
        }
    }

    componentDidMound() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        })
    }

    async _loadAsyncSound(filename) {
        const source = { uri: filename }
        const initialStatus = {
            shouldPlay: playing,
            rate: this.state.rate,
            shouldCorrectPitch: this.state.shouldCorrectPitch,
            volume: this.state.volume,
            isMuted: this.state.muted,
            isLooping: false,
        };

        const { sound, status } = await Audio.Sound.create(
            source,
            initialStatus,
            () => {

            }
        )

        this.soundInstance = sound
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});