import styled, { css } from 'styled-components'

export const AnalyticsCalendarContainer = styled.div`
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
    left: 0px;
  ` : css`
    right: 0px;
  `}

  ${({ leftAlign }) => leftAlign && css`
    ${props => props.theme?.rtl ? css`
      right: 0px;
      left: initial;
    ` : css`
      left: 0px;
      right: initial;
    `}
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
      .rdrStartEdge,
      .rdrEndEdge,
      .rdrInRange {
        color: ${props => props.theme.colors.lightPrimary} !important;
      }
    }
    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: ${props => props.theme.colors.headingColor};
    }
  }  
`
