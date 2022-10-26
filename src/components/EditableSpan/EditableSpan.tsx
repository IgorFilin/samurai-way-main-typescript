import React, {ChangeEvent, useEffect, useState} from 'react';


type EditableSpanTypeProps = {
    title: string
    changeTitle: (t: string) => void
    disable: boolean
}

export const EditableSpan = React.memo((props: EditableSpanTypeProps) => {


    const [editMode, setEditMode] = useState(false)
    const [valueInput, valueInputTitle] = useState(props.title)
    const changeEditModeOnDoubleClick = () => {
        setEditMode(true)
    }
    const changeEditModeOnBlur = () => {
        if (!props.disable) {
            setEditMode(false)
            props.changeTitle(valueInput)
        }

    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!props.disable) {
            valueInputTitle(e.currentTarget.value)
        }
    }

    useEffect(() => {
        return () => {
            if (props.disable) {
                valueInputTitle('')
            } else {
                valueInputTitle(props.title)
            }

        }
    })
    return (
        editMode ?
            <input value={valueInput} onChange={onChangeHandler} onBlur={changeEditModeOnBlur}
                   autoFocus/> :
            <span style={{fontSize: '15px'}} onDoubleClick={!props.disable ? changeEditModeOnDoubleClick : () => {
            }}>{props.title}</span>
    );
});

