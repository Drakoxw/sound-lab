import { Base64 } from "@interfaces/index";

const convertFileToBase64 = (file: File): Promise<Base64> => {
  const base: Base64 = {
    name: file.name,
    mimeType: file.type,
    base64: ""
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        console.log(reader)
        base.base64 = reader.result
          .replace('data:', '')
          .replace(/^.+,/, '')

        return resolve(base)
      }
    }

    reader.onerror = (error) => reject(error)
  })
}

export { convertFileToBase64 }
