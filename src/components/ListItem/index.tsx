import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface ListItemProps {
  name: string,
  move: () => void,
  moveEnd: () => void,
  isActive: boolean,
}

const ListItem = ({ name, move, moveEnd, isActive }: ListItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.root, isActive && styles.active]}
      onLongPress={move}
      onPressOut={moveEnd}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ListItem