import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Expo from 'expo'

const styles = StyleSheet.create({
    container: {

    }
});

export default class Pad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: null,
            soundLoaded: false
        }
    }

    componentDidMount() {
        this._loadSound();
    }

    async _loadSound() {
        const resource = new Expo.Audio.Sound({
            source: this.props.sound
        })

        await resource.loadAsync()

        this.setState({
            sound: resource,
            soundLoaded: true
        })
    }

    _onPress() {
        this.state.setPosition(0);
        this.state.sound.play();
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPress} style={styles.container}>
                <Text>The Sound</Text>
            </TouchableOpacity>
        )
    }
}