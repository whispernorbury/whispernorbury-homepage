interface Props {
    h?: number | string
    w?: number | string
}
const Space : React.FC<Props> = (props) => {
    const style: React.CSSProperties= {
        width: props.w,
        height: props.h,
    }
    return (
        <div style={style}></div>
    )
}
export default Space