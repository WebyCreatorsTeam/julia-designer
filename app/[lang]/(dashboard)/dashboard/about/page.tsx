'use client';

import { FC, useActionState, useEffect, useRef } from 'react'
import AuthBtn from '../../_ui/FormBtn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: any = {
    message: null,
    success: null
}

const About: FC = () => {

    // const [state, formAction] = useActionState(()=>{}, initialState);
    const ref = useRef<HTMLFormElement>(null)

    // useEffect(() => {
    //     if (ref.current && state.success) {
    //         ref.current.reset();
    //     }
    // }, [state])

    return (
        <div>
            <h1>About me</h1>

            <form
                // action={formAction} 
                ref={ref}>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input type="file" id="photo" />
                </div>

                <div>
                    <label htmlFor="">Text</label>
                </div>

                <div>
                    <label htmlFor="textEn">English</label>
                    <textarea name="en" id="textEn" defaultValue="Enter English text" cols={50} rows={10}></textarea>
                </div>

                <div>
                    <label htmlFor="textHe">עברית</label>
                    <textarea name="he" id="textHe" defaultValue="הזן טקסט בעברית" cols={50} rows={10}></textarea>
                </div>

                <div>
                    <label htmlFor="textRu">Русский</label>
                    <textarea name="ru" id="textRu" defaultValue="Введите текст на Русском языке" cols={50} rows={10}></textarea>
                </div>
                <AuthBtn btnText="Submit" btnType="submit" />
            </form>
        </div>
    )
}

export default About   