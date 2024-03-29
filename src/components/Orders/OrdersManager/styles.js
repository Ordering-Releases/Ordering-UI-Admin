import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: auto;
  max-height: 100vh;
  ${({ isSelectedOrders }) => isSelectedOrders && css`
    margin-top: 0px;
    padding: 20px 0 0 0;
  `}
  @media print {
    display: none;
  }
`
export const OrdersContent = styled.div`
  margin-top: 10px;
`
export const OrdersInnerContent = styled.div`
`
export const WrapperIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: #151824;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`

export const WrapItemView = styled.div`
  width: 100%;
`
export const OrderSubFilterControls = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const OrderStatusSubFilterWrapper = styled.div`
  width: 50%;
  display: inline-block;
  flex: 1;
  margin-right: 20px;
`
