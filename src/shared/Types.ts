export type Post ={
    id: string,
    title: string,
    description: string,
    fullText: string,
    comments: Commentary[]
}
export type Commentary ={
    text: string,
    date:string
}

