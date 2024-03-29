import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;

  @media (min-width: 768px){
    width: auto;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
    font-size: 14px;

    ${({ isTimezone }) => isTimezone && css`
      > div:first-child {
        > div {
          overflow: hidden;
        }
      }
      .list-wrapper {
        font-size: 12px;
      }
    `}
  }
`

export const Image = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ isImage, theme }) => isImage ? '#FFF' : `${theme.colors.backgroundPage}`};
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const Camera = styled.div`
  > * {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
  padding: 4px;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
  }

  svg {   
    width: 45px;
    height: 45px;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  input {
    color: ${props => props.theme.colors.headingColor};
  }
  input.form {
    padding: 10px 15px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  div.PhoneInput {
    input {
      border-radius: 8px;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 100%;
  padding-top: 20px;
  padding-bottom: 30px;

  button {
    flex: 1;
    margin-top: 10px;
    padding: 7px 0px;
    width: 49%;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }
  }

  ${props => props.theme?.rtl && css`
    button {
      &:nth-child(1) {
        margin-right: 0px;
      }
      &:last-child {
        margin-right: 5px;
      }
    }
  `}
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`
export const MainInformationContainer = styled.div`
  flex: 1;
`

export const DriverGroupListContainer = styled.div`
  margin: 15px 0;
`

export const DriverGroupItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0;
  cursor: pointer;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const CheckboxWrapper = styled.div`
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
