import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;

  > button {
    height: 42px;
    margin-top: 10px;
  }
`
export const PromotionImage = styled.div`
  margin-bottom: 29px;
`
export const Image = styled.div`
  position: relative;
  width: 187px;
  height: 187px;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.borderColor};
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: 5px;

  img,
  div:first-child {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const Camera = styled.div`
  position: absolute;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border-radius: 8px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 7px;
  ${props => props.theme?.rtl ? css`
    left: 7px;
  ` : css`
    right: 7px;
  `}
  svg {
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`

export const UploadImageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
    font-size: 12px;
    color: #ADB5BD;
  }

  svg {
    font-size: 32px;
    color: #ADB5BD;
    margin-bottom: 6px;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`

export const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CalendarContainer = styled.div`
  position: relative;
  > button {
    height: 42px;
    span {
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const CalendarWrapper = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  margin-top: 18px;
  overflow: hidden;
  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}
  .rdrDateRangeWrapper {
    .rdrDateDisplayWrapper {
      background-color: transparent;
    }

    .rdrDateDisplayItem {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: none;
    }

    button {
      ${({ notSelected }) => notSelected ? css`
        .rdrStartEdge,
        .rdrEndEdge,
        .rdrInRange {
          color: transparent !important;
        }
      ` : css`
        .rdrStartEdge,
        .rdrEndEdge,
        .rdrInRange {
          color: ${props => props.theme.colors.lightPrimary} !important;
        }
      `}
    }

    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: ${props => props.theme.colors.headingColor};
    }
  }  
`

export const PromotionTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 25px 0;
  > div {
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`

export const PromotionTypeWrapper = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.secundaryLight};

    ${({ active }) => active && css`
      color: ${props => props.theme.colors.primary};
    `}
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  > div {
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      display: none;
    }
    
    &:first-child {
      .select {
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 14px;
        border: none;
        background-color: ${props => props.theme.colors.secundary};
      }
    }
  }
`

export const MinimumLimitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  > div {
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      display: none;
    }    
  }
`
export const PoromotionTargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 14px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`

export const CouponContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};  
`
export const CouponHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 13px;
    ` : css`
      margin-left: 13px;
    `}
  }
`
export const CouponCodeContainer = styled.div`
  margin-top: 26px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
`
export const CouponContent = styled.div``

export const ShowInCartContainer = styled.div`
  display: flex;

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}

  > div {
    p {
      margin: 0;
      &:first-child {
        font-size: 14px;
      }
      &:last-child {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const DiscountOption = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`
export const AutomaticDiscountEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0 18px 0;
`
export const StackableContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`
