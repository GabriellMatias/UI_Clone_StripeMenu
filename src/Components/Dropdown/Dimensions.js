import { useCallback, useLayoutEffect, useState } from "react"


/* funcao para pegar as medidas ddos componentes de acorco com o tamanho da tela,
toda vez que a tela e reimensionada muda algumas propriedades para o conteudo peermanecer 
visivel*/
const getDimensions = element => element.getBoundingClientReact()

export function useDimensions(responsive = true) {

  const [dimensions, setDimensions] = useState(null)
  const [element, setElement] = useState(null)

  const hook = useCallback(e => setElement(e), [])

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element))
        })
      }
      updateDimensions()
      if (responsive) {
        window.addEventListener('resize', updateDimensions)
        return () => {
          window.removeEventListener('resize', updateDimensions)
        }
      }
    }

  }, [element,
    responsive, hook])

  return [hook, dimensions, element]
}