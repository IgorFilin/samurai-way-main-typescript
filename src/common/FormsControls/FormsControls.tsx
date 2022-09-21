import React from "react";
import classes from './FormsControls.module.css'


const FormControl = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={showError ? classes.error : classes.formControl}>
            {props.children}
            {showError && <div className={classes.divError}>{meta.error}</div>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props} ><textarea {...input}{...restProps}></textarea></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props} ><input {...input} {...restProps}></input></FormControl>
    )
}