import React, {useEffect, useState} from "react";


const WriteSome = () => {
    const [editing, setEditing] = useState(false);
    const [textWrite, setTextWrite] = useState("");
    const [sendSome, setSendSome] = useState(false);

    const OpenWhiteBoard = () => {
        (editing ? setEditing(false) : setEditing(true));
        }    
    
    const saveWriting = (event) => {
        event.preventDefault();
        setSendSome(true);

    }
    
    const onChange = async (event) => {
        await setTextWrite(event.target.value);
        console.log(textWrite);
    }

    const delWriting = (event) => {
        event.target.value
    }

    useEffect (() => {
        setSendSome(false);
    }, []);

    return(
        <div>
            <input type="button" value="글작성" onClick={OpenWhiteBoard}/>
            <>
            <form>
                <div>
                    {editing ? (
                        <>
                            <textarea width="500" onChange={onChange}></textarea>
                            <button type="submit" onClick={saveWriting}>글 저장</button>
                            <button type="submit" onClick={delWriting}>글 삭제</button>
                        </>):(
                        <>
                            <h1>write some</h1>
                            <h1>글 작성해주세요</h1>
                        </>)
                    }
                </div>
            </form>
            <div>
                {sendSome ? <h4>{textWrite}</h4> : <h4>not save yet</h4>}
            </div>
            </>
        </div>
    )

}


export default WriteSome;