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
import { View } from 'react-native'
import styles from './styles'
import DraggableFlatList, { RenderItemInfo, OnMoveEndInfo } from 'react-native-draggable-flatlist'
import ListItem from './components/ListItem'
import fakeData from './fakeData.json'

export type Language = {
  id: number,
  name: string,
  favorite: boolean,
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

  toggleFavorite = (value: Language) => {
    const data = this.state.data.map(item => (
      item.id !== value.id ? item : { ...item, favorite: !item.favorite }
    ))
    this.setState({ data })
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

  renderItem = ({ item, move, moveEnd, isActive }: RenderItemInfo<Language>) => {
    return (
      <ListItem
        item={item}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}
        onHeartPress={() => this.toggleFavorite(item)}
      />
    )
  }
}

export default App