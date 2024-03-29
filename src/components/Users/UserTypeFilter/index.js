import React from 'react'
import { useLanguage, UserTypeFilter as UserTypeFilterController } from 'ordering-components-admin-external'
import { Button } from '../../../styles'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  UserTypeFilterContainer
} from './styles'

export const UserTypeFilterUI = (props) => {
  const {
    handleChangeUserType,
    userTypes,
    currentTypesSelected
  } = props

  const handleChangeUserRole = (type) => {
    handleChangeUserType && handleChangeUserType(type)
  }

  const checkIsActive = (subTypes) => {
    const isSame = (subTypes.length === currentTypesSelected.length) && subTypes.every((element, index) => {
      return element === currentTypesSelected[index]
    })
    return isSame
  }

  return (
    <UserTypeFilterContainer>
      {userTypes && userTypes.length > 0 && userTypes.map(type => (
        <Button
          key={type.id}
          color={checkIsActive(type.value) ? 'primary' : 'secundaryDark'}
          onClick={() => handleChangeUserRole(type.value)}
        >
          {type.title}
          {checkIsActive(type.value) && <MdClose />}
        </Button>
      ))}
    </UserTypeFilterContainer>
  )
}

export const UserTypeFilter = (props) => {
  const [, t] = useLanguage()

  const userTypeFilterProps = {
    ...props,
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [
      { id: 1, title: t('ALL', 'All'), value: [0, 2, 9] },
      { id: 2, title: t('BUSINESS_OWNER', 'Business owner'), value: [2] },
      { id: 3, title: t('ADMINISTRATORS', 'Administrators'), value: [0] },
      { id: 4, title: t('CALL_CENTER_AGENT', 'Call center agent'), value: [9] }
    ],
    defaultUserTypes: props.defaultUserTypes || [0, 2, 9],
    onChangeUserType: props.handleChangeUserType
  }

  return (
    <UserTypeFilterController {...userTypeFilterProps} />
  )
}
