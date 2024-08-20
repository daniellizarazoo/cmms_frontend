const Labels = ({labels,inputs,editable}) => {
    return(
        
        {labels.map((index,label)=>{
            <>
                <label>{label}</label>
                <input value={inputs[index]}></input>
            </>
        })}
)
};

export default Labels;