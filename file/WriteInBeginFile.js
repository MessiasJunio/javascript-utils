/*
 This is a sample of a problem with cloud server logs,
 it may seem like simple code, but the management of the company where
 I worked almost hired an external service, until I presented this solution.
 This code solution is to write in the beginning of a file
*/
const fs = require('fs')

const createFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.appendFile(filePath, '', (err) => {
      if (err) throw err
    } )
  }
}


const writeAtTheBeginningOfTheFileCallback = (text, filePath) => {
  fs.readFile(filePath, (err, buffer) => {
    if (err) {
      throw err
    }

    const fileArray = buffer.toString().split('\n')
    fileArray.unshift(text)

    fs.writeFile(filePath, fileArray.join('\n'), (error) => {
      if (error) {
        throw error
      } else {
        console.log('Data successfully saved')
      }
    })
  })
}


const writeAtTheBeginningOfTheFileAsync = async (text, fileName = 'file.txt' ) => {
  try {
    const file = await fs.promises.readFile(fileName)
    const fileArray = await file.toString().split('\n')
    fileArray.unshift(text)
    await fs.promises.writeFile(fileName, fileArray.join('\n'))

    console.log('Data successfully saved')
  } catch (err) {
    await fs.promises.writeFile(fileName, text)
    console.log(fileName, 'was created')
  }
}

const createLog = async () => {
  const optionsDate = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Porto_Velho',
    timeZoneName: 'short'
  }

  const filePath = './file.txt'

  createFile(filePath)

  let dateNow = new Date()
  dateNow = new Intl.DateTimeFormat('pt-BR', optionsDate).format(dateNow)

  const apiRequestLog = `API Request on ${dateNow}`

  writeAtTheBeginningOfTheFileCallback(apiRequestLog, filePath)

  // await writeAtTheBeginningOfTheFileAsync(apiRequestLog, filePath)
}

createLog()
