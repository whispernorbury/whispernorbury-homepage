interface Props {
    h?: number
    w?: number
}
const Space : React.FC<Props> = (props) => {
    return (
        <div style={{width: props.w, height: props.h}}></div>
    )
}
export default Space