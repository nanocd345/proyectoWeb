let data 
try {
    let res = await fetch('https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1715983200000&signature=bKCU1aN7ehQWRZuMrzXneZB3f7zYUNNl8sNhZD3IwDk&downloadName=Documentos_DB.json')
    data = await res.json()
}
catch (error) {
    console.error("no se obtuvo respuesta de la API")
}

export const getAllData = () => {
    let datos = data
    return datos
}



