/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react'

type FeatureFlagProvider = {
  featureFlags: Record<string, unknown>
}

const FeatureFlagProviderContext = createContext<FeatureFlagProvider>({
  featureFlags: {}
})

FeatureFlagProviderContext.displayName = 'FeatureFlagProviderContext'

export const useFeatureFlags = () => {
  const { featureFlags } = useContext(FeatureFlagProviderContext)

  return { featureFlags }
}

const FeatureFlagProvider = ({ children, featureFlags = [] }: any) => {
  const [ffs, setFeatureFlags] = useState<Record<string, unknown>>(featureFlags)

  useEffect(() => setFeatureFlags(() => ffs), [ffs])

  return (
    <FeatureFlagProviderContext.Provider
      value={{
        featureFlags: ffs
      }}>
      {children}
    </FeatureFlagProviderContext.Provider>
  )
}

export default FeatureFlagProvider
