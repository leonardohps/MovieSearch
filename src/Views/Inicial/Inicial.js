import React, { Fragment } from 'react';
import {
    StatusBar,
    SafeAreaView,
    TextInput,
    Button,

} from "react-native";


const Inicial = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TextInput placeholder="Nome do Filme" />
                <Button title="Pesquisar" />
            </SafeAreaView>
        </Fragment>
    )
};
export default Inicial;