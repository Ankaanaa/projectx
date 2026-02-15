import '../style/button.scss'

interface props {
  link: string
  isBlackFon: boolean
  widthButton: string
  text: string
  height: string
}
export const Button = ({
  link,
  isBlackFon,
  widthButton,
  text,
  height,
}: props) => {
  return (
    <button
      className={`${isBlackFon ? 'button__black' : 'button__white'}`}
      style={{
        width: widthButton,
        height: height,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '15px',
        fontSize: 16,
      }}
    >
      {text}
    </button>
  )
}
