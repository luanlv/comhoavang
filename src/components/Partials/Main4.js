import React from 'react'

const Main = ({post}) => {
    return (
      <div id="colContent">
        <div className="headno">
          <h1 className="title text-uppercase">
            <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews">Tin giải trí</span></h1>
        </div>

        <div className="wrapper-text">
          <h2>{post.title}</h2>
          <div className="post-body" dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      </div>
    )
}

export { Main as default }
