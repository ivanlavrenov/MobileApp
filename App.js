import React, {Component} from "react";
import {StyleSheet} from "react-native";
import List from './components/List.js';
import Card from './components/Card.js';
import {NativeRouter, Route} from "react-router-native";


export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={List} />
                <Route path="/Card" component={Card} />
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({})
