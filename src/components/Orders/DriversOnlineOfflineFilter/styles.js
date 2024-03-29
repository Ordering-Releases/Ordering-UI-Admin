import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #CCC;
  ${({ showCompressedInfo }) => showCompressedInfo && css`
    justify-content: space-around;
    @media (min-width: 992px) {
      max-width: 350px;
    }
    > div {
      max-width: 150px;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  `}
`

export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}

  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
`
