import React, { useEffect, useState } from 'react'
import { useLanguage, SitesAuthSettings as SitesAuthSettingsController } from 'ordering-components-admin-external'
import Skeleton from 'react-loading-skeleton'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { Alert, SideBar } from '../../Shared'
import { SiteSettingDetails } from '../SiteSettingDetails'

import {
  SitesListContainer,
  SitesWrapper,
  SiteItem
} from './styles'

const SitesAuthSettingsUI = (props) => {
  const {
    sitesState,
    actionState,
    setMoveDistance,
    siteConfigsState,
    handleGetSiteConfigs,
    handleChangeConfig
  } = props

  const [, t] = useLanguage()
  const [selectedSiteId, setSelectedSiteId] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleOpenSiteSettingDetails = (siteId) => {
    handleGetSiteConfigs(siteId)
    setSelectedSiteId(siteId)
    setMoveDistance(500)
  }

  const handleCloseDetails = () => {
    setSelectedSiteId(null)
    setMoveDistance(0)
  }

  useEffect(() => {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      })
    }
  }, [actionState.error])

  return (
    <>
      <SitesListContainer>
        <h1>{t('SITES_LOGIN_SIGNUP_SETTINGS', 'Sites Login/Signup Settings')}</h1>
        {sitesState.loading ? (
          <SitesWrapper>
            {[...Array(5).keys()].map(i => (
              <SiteItem key={i}>
                <Skeleton width={100} height={14} />
              </SiteItem>
            ))}
          </SitesWrapper>
        ) : (
          <SitesWrapper>
            {sitesState.sites.map(site => (
              <SiteItem
                key={site.id}
                active={site.id === selectedSiteId}
                onClick={() => handleOpenSiteSettingDetails(site.id)}
              >
                <span>{site.name}</span>
                <BsChevronRight />
              </SiteItem>
            ))}
          </SitesWrapper>
        )}
      </SitesListContainer>
      {selectedSiteId && (
        <SideBar
          isBorderShow
          open={selectedSiteId}
          onClose={() => handleCloseDetails()}
        >
          <SiteSettingDetails
            selectedSiteId={selectedSiteId}
            siteConfigsState={siteConfigsState}
            handleChangeConfig={handleChangeConfig}
          />
        </SideBar>
      )}
      <Alert
        title={t('SETTINGS', 'Settings')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const SitesAuthSettings = (props) => {
  const sitesAuthSettinsProps = {
    ...props,
    UIComponent: SitesAuthSettingsUI
  }
  return <SitesAuthSettingsController {...sitesAuthSettinsProps} />
}