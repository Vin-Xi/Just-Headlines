import React from 'react';
import WebView from 'react-native-webview';
import {RootStackParamList} from '../Navigation/Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Web View'>;
const WebViewScreen:React.FC<{route:Props['route']}>=({route})=>{
    const {url}=route.params
    return(
    <>
        <WebView
            source={{
                uri:url
            }}
        />
    </>
    );
}

export default WebViewScreen