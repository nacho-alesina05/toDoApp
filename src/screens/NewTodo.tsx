import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Colors } from "../styles/colors";
import { useState } from "react";

export default function NewTodo() {
    const [isFocused, setFocused] = useState(false);
    return (
        <SafeAreaView>
            <TextInput
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Task title"
                style={[styles.inputs, styles.input1, isFocused && styles.focused]}
            />
            <TextInput
                placeholder="Text description"
                style={[styles.inputs, styles.input2]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputs: {
        height: 40,
        margin: 12,
    },
    input1: {
        fontSize: 36,
    },
    input2: {
        fontSize: 14,
        height: 335,
        borderWidth: 3
    },
    focused: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary
    }
});