import React, { createContext, useContext, useEffect, useState } from 'react'
import { createGlobalStyle, css, ThemeProvider as ThemeProviderStyled } from 'styled-components'

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const ThemeContext = createContext()

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(props.theme)

  const GlobalStyle = createGlobalStyle`

    @media (min-width: 578px) {
      /** Mozilla scrollbar*/
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }

      /** Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background: #CCCCCC;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #AFAFAF;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.3);
      }
    }

    body {
      font-family: '${theme.fonts.primary?.name || 'Helvetica'}', sans-serif;
      margin: 0;
      background-color: ${props => props.theme.colors?.backgroundPage || '#FFFFFF'};
      color: ${props => props.theme.colors?.headingColor || '#000'};

      ${theme.rtl && css`
        direction: rtl;
      `}
    }

    input, textarea, button {
      font-family: inherit;
    }

    * {
      box-sizing: border-box;
    }

    .dxc-tooltip {
      z-index: 9999;
    }

    .popup-backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3000;
    }

    .modal-backdrop {
      display: none;
    }

    .popup-component {
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ghostDragging {
      border-radius: 8px;
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid ${props => props.theme.colors?.borderColor};
      font-size: 14px;
      padding: 10px 19px;
      width: fit-content;
      min-width: 200px;
      font-size: 14px;
      position: fixed;
    }

    #___reactour {
      > div:first-child {
        opacity: 0.7;
        color: #000;
        z-index: 2000;
      }

      span[data-tour-elem=badge] {
        display: none;
      }
      div[data-tour-elem=controls] {
        display: none;
      }
    }
  `

  useEffect(() => {
    const fonts = Object.entries(theme.fonts || {})
    fonts.forEach(([name, fontFamily]) => {
      if (!window.document.getElementById(`${name}-font-styles`)) {
        const font = window.document.createElement('link')
        font.id = `${name}-font-styles`
        font.rel = 'stylesheet'
        font.async = true
        font.defer = true
        font.href = `https://fonts.googleapis.com/css2?family=${fontFamily.name}:wght@${fontFamily.weights.join(';')}&display=swap`

        window.document.body.appendChild(font)
      }
    })
  }, [])

  const update = (theme) => {
    setTheme(theme)
  }

  const merge = (partTheme) => {
    setTheme({
      ...theme,
      ...partTheme
    })
  }

  return (
    <ThemeContext.Provider value={[theme, { update, merge }]}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(ThemeContext)
  return themeManager || [{}]
}
