

export default function Heading({colortitle,noncolortitle}) {
  return (
    <div className={StylePropertyMap.headingContainer}>
        <h1><b><span>{colortitle}</span>{noncolortitle}</b></h1>
    </div>
  )
}
