
import style from "./Heading.module.css"
export default function Heading({colortitle,noncolortitle}) {
  return (
    <div className={style.headingContainer}>
        <h1><b><span>{colortitle}</span>{noncolortitle}</b></h1>
    </div>
  )
}
