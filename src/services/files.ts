export async function uploadFile(fileBuffer: ArrayBuffer, filename: string) {
    const formData = new FormData()
    formData.append('file', new Blob([fileBuffer]), filename)
    const response = await fetch(`${Bun.env.FILE_UPLOAD_ENDPOINT}?filename=${filename}`, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    return data.filename
}