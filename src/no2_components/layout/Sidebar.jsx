import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <div>
            <div>
                <Link to = "/">Home</Link>
            </div>
            <div>
                <Link to = "/Todo">할일</Link>
            </div>
            <div>
                <Link to = "/Employee">고용인 정보</Link>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
