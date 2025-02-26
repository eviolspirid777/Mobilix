export type ProductCard = {
    name: string,
    price: number,
    memory: string,
    images: string[],
    color?: string,
    simCard?: string,
    camera?: ProductCamera,
    accumulator?: string,
}


export type ProductCamera = {
    front?: string,
    back?: string,
}