import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'
import React from 'react'

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent
      />
    </>
  )
}
