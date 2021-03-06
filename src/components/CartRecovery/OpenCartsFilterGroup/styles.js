import styled, { css } from 'styled-components'

export const FilterGroupListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 48%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`
export const WrapperRow = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    width: 100%;
    height: 44px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    > div:first-child {
      height: 100%;
    }
  }

  &.city-filter > div:first-child {
    > div:first-child {
      height: 100%;
      > div:first-child {
        height: 100%;
        div {
          height: 100%;
        }
      }
    }
  }

  .date-filter-container {
    z-index: 100;
  }

  > input {
    width: 100%;
    height: 44px;
    margin-bottom: 20px;
    padding: 10px 15px;
    box-sizing: border-box;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    & > div {
      width: 48%;
    }

    > input {
      width: 48%;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  button {
    padding-top: 5px;
    padding-bottom: 5px;

    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 20px;
      ` : css`
        margin-left: 20px;
      `}
    }
  }
`
