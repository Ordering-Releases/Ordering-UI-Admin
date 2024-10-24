import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin-external'
import { DriversManager as DriversManagerController } from '../../../src/components/Orders'
import settings from '../../config.json'

export const DriversList = (props) => {
  const [events] = useEvent()
  const driversListProps = {
    ...props,
    isSearchByName: true,
    isSearchByCellphone: true,
    useBatchSockets: settings?.use_batch_sockets,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'photo', 'last_location_at'],
    onDriverRedirect: (driverId) => {
      if (!driverId) {
        return events.emit('go_to_page', { page: 'drivers', replace: true })
      }
      return events.emit('go_to_page', { page: 'drivers', search: `?id=${driverId}` })
    }
  }

  return (
    <>
      <HelmetTags page='drivers_dashboard' />
      <DriversManagerController {...driversListProps} />
    </>
  )
}
