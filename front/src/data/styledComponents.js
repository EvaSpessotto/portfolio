import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInDown } from 'react-animations';

export const fadeDownAnimation = keyframes`${fadeInDown}`;
export const FadeDownDiv = styled.div`
  animation: 1s ${fadeDownAnimation};
`;

export const fadeAnimation = keyframes`${fadeIn}`;
export const FadeInDiv = styled.div`
  animation: 3s ${fadeAnimation};
`
