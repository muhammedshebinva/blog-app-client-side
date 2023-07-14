import React from 'react'

function Post() {
  return (
    <div className="post">
    <div className="image">
      <img src="https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelimage-sideshot/thumbwhite/2badf542-4ed8-11ed-80f7-005056bbdc38;sB;twebp/porsche-thumbwhite.webp" alt="" />
      </div> <div className="texts">
      <h2>Porsche 911</h2>
      <p className="info">
        <a className="auther">shebin</a>
        <time>2023-07-14 16:45</time>
      </p>
      <p className='summary' >The Porsche 911 is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany.</p>
      </div>
    </div>
  )
}

export default Post