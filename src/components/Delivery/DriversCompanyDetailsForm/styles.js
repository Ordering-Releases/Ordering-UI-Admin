import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;

  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    min-height: 24px;
  }
`

export const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 15px;
`

export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.lightGray};
  white-space: nowrap;
  font-size: 12px;

  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 2px solid ${props => props.theme.colors.headingColor};
    font-weight: 500;
    font-size: 14px;
  `}
`
export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 5px;
  ` : css`
    margin-left: 5px;
  `}
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
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`
