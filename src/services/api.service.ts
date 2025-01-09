

const startUrl = import.meta.env.VITE_API_URL


export const getUserService = async () =>  {
     return  await fetch(startUrl+'/'+'todos')
        .then(value => value.json())

}