/* import React, { useContext, useState, UseEffect } from 'react'
import { ShipContext } from '../context/ShipContext'
import { Button } from '../styles/Styled'


export const ButtonMore = () => {
    const Ships = useContext(ShipContext)
    const page = useContext(ShipContext)

    const [newPage, setNewPage] = useState(page)
    const [newShipList, setNewShipList] = useState(Ships)  


    function sumPag () {

        fetchFunction().then(() => {
          setPage(page + 1)
        })
      }
  return (
    <Button onClick={() => sumPag()}>Més</Button>
  )
} */