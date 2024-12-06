import { useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const rest = () => {
        setState(initState)
    }

    const setFormValue = (form: T) => {
        setState(form)
        // setState({
        //     ...state,
        //     ...form
        // })
    }

    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        rest,
        form: state,
        onChange,
        setFormValue
    }

}
