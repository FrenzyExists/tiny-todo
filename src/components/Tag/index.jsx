import './index.css';

export default function Tag({removeTagFunction, color, text, id}) {

  const r = () => {
    removeTagFunction(id)
  }
  return (
    <div className={`${color} tag`} key={id} >
        <span className="text-tag">{text}</span>
        <span onClick={r} className="close-tag">&times;</span>
    </div>
  )
}
