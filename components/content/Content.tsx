"use client"
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider"
import { PiCopySimple } from "react-icons/pi";

import { HistoryType, SecuritySettingType } from "@/types/settings";
import Setting from "./Setting";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { RandomGenerator } from "@/lib/generator";





const Content = () => {
  const [security, setSecurity] = useState(false)
  const [securitySettings, setSecuritySettings] = useState({
    uppercase: false,
    symbols: false,
    numbers: false,
    fullUpper: false
  })
  const [length, setLength] = useState(20)
  const [result, setResult] = useState("")
  const [history, setHistory] = useState<HistoryType[]>([])

  const checkSecurity = () => {
    setSecurity(!security)
  }
  useEffect(() => {
    if (security) {
      setSecuritySettings({
        uppercase: true,
        symbols: true,
        numbers: true,
        fullUpper: false
      })
      setLength(30)
    } else {
      setSecuritySettings({
        uppercase: false,
        symbols: false,
        numbers: false,
        fullUpper: false
      })
      setLength(20)
    }
  }, [security])

  const generateDate = () => {
    // This generates the date in the format: DD/MM/YY@HH:MM
    const date = new Date()
    // Get minutes in MM format
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}@${date.getHours()}:${minutes}`

  }

  const changeSecuritySettings = (newSecuritySetting: SecuritySettingType) => {
    setSecuritySettings(newSecuritySetting)
  }

  const generatePassword = () => {
    const generatedPassowrd = RandomGenerator(length, securitySettings.uppercase, securitySettings.symbols, securitySettings.numbers, securitySettings.fullUpper)
    setResult(generatedPassowrd)
    setHistory([...history, { password: generatedPassowrd, date: generateDate() }])
  }
  const lengthChange = (value: number) => {
    setLength(value)
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(result)
  }

  const copyToClipboardHistory = (password: string) => {
    navigator.clipboard.writeText(password
    )
  }


  return (
    <div>
      <div className="flex gap-3">
        <Switch checked={security} onCheckedChange={checkSecurity} aria-readonly />
        <div className={`font-semibold ${!security && "text-gray-400"}`}>High security</div>
      </div>
      <div className="mt-5 flex gap-5">
        <Card className={cn("w-2/3")}>
          <CardHeader>
            <CardTitle>Password Generator</CardTitle>
            <CardDescription>Kerberos v1</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold pb-2 text-xl">Length</h3>
            <div className="flex gap-5">
              <Slider defaultValue={[length]} max={50} step={1} onValueChange={(val) => lengthChange(val[0])} />
              <div className="w-12 h-10 flex items-center justify-center text-center border rounded-md shadow border-gray-300 font-semibold text-gray-600">{length}</div>            </div>
            <h3 className="font-semibold pb-2 text-xl mt-4">Security Settings</h3>
            <Setting securitySettings={securitySettings} changeSecuritySettings={changeSecuritySettings} title="Full Uppercase" description="All letters MUST be uppercase" type="fullUpper" />
            <Setting securitySettings={securitySettings} changeSecuritySettings={changeSecuritySettings} title="Uppercase" description="Include uppercase letters" type="uppercase" />
            <Setting securitySettings={securitySettings} changeSecuritySettings={changeSecuritySettings} title="Include Numbers" description="Include numbers in the password" type="numbers" />
            <Setting securitySettings={securitySettings} changeSecuritySettings={changeSecuritySettings} title="Include Symbols" description="Include symbols in the password" type="symbols" />

            <div className="pt-5">
              <Button onClick={generatePassword}>Generate</Button>
            </div>
            <div className="mt-5 flex gap-3 h-13 ">
              <div className="shadow text-xl py-3 px-2 w-11/12 font-semibold border border-gray-200 rounded-md">{result}</div>
              <Button className="h-13" onClick={copyToClipBoard}><PiCopySimple className="text-2xl" /></Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">Version 1.0.1 - Beta</p>
          </CardFooter>
        </Card>
        <Card className={cn("w-1/3")}>
          <CardHeader>
            <CardTitle>Historical Data</CardTitle>
            <CardDescription>Information about the generated passwords</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold pb-2 text-xl">Last passwords generated</h3>
            <ul>
              {history.map((item, index) => (
                <div key={index} className="flex gap-2 items-center justify-between pb-2">
                  <li className="text-gray-600 border-b border-gray-100 pb-1">{item.date}: {item.password}</li>
                  <div onClick={() => (copyToClipboardHistory(item.password))} className="border border-gray-400 flex items-center justify-center p-1 rounded-md cursor-pointer hover:shadow">
                    <PiCopySimple className="text-gray-900 " />
                  </div>
                </div>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400"></p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Content