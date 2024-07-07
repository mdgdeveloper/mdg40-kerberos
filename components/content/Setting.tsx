import React, { FC } from 'react'
import { Checkbox } from '../ui/checkbox'

import { SecuritySettingType } from '@/types/settings'


type Props = {
  securitySettings: SecuritySettingType
  changeSecuritySettings: (newSecuritySetting: SecuritySettingType) => void
  title: string
  description: string
  type: keyof SecuritySettingType
}


const Setting: FC<Props> = ({ securitySettings, changeSecuritySettings, title, description, type }) => {
  return (
    <div className="items-top flex space-x-2 pt-2 pb-2">
      <Checkbox
        id={type}
        checked={securitySettings[type]}
        onCheckedChange={() => changeSecuritySettings({
          ...securitySettings,
          [type]: !securitySettings[type],
        })}
      />

      <div className="grid gap-1 leading-none">
        <label
          htmlFor="uppercase"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Setting