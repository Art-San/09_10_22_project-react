import React from 'react'

const Episode = (props) => {
    const { name, airDate, Episode} = props
  return (
    <div className="col-4 mb-2">
        <div className="card" style={{ height: '100%' }}>
            <div className="card-body">
                <h5 className="card-title">
                    {name} {Episode}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted bg-warning">
                    {airDate}
                </h6>
            </div>
        </div>
    </div>
   
  )
}

export default Episode