import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { WebView } from 'react-native-webview';

import styles from "../Styles/style";

export default function Canais() {
    return (
        <View style = {styles.conteiner}>
            <View style={styles.header}>
                
            </View>
            <View style = {styles.video}>
                <WebView
                    source={{ uri: 'https://xn----------------g34l3fkp7msh1cj3acobj33ac2a7a8lufomma7cf2b1sh.xn---1l1--5o4dxb.xn---22--11--33--99--75---------b25zjf3lta6mwf6a47dza94e.xn--pck.xn--zck.xn--0ck.xn--pck.xn--yck.xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b/player3/ch.php?canal=adultswim' }}
                    style={{ flex: 1 }}
                />
            </View>
        </View>

    )
}
