import React from 'react'
import Photo from './frame'

class GithubMarkdown extends React.Component {
  
  constructor () {
    super()
    this.state = {
      loading: true,
      content: null
    }
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div ref={el => (this._shim = el)} className='shim' onClick={(e) => this.dismiss(e)}>
        <div ref={el => (this._photoWrap = el)} className='photo'>
          <Photo id={this.props.id} />
        </div>
        <style jsx>{`
          .shim {
            position: fixed;
            background: rgba(0,0,0,.65);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }

          .photo {
            position: absolute;
            top: 50%;
            width: 100%;
            margin-top: -250px;
          }
        `}</style>
      </div>
    )
  }
}

export default GithubMarkdown