import { memo } from "react"
export const Small = memo(({value}) => {
    console.log("me renderize :)")
  return (
    <small>{value}</small>
  )
})

