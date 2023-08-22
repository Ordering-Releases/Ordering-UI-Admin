import React from 'react'
import { useLanguage } from 'ordering-components-admin-external'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'
import { LoadingMessage } from './styles'

export const GraphLoadingMessage = () => {
  const [, t] = useLanguage()

  return (
    <LoadingMessage>
      <CgSpinnerTwoAlt />
      {t('WAIT_WHILE_LOADING_ALL_INFORMATION', 'please wait while we load all the information')}
    </LoadingMessage>
  )
}
