const RenderInput =({label, onChange, name, value}) => {
    return (
        <div>
        <label>{label}</label>
        <input type="text" onChange={onChange} name={name} value={value}></input>
        </div>
        
    )
}

export default RenderInput