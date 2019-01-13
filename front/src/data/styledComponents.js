import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInDown, bounceIn, bounceInDown } from 'react-animations';

export const fadeDownAnimation = keyframes`${fadeInDown}`;
export const FadeDownDiv = styled.div`
  animation: 1s ${fadeDownAnimation};
`;

export const fadeAnimation = keyframes`${fadeIn}`;
export const FadeInDiv = styled.div`
  animation: 3s ${fadeAnimation};
`
export const bounceAnimation = keyframes`${bounceIn}`;
export const BounceDiv = styled.div`
  animation: 1s ${bounceAnimation};
  height: 100%;
`