interface props {
  color: string,
  height?: number,
  width?: number,
}

export default (props: props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={props.height ?? 24} width={props.width ?? 24} viewBox="0 0 24 24">
    <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill={props.color} />
  </svg>
)

