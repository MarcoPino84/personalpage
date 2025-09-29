


export default function TextDisplay({title, text,className}){

    return <div className={`${className || ""} `}>
        <h1 >{title}</h1>
      {Array.isArray(text) ? (
        text.map((item, i) => <div key={i}>{item}</div>)  // se è array, renderizza ogni item
      ) : (
        <p>{text}</p> // fallback se è stringa
      )}
    </div>
    
}