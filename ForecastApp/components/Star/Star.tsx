import React, {
    Component
} from 'react';

import Svg, {
    Circle,
    Path,
    Rect,
    G,
    Text,
    ClipPath,
    Defs
} from 'react-native-svg';
import { View } from 'react-native';

export default function Star() {
    return( 
    <View style={{ width: 40, height: 40 }}>
    <Svg
    width="80"
    height="80"
    fill="none"
    stroke="white"
    viewBox="140 140 200 200"
    >
        <Path  d="
        M 192.000 212.000
        L 215.511 224.361
        L 211.021 198.180
        L 230.042 179.639
        L 203.756 175.820
        L 192.000 152.000
        L 180.244 175.820
        L 153.958 179.639
        L 172.979 198.180
        L 168.489 224.361
        L 192.000 212.000
        "
        strokeWidth="3"
        />
    </Svg>
    </View>  
    )
}