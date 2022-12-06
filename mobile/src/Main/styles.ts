import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { isAndroid } from '../utils/platform';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${() => isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
`;

export const FooterSafeArea = styled.SafeAreaView`
  padding: 16px 24px;
`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
