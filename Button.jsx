

export default function Button({children, onClick}){
    return<>
    
 <button onClick={onClick} className="my-6 h-[100px]">{children}</button>
 </>
}