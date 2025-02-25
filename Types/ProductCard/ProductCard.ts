export type ProductCard = {
    name: string,
    price: number,
    memory: string,
    image: string,
    color?: string,
    simCard?: string,
    camera?: ProductCamera,
    accumulator?: string,
}


export type ProductCamera = {
    front?: string,
    back?: string,
}