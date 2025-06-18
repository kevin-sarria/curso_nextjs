import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = async(): Promise<{ [id: string]: number }> => {

    if( hasCookie('cart') ) {
        const cookieCart = JSON.parse( await getCookie('cart') as string ?? '{}')
        return cookieCart
    }
    return {}
}

export const addProductToCart = async(id: string) => {
    const cookieCart = await getCookieCart().finally()

    if( cookieCart[id] ) {
        cookieCart[id] += 1
    } else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = async( id: string ) => {
    const cookieCart = await getCookieCart().finally()
    delete cookieCart[id]
    setCookie('cart', JSON.stringify(cookieCart))
}