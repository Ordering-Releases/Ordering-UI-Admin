import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const CampaignDetailContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CampaignName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 24px;
  font-weight: 700;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-right: 35px;

  ${props => props.theme.rtl && css`
    padding-left: 35px;
    padding-right: 0px;
  `}
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
        padding: 6px 20px;
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

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid #E9ECEF;
`

export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`

export const ContactWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 14px;
  }
  button {
    border-radius: 8px;
    height: 44px;
  }
`
