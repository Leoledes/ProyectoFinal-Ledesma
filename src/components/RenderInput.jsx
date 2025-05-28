const RenderInput =({input, onChange}) => {
    return (
        <input type="text" onChange={onChange}>{input}</input>
    )
}

export default RenderInput