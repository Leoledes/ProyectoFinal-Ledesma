const RenderInput =({input, onChange, name}) => {
    return (
        <input type="text" onChange={onChange} name={name}>{input}</input>
    )
}

export default RenderInput