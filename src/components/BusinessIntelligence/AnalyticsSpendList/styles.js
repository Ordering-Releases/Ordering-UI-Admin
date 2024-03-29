import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
  height: 100%;
`

export const AnalyticsSpendListHeader = styled.div`
  margin-bottom: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    text-transform: uppercase;
  }
`

export const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    font-size: 14px;
    color: #909BA9;
    text-align: center;
  }
`

export const TimeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  h1{
    font-weight: 500;
    font-size: 52px;
    margin: 0;
    color: ${props => props.theme?.colors.headingColor};
    word-break: break-word;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
  }
`

export const AnalyticsSpendListContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    margin-top: 10px;
  }
`

export const ReviewBlock = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 7.6px;
  background: #FFF4CC;

  svg {
    font-size: 32px;
    path {
      fill: #FFC700;
    }
  }
`

export const EmptyContent = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
