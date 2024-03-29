import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin-external'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { Envelope, Phone, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { Switch, LinkButton } from '../../../styles'
import { ConfirmAdmin, Pagination } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  UsersConatiner,
  UserTableWrapper,
  UsersTable,
  WrapperImage,
  Image,
  UserMainInfo,
  CheckBoxWrapper,
  InfoBlock,
  UserTypeWrapper,
  UserEnableWrapper,
  WrapperPagination,
  UsersBottomContainer,
  VerifiedItemsContainer,
  VerifiedItem,
  AllCheckWrapper,
  OrdersCountWrapper
} from './styles'

export const UsersList = (props) => {
  const {
    userDetailsId,
    usersList,
    paginationProps,
    getUsers,
    handleChangeActiveUser,
    selectedUsers,
    handleSelectedUsers,
    handleOpenUserDetails,
    handleOpenUserAddForm,
    setSelectedUsers,
    isCustomer,
    isUseQuery
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })
  const [isAllChecked, setIsAllChecked] = useState(false)

  const getUserType = (type) => {
    const userTypes = [
      { key: 0, value: t('ADMINISTRATOR', 'Administrator') },
      { key: 1, value: t('CITY_MANAGER', 'City manager') },
      { key: 2, value: t('BUSINESS_OWNER', 'Business owner') },
      { key: 3, value: t('USER', 'User') },
      { key: 9, value: t('CALL_CENTER_AGENT', 'Call center agent') }
    ]

    const objectStatus = userTypes.find(o => o.key === type)
    return objectStatus && objectStatus
  }

  const onChangeUserDetails = (e, user) => {
    const isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_enable_control') || e.target.closest('.user_action')
    if (isInvalid) return
    handleOpenUserDetails(user)
  }

  const handleChangePage = (page) => {
    getUsers(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getUsers(expectedPage, pageSize)
  }

  const handleEnable = (user, enabled) => {
    if (user.level !== 0) {
      handleChangeActiveUser({ id: user.id, enabled: enabled })
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: () => {
          setConfirmAdmin({ ...confirmAdmin, open: false })
          handleChangeActiveUser({ id: user.id, enabled: enabled })
        }
      })
    }
  }

  const handleSelecteAllUser = () => {
    const userIds = usersList.users?.reduce((ids, user) => [...ids, user.id], [])
    if (!isAllChecked) {
      setSelectedUsers([...selectedUsers, ...userIds])
    } else {
      const userIdsToDeleteSet = new Set(userIds)
      const updatedSelectedOrderIds = selectedUsers.filter((name) => {
        return !userIdsToDeleteSet.has(name)
      })
      setSelectedUsers(updatedSelectedOrderIds)
    }
  }

  useEffect(() => {
    if (usersList.loading) return
    const userIds = usersList.users?.reduce((ids, user) => [...ids, user.id], [])
    const _isAllChecked = userIds.every(elem => selectedUsers.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [usersList.users, selectedUsers])

  useEffect(() => {
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [usersList.users, paginationProps])

  useEffect(() => {
    if (!isUseQuery || !paginationProps?.currentPage || !paginationProps?.pageSize || !paginationProps?.totalPages) return
    addQueryToUrl({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    })
  }, [paginationProps?.currentPage, paginationProps?.pageSize, paginationProps?.totalPages])

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                <th>
                  <AllCheckWrapper>
                    <CheckBoxWrapper
                      className='all-checkbox'
                      isChecked={!usersList?.loading && isAllChecked}
                      onClick={() => handleSelecteAllUser()}
                    >
                      {(!usersList?.loading && isAllChecked) ? (
                        <CheckSquareFill />
                      ) : (
                        <Square />
                      )}
                    </CheckBoxWrapper>
                    {t('ID', 'Id')}
                  </AllCheckWrapper>
                </th>
                <th>{t('USER', 'User')}</th>
                <th>{t('PHONE', 'Phone')}</th>
                <th>{t('TYPE', 'Type')}</th>
                <th className='amout-orders '>{t('AMOUNT_OF_ORDERS', 'Amount of orders')}</th>
                <th>{t('ACTION', 'Action')}</th>
              </tr>
            </thead>
            {usersList.loading ? (
              [...Array(paginationProps?.pageSize || 10).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <UserMainInfo>
                        <CheckBoxWrapper>
                          <Skeleton width={20} height={20} />
                        </CheckBoxWrapper>
                        <InfoBlock>
                          <p><Skeleton width={70} /></p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                    <td>
                      <UserMainInfo>
                        <WrapperImage isSkeleton>
                          <Skeleton width={45} height={45} />
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'><Skeleton width={150} /></p>
                          <p><Skeleton width={100} /></p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                    <td>
                      <Skeleton width={100} />
                    </td>
                    <td>
                      <UserTypeWrapper>
                        <Skeleton width={80} />
                      </UserTypeWrapper>
                    </td>
                    <td>
                      <Skeleton width={20} />
                    </td>
                    <td>
                      <Skeleton width={20} />
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              usersList?.users.map(user => (
                <tbody key={user.id} className={user.id === parseInt(userDetailsId) ? 'active' : null}>
                  <tr
                    onClick={(e) => onChangeUserDetails(e, user)}
                  >
                    <td>
                      <UserMainInfo>
                        <CheckBoxWrapper
                          className='user_checkbox'
                          isChecked={selectedUsers.includes(user.id)}
                          onClick={() => handleSelectedUsers(user.id)}
                        >
                          {selectedUsers.includes(user.id) ? (
                            <CheckSquareFill />
                          ) : (
                            <Square />
                          )}
                        </CheckBoxWrapper>
                        <InfoBlock>
                          <p className='bold'>{user?.id}</p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                    <td>
                      <UserMainInfo>
                        <WrapperImage>
                          {user?.photo ? (
                            <Image bgimage={optimizeImage(user?.photo, 'h_50,c_limit')} />
                          ) : (
                            <FaUserAlt />
                          )}
                          {isCustomer && (
                            <OrdersCountWrapper isNew={user?.orders_count === 0}>
                              {user?.orders_count || t('NEW', 'New')}
                            </OrdersCountWrapper>
                          )}
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'>{user.name} {user?.lastname}</p>
                          <p>{user?.email}</p>
                        </InfoBlock>
                        {(user?.phone_verified || user?.email_verified) && (
                          <VerifiedItemsContainer>
                            {!!user?.phone_verified && (
                              <VerifiedItem>
                                <Phone />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}

                            {!!user?.email_verified && (
                              <VerifiedItem>
                                <Envelope />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}
                          </VerifiedItemsContainer>
                        )}
                      </UserMainInfo>
                    </td>
                    <td>
                      <InfoBlock>
                        <p className='bold'>{t('PHONE')}</p>
                        <p>{user?.cellphone}</p>
                      </InfoBlock>
                    </td>
                    <td>
                      <UserTypeWrapper noBorder>
                        <p>{getUserType(user?.level)?.value}</p>
                      </UserTypeWrapper>
                    </td>
                    <td>
                      <UserTypeWrapper>
                        <p>{user?.orders_count || t('NEW', 'New')}</p>
                      </UserTypeWrapper>
                    </td>
                    <td>
                      <UserEnableWrapper className='user_enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          notAsync={user.level === 0}
                          defaultChecked={user?.enabled}
                          onChange={enabled => handleEnable(user, enabled)}
                        />
                      </UserEnableWrapper>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </UsersTable>
        </UserTableWrapper>
        <UsersBottomContainer>
          <LinkButton onClick={() => handleOpenUserAddForm()}>
            {t('ADD_NEW_USER', 'Add new user')}
          </LinkButton>
          {usersList?.users.length > 0 && (
            <WrapperPagination>
              <Pagination
                defaultPageSize={paginationProps?.pageSize}
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
              />
            </WrapperPagination>
          )}
        </UsersBottomContainer>
      </UsersConatiner>

      <ConfirmAdmin
        open={confirmAdmin.open}
        onClose={() => setConfirmAdmin({ ...confirmAdmin, open: false })}
        onConfirm={confirmAdmin.handleOnConfirm}
      />
    </>
  )
}
