import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, RecyclerViewBackedScrollView } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
import Number from './Number';

export default function Calculator() {
    const baseData = useContext(baseContext);

    let numberAry = [];
    for (let i = 0; i < baseData.base; i++) {
        numberAry.push(i);
    }

    let ns = baseData.numberStr;

    function operate(a, b) {
        if (baseData.operator === '+') {
            return a + b;
        }
        if (baseData.operator === '-') {
            return a - b;
        }
        if (baseData.operator === '*') {
            return a * b;
        }
        if (baseData.operator === '/') {
            return a / b;
        }
    }

    function commonOperate(op) {
        let n = parseInt(ns, baseData.base);
        if (baseData.operator === '') {
            baseData.changeResult(n);
        } else {
            let res = operate(baseData.result, n)
            baseData.changeResult(res);
        }
        baseData.changeNumberStr('');
        baseData.disableButton(true);
        baseData.changeOperator(op);
        baseData.changeEquStr(baseData.equStr + op);
    }

    function add() {
        commonOperate('+');
    }
    function substract() {
        commonOperate('-');
    }

    function multiply() {
        commonOperate('*');
    }
    function divid() {
        commonOperate('/')
    }

    function getResult() {
        let n = parseInt(ns, baseData.base);
        if (baseData.operator === '') {
            baseData.changeResult(n);
        } else {
            let res = operate(baseData.result, n)
            baseData.changeResult(res);
        }
        baseData.changeNumberStr('');
        baseData.disableButton(true);
        baseData.changeOperator('');
        baseData.changeEquStr(baseData.equStr + '=');
        baseData.disableNumberButton(true);
    }
    function clear() {
        baseData.changeEquStr('');
        baseData.changeNumberStr('');
        baseData.changeResult(0);
        baseData.disableButton(true);
        baseData.disableNumberButton(false);
    }
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Base: {baseData.base}</Text>
                <View style={styles.result}>
                    <Text style={styles.title}>{baseData.equStr}</Text>
                    <Text style={styles.title}>{baseData.result}</Text>
                </View>
                <View style={styles.numberContainer}>
                    {numberAry.map((item, i) => {
                        return <Number number={item} key={i} />
                    })}
                </View>
                <View style={styles.operatorContainer}>
                    <TouchableOpacity style={styles.operator} onPress={add} disabled={baseData.disable}><Text style={styles.title}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={substract} disabled={baseData.disable}><Text style={styles.title}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={multiply} disabled={baseData.disable}><Text style={styles.title}>x</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={divid} disabled={baseData.disable}><Text style={styles.title}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.eqlClrContainer}>
                    <TouchableOpacity style={styles.eqlClr} onPress={getResult} disabled={baseData.disable}><Text style={styles.title}>=</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.eqlClr} onPress={clear}><Text style={styles.title}>Clr</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.dark,
        color: colors.light,
        flex: 1,
    },
    container: {
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
    },
    title: {
        fontSize: 20,
        color: colors.light,
    },
    result: {
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        width: '100%',
        height: 100,
    },
    numberContainer: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    operatorContainer: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    operator: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        padding: 5,
        margin: 5,
        alignItems: 'center',
        height: 40,
    },
    eqlClrContainer: {
        width: '100%',
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eqlClr: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        alignItems: 'center',
        height: 40,
    },
})