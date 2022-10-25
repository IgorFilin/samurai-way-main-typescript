import React, {ChangeEvent, useEffect, useState} from 'react';


type EditableSpanTypeProps = {
    title: string
    changeTitle: (t: string) => void
    disable: boolean
}

export const EditableSpan = React.memo((props: EditableSpanTypeProps) => {


    const [editMode, setEditMode] = useState(false)
    const [valueInput, valueInputTitle] = useState(props.title)
    console.log(valueInput)
    const changeEditModeOnDoubleClick = () => {
        setEditMode(true)
    }
    const changeEditModeOnBlur = () => {
        setEditMode(false)
        props.changeTitle(valueInput)
    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        valueInputTitle(e.currentTarget.value)
    }


    return (
        editMode && !props.disable ?
            <input value={valueInput} onChange={onChangeHandler} onBlur={changeEditModeOnBlur}
                   autoFocus/> :
            <span style={{fontSize: '15px'}} onDoubleClick={changeEditModeOnDoubleClick}>{props.title}</span>
    );
});

