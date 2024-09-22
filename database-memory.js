import { randomUUID } from "crypto"

export class DatabaseMemory {
    //#videos = []
    #videos = new Map()

  //estruturas de dados -> Map e Set
  //Set como se fosse um array do JS, porém não aceita valores duplicados
  //Map como se fosse um Objeto no JS, porém tem uma API mais interessante
  
  //métodos
  list(search){
    //Array.from transforma/transforma uma estrutura de dados que não é
    //um array em um array
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0]
        const data = videoArray[1]

        return {
          id,
          ...data,
        }
      })
      .filter(video => {
        if (search) {
          return video.title.includes(search)
        }

        return true
      })

  }

  //métodos
  create(video){
    //randomUUID -> gera um ID aleatório para o vídeo, lib do node Crypto
    const videoId = randomUUID()

    this.#videos.set(videoId, video)
  }

  update(id, video){
    this.#videos.set(id, video)
  }
  delete(id){
    this.#videos.delete(id)
  }
}