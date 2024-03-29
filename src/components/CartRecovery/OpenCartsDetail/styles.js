import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  height: 100vh;
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  ${({ noAnimation }) => !noAnimation && css`
    transition: 0.3s;
  `}

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const OrderDetailsContent = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  ${({ noScroll }) => noScroll && css`
    overflow: hidden;
  `}
`

export const ButtonLink = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;

  &:hover {
    background-color: ${props => props.theme.colors?.secundary};
    border-radius: 5px;
  }

  svg {
    color: ${props => props.theme.colors?.secundaryContrast};
    font-size: 24px;
  }
`

export const OrderProducts = styled.div`
  padding: 25px 0 10px 0;
  border-bottom: 1px solid #E9ECEF;
  h2 {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 18px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const OrderInfoWrapper = styled.div`
  > h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
  P {
    margin: 0px;
    font-size: 12px;
    line-height: 18px;
    span {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  > span {
    width: 100%;
  }
`
export const ActionSelectorWrapper = styled.div`
  button {
    background: transparent !important;
    border: none;
    padding: 0px 5px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 20px;
    }

    &:after {
      display: none;
    }

    &:hover {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
    }
  }

  .show {
    button {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    > div {
      border-radius: 8px;
      .dropdown-item {
        font-size: 12px;
        color: ${props => props.theme.colors.headingColor};
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
