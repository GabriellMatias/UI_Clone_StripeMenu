import React, { createContext, useCallback, useEffect, useState } from "react";

export const Context = createContext()

export function DropDownProvider({ children }) {
  const [options, setOptions] = useState([])
  const [targetId, setTargetId] = useState(null)
  const [cachedId, setCachedId] = useState(null)


  /* registrar o id do conteiner que vai aparecer, as dimensoes 
  a posicao dele, conteudo etc*/
  const registerOption = useCallback(({
    id,
    optionsDimensions,
    optionCenterX,
    wrapperContent,
    backgroundHeight
  }) => {
    setOptions(items => [
      ...items,
      {
        id,
        optionsDimensions,
        optionCenterX,
        wrapperContent,
        backgroundHeight
      }
    ])

  }, [setOptions])

  /* percorre os os items e quando o id der match ele retorna esse mesmo item com
  as novas propriedades que ele vai ter (a dimensao, local etc para o elemento 
    aparecer em tela)*/
  const updateOptionsProps = useCallback((optionId, props) => {

    setOptions(items => items.map(item => {
      if (item.id === optionId) {
        item = { ...item, ...props }

      }
      return item
    }))

  }
    , [setOptions])

  /* apenas percorre e retorna o item que tem o ID igual ao id requisitado*/
  const getOptionById = useCallback((id) =>
    options.find(item => item.id === id),
    [options])


  const deleteOptionById = useCallback((id) =>
    /* se o id for igual ao id passado como parametro ele nao retorna esse id, entao 
    exclui o elemento da lista, como esta dentro do setOption ele renderiza novamente
    sem esse elemento*/
    setOptions((items) => items.filter
      ((item) => item.id !== id)),
    [setOptions])


  useEffect(()=>{
    if(targetId !== null){
      setCachedId(targetId)
    }
  }, [targetId])

  return (
    <Context.Provider
      value={{registerOption,
      updateOptionsProps,
      getOptionById,
      deleteOptionById,
      targetId,
      cachedId,
      setCachedId,
      setTargetId,
      options,
      }}
    >

      {children}
    </Context.Provider>
  )
}