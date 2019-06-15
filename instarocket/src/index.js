import React, {Component} from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import {Platform, StyleSheet, Text, View} from 'react-native';

import Routes from './routes';

export default function App() {
    return <Routes />
}