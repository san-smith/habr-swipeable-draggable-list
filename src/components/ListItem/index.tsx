import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { SwipeRow } from 'react-native-swipe-list-view'
import { Language } from '../../App'

import styles from './styles'

const heart = require('./icons8-heart-24.png')
const filledHeart = require('./icons8-heart-24-filled.png')

interface ListItemProps {
  item: Language,
  move: () => void,
  moveEnd: () => void,
  isActive: boolean,
  onHeartPress: () => void,
}

const ListItem = ({ item, move, moveEnd, isActive, onHeartPress }: ListItemProps) => {
  return (
    <SwipeRow
      rightOpenValue={-180}>

      <View style={styles.hidden}>
        <TouchableOpacity onPress={onHeartPress}>
          <Image source={item.favorite ? filledHeart : heart} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={[styles.root, isActive && styles.active]}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </SwipeRow>
  )
}

export default ListItem