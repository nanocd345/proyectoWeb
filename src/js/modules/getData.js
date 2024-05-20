export const getDataAllData = async () => {
    try {
        let res = await fetch('https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716220800000&signature=OBSf-sN_aHTEyQ3Ft08QEnUjIRy-jXnWTKXIRDlYQhk&downloadName=Documentos_DB.json');
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            console.error('Error al obtener los datos:', res.status);
            return null;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return null;
    }
};




