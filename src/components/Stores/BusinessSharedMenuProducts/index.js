import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useLanguage,
  BusinessSharedMenuProducts as BusinessSharedMenuProductsController
} from 'ordering-components-admin-external'
import { Checkbox } from '../../../styles'
import { Modal, SearchBar, SideBar } from '../../Shared'
import { BusinessSharedMenuProductDetails } from '../BusinessSharedMenuProductDetails'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { ChevronRight } from 'react-bootstrap-icons'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  MenuProductsContainer,
  SearchBarWrapper,
  ProductListWrapper,
  ProductItem
} from './styles'

const BusinessSharedMenuProductsUI = (props) => {
  const {
    menuState,
    business,
    handleUpdateBusinessSharedMenuProduct,
    setIsOpenSharedProduct,
    handleChangeInput,
    menuList,
    setMenuList
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [searchValue, setSearchValue] = useState('')
  const [currentProduct, setCurrentProduct] = useState(null)
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  const handleOpenProduct = (e, product, isInitialRender) => {
    const isInvalid = e?.target?.closest('.product_checkbox')
    if (isInvalid) return
    setIsOpenSharedProduct(true)
    setCurrentProduct(product)
    setIsOpenDetails(true)

    if (!isInitialRender) {
      addQueryToUrl({ product: product.id })
    }
  }

  const handleCloseSidebar = () => {
    setIsOpenDetails(false)
    setCurrentProduct(null)
    setIsOpenSharedProduct(false)
    removeQueryToUrl(['product'])
  }

  useEffect(() => {
    const productId = query.get('product')
    if (productId) {
      const initProduct = menuState.menu.products.find(product => product.id === Number(productId))
      if (initProduct) {
        handleOpenProduct(null, initProduct, true)
      }
    }
  }, [])

  return (
    <>
      <MenuProductsContainer>
        <SearchBarWrapper>
          <SearchBar
            placeholder={t('SEARCH', 'Search')}
            isCustomLayout
            search={searchValue}
            onSearch={val => setSearchValue(val?.toLowerCase())}
          />
        </SearchBarWrapper>
        <ProductListWrapper>
          {menuState.menu.products.filter(product => product.name?.toLowerCase().includes(searchValue)).map((product, index) => (
            <ProductItem
              key={product.id}
              isBorderTop={index === 0}
              onClick={e => handleOpenProduct(e, product)}
              active={product.id === currentProduct?.id}
            >
              <Checkbox
                className='product_checkbox'
                defaultChecked={product.enabled}
                onChange={e => handleUpdateBusinessSharedMenuProduct?.(product.id, { enabled: e.target.checked })}
              />
              <span>{product.name}</span>
              <ChevronRight />
            </ProductItem>
          ))}
        </ProductListWrapper>
      </MenuProductsContainer>

      {width >= 1000 ? (
        <>
          {isOpenDetails && (
            <SideBar
              isBorderShow
              sidebarId='shared_product_details'
              open={isOpenDetails}
              onClose={() => handleCloseSidebar()}
            >
              <BusinessSharedMenuProductDetails
                business={business}
                menu={menuState.menu}
                product={currentProduct}
                handleChangeInput={handleChangeInput}
                menuList={menuList}
                setMenuList={setMenuList}
              />
            </SideBar>
          )}
        </>
      ) : (
        <Modal
          width='80%'
          open={isOpenDetails}
          onClose={() => handleCloseSidebar()}
        >
          <BusinessSharedMenuProductDetails
            business={business}
            menu={menuState.menu}
            product={currentProduct}
            handleChangeInput={handleChangeInput}
            menuList={menuList}
            setMenuList={setMenuList}
          />
        </Modal>
      )}
    </>
  )
}

export const BusinessSharedMenuProducts = (props) => {
  const businessSharedMenuProductsProps = {
    ...props,
    UIComponent: BusinessSharedMenuProductsUI
  }
  return <BusinessSharedMenuProductsController {...businessSharedMenuProductsProps} />
}
