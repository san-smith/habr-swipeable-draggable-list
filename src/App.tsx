/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './styles'
import DraggableFlatList, { RenderItemInfo, OnMoveEndInfo } from 'react-native-draggable-flatlist'
import ListItem from './components/ListItem'
import fakeData from './fakeData.json'

type Language = {
  id: number,
  name: string,
}

interface AppProps {}

interface AppState {
  data: Array<Language>
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      data: fakeData,
    }
  }

  onMoveEnd = ({ data }: OnMoveEndInfo<Language>) => {
    this.setState({ data: data ? [...data] : [] })
  }

  render() {
    return (
      <View style={styles.root}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollPercent={5}
          onMoveEnd={this.onMoveEnd}
        />
      </View>
    )
  }

  renderItem = ({ item,  move, moveEnd, isActive }: RenderItemInfo<Language>) => {
    return (
      <ListItem
        name={item.name}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}
      />
    )
  }
}

export default App