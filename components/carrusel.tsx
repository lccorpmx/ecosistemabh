import { Chevronleft } from "react-father";

export default function Carrusel({ children: slides }){
    return(
        <div className="overflow-hidden relative">
            <div className="flex">{slides}</div>
            <div>
                <button>
                    <Chevronleft />
                </button>
            </div>
        </div>
    )
}