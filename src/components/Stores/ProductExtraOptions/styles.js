import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MainContainer = styled.div`
  overflow: auto;
  transition: 0.3s;

  > button {
    margin: 20px 0;
  }

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
`

export const OptionsContainer = styled.div`
  padding: 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin: 5px 0;
  }

  > div {
    display: flex;
    align-items: center;
    > button {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    > div {
      > button {
        display: block;
        cursor: pointer;
        ${props => props.theme?.rtl ? css`
          margin-right: 10px;
        ` : css`
          margin-left: 10px;
        `}
      }
    }
  }
`

export const OptionNameContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 70%;
  margin: 12px 0;
  font-size: 14px;
  > input {
    flex: 1;
    height: 32px;
    width: 32px;
    padding: 5px;
    border: none;
    outline: none;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};

    &:focus {
      border: 1px dashed ${props => props.theme.colors.lightGray};
    }
    &:read-only {
      background-color: #F8F9FA;
      cursor: not-allowed;
    }
    ${props => props.theme?.rtl ? css`
      margin-right: 5px;
    ` : css`
      margin-left: 5px;
    `}
  }

  ${props => props.theme?.rtl ? css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    margin-left: 20px;
  ` : css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    margin-right: 20px;
  `}

  ${({ isHeader }) => isHeader && css`
    font-size: 12px;
    font-weight: 700;
    border-right: none;
    border-left: none;
  `}
`

export const OptionImage = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.borderColor};

  img {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  svg {
    font-size: 20px;
    color: #ADB5BD;
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}

  @media (min-width: 450px) {
    width: 38px;
    height: 38px;
  }
`

export const ActionSelectorWrapper = styled.div`
  button {
    display: flex;
    background: transparent !important;
    border: none;
    padding: 5px;
    border-radius: 8px;

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
      background: ${props => props.theme.colors.secundary} !important;
    }
    &:active {
      background: ${props => props.theme.colors.secundaryDarkContrast} !important;
    }
  }

  .show {
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
        padding: 7px 20px;
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`
export const AddOptionForm = styled.form`
  display: flex;
  align-items: center;
  border-top: 13px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > input {
    width: 75px;
    height: 32px;
    padding: 5px;
    border: none;
    outline: none;
    font-size: 14px;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};

    &:focus {
      border: 1px dashed ${props => props.theme.colors.lightGray};
    }
  }

  @media (min-width: 450px) {
    > input {
      width: 80px;
    }
  }
`
export const OptionsList = styled.div`
`
export const OptionItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  ${({ isHeader }) => !isHeader && css`
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
  `}
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  ${({ isDragOver }) => isDragOver && css`
    border-top: 1px solid ${props => props.theme.colors.primary};
  `}

  ${({ isBorderBottom }) => isBorderBottom && css`
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}
`
export const MinimumPurchase = styled.div`
  min-width: 75px;
  ${({ isHeader }) => isHeader ? css`
    font-size: 12px;
    font-weight: 700;
  ` : css`
    font-size: 14px;
  `}
  @media (min-width: 450px) {
    min-width: 80px;
  }
`
export const MaxPurchase = styled.div`
  min-width: 75px;
  ${({ isHeader }) => isHeader ? css`
    font-size: 12px;
    font-weight: 700;
  ` : css`
    font-size: 14px;
  `}
  @media (min-width: 450px) {
    min-width: 80px;
  }
`
export const ArrowWrpper = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    font-size: 13px;
    color: ${props => props.theme.colors.secundaryLight};
    margin: 0 5px;
  }
`
export const DragImageWrapper = styled.div`
  img {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    &:hover {
      cursor: grab;
    }
    @media (min-width: 450px) {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`
