import { View, Text, SafeAreaView} from 'react-native'
import React,{ useRef } from 'react'
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';

const App = () => {
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={{flex:1}}>
            <WebView source={{ uri:'https://4153-103-113-38-50.ngrok-free.app' }} style={{ width:'100%',borderWidth:1,borderColor:'blue' }} 
               javaScriptEnabled={true} 
               ref={webViewRef}
              //  onLoad={onLoad}
      domStorageEnabled={true} 
      mediaPlaybackRequiresUserAction={false} 
      allowsInlineMediaPlayback={ true }
            />
    </SafeAreaView>
  )
}

export default App

