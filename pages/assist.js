import { useState } from "react";
export default function Assist () {
    const [text, setText] = useState(null);
    function handleChange (e){
        setText(e.target.value)
    }
    return (
        <>
            <input
                type="search"
                value={text}
                onChange={handleChange}
            />
        </>
    )
}