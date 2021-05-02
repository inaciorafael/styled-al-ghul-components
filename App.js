import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Wrapper, Row, Column, Title, ContentText } from './src/styles';

const statusBarHeight = StatusBar.currentHeight;

export default function App() {
  return (
    <Wrapper
      align='center'
      justify='flex-start'
      flex={1}
      mt={statusBarHeight}
      pl={10}
      pr={10}
    >
      <StatusBar style='auto' />
      <ContentText>App</ContentText>
    </Wrapper>
  );
}