import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = (props:any) => {
  return (
    <View className='flex-1 items-centr justify-center'>
      <ActivityIndicator {...props} />
    </View>
  )
}

export default Loader