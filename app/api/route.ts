import { HistoryType } from '@/types/settings';
import fs from 'fs';
import { NextRequest } from 'next/server';
import path from 'path';



export async function GET() {
  const filePath2 = path.resolve("./public/passwords.json")
  const data = fs.readFileSync(filePath2, 'utf8')
  return Response.json({ data: data ? JSON.parse(data) : [] })
}


export async function POST(Request: NextRequest) {
  const result: HistoryType = await Request.json()
  console.log(result)

  // Based on the result
  // Save the result to a file in the public folder as CSV
  const filePath1 = path.resolve("./public/passwords.csv")
  const file1 = fs.createWriteStream(filePath1, { flags: 'a' })
  file1.write(`${result.date},${result.password}\n`)
  file1.close()



  // Save the result to a JSON file to be used as history
  const filePath2 = path.resolve("./public/passwords.json")
  // First read existing json file (if exists)
  fs.readFile(filePath2, 'utf8', (err, data) => {
    if (err) {
      // If file does not exist, create a new one
      fs.writeFileSync(filePath2, JSON.stringify([result]))
    }
    else {
      // If file exists, append the new result to the existing array
      const existingData = data ? JSON.parse(data) : []
      fs.writeFileSync(filePath2, JSON.stringify([...existingData, result]))
    }

  }
  )





  return Response.json({ Request: result })

}