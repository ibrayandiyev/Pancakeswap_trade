import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@wdefifinancebsc/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceKiwiBusd } from 'state/hooks'
import { config } from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const kiwiPriceUsd = usePriceKiwiBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      kiwiPriceUsd={kiwiPriceUsd.toNumber()}
      links={config}
      {...props}
    />
  )
}

export default Menu
