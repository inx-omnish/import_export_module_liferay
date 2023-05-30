import React from 'react'

const ExportComponent = ({ title, description }) => {
    return (
        <div>
            <h4>{title}</h4>
            {description}
        </div>
    )
}

export default ExportComponent