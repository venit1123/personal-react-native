import React, { useReducer } from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const DEFAULT_INCREMENT = 25

const reducer = (state, action ) => {
    /*
        state === { red: number, green: number, blue: number}
        action === {colorToChange: 'red' || 'green' || 'blue , amount: 15 || -15} 
        Note: by convention the community uses the following key values:
        action  === { type: 'change_red' || 'change_green' || 'change_blue , payload: 15 || -15}
    */

    switch (action.type) {
        case 'change_red':
            // Note: never do state.red = state.red - 15 ... Never change state directly
            // instead we rebuild our state object 
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state // always return something
            : { ...state, red: state.red + action.payload }

        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload }

        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state 
            : { ...state, blue: state.blue + action.payload }

        default:
            // remember to ALWAYS return a new object to use as state
            return state
    }

}

const CounterScreen = () => {

    const color_list = [ 
        { color: 'red'},
        { color: 'green' },
        { color: 'blue' }
    ]

    //useReducer example:
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    // destructuring
    const { red, green, blue } = state

    return(
        <View>
            <FlatList
                keyExtractor={(item) => item.color}
                data={color_list}
                renderItem={({ item }) =>{
                    return (
                        <ColorCounter 
                            color={item.color}
                            onIncrease={() => dispatch({ type: `change_${item.color}`, payload: DEFAULT_INCREMENT}) }
                            onDecrease={() => dispatch({ type: `change_${item.color}`, payload: -1 * DEFAULT_INCREMENT })}
                        /> 
                    )
                }}>
            </FlatList>
            <View
                style = {{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    styleIncrementInput : {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1
    }
})

export default CounterScreen