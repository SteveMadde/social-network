import React, {useRef} from "react";
import s from './Settings.module.css'




export let Settings = () => {
    let ref = useRef<HTMLDivElement>(null)

   /* let [background, setBackground] = useState(true)*/
    let ChangeColor = () => {
        if( !ref.current ) {
            return;
        }
        ref.current.classList.toggle(`${s.active}`)
   /*     setBackground(!background)*/
    }
    return (
        <div className={s.fullBackground} ref={ref}>
            <div className={s.settings}>
                <h3>Settings</h3>
            </div>
            <button onClick={ChangeColor} className={s.button}>Change Color</button>
        </div>
    )
};
