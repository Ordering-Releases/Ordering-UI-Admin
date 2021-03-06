import styled from 'styled-components'

export const WrapMetaFields = styled.div`
  box-sizing: border-box;
  position: relative;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const MetaTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 30px;
`
export const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${props => props.theme.colors?.headingColor};

  .meta_type {
    width: 25%;
    font-size: 14px;
    .select {
      border: none;
      background: ${props => props.theme.colors.secundary};
    }
  }
  .meta_key {
    width: 25%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .meta_value {
    flex: 1;
    word-break: break-all;
    display: flex;
    column-gap: 10px;
    > div {
      width: 100%;
    }
    svg {
      font-size: 20px;
      color: ${props => props.theme.colors?.headingColor};
      cursor: pointer;
    }
  }

`
export const MetaAddContainer = styled(MetaContainer)`
  input {
    font-size: 14px;
    height: 35px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
    width: 100%;
  }

  button {
    margin-top: 6px;
    svg {
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`
export const RoundBorder = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: ${props => props.theme.colors?.headingColor};
  overflow: hidden;
`

export const MetaAddForm = styled.form`
  button[type='submit'] {
    outline: none;
    background: transparent;
    border: none;
    padding: 0px;
    height: fit-content
  }

  .select-input {
    width: 100%;

    svg {
      color: #000;
    }
  }
  
  .json_editor {
    width: 100%;
    height: 300px;
    > div {
      height: 100%;
    }
    .jsoneditor {
      border: 1px solid ${props => props.theme.colors.primary};
      > div.jsoneditor-menu {
        background-color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }
    }
    .jsoneditor-search {
      display: none;
    }
  }
`

export const SkeletonItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  span {
    border-radius: 5px;
  }
`
