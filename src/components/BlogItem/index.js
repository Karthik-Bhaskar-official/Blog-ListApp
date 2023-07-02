// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {name} = props
  return (
    <li>
      <div className="list-para">
        <h1 className="h1">{name.title}</h1>
        <p className="p">{name.publishedDate}</p>
      </div>
      <p className="p">{name.description}</p>
    </li>
  )
}

export default BlogItem
