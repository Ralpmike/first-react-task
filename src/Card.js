import React from 'react'

const Card = () => {
  const inputValues = [
    {
      id: 1,
      title: "Royal Caribean to use Starlink internet",
      description: "After SpaceX announced its Starlink Maritime service last month, it was only a matter of time before some household name in...",
      src: "https://media.istockphoto.com/id/1269213036/photo/boats.jpg?s=612x612&w=0&k=20&c=hAUarNi66Z_4QoWjswZ-pR5e88CdjNywz-1StSY5oWs=",
      alt: "Yacht"
    }
  ];


  return (
    <div className='card'>
      {inputValues ? inputValues.map((data) => {
        const { id, title, description, src } = data;
        return (
          <div key={id} className='content'>
            <img src={src} alt="yact" />
            <h3>{title}</h3>
            <p>{description}</p>

            <button className='btn'>Read Article</button>
          </div>
        )

      }
      ) : (<p>Loading......</p>)}
    </div>
  )
}

export default Card