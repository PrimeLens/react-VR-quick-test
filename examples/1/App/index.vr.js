import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano
          onLoad={()=>{ console.log('three sixty image loaded'); }}
          //style={{transform:[{rotateY: -20}]}}  /* this moves the postion of the jpg */
          source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Sup Nick and Ian
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
