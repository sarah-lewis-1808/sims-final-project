import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useNavigate } from 'react-router-dom'

function Home() {
  const slice = useAppSelector((state) => state.players)
  console.log(slice)
  const [input, setInput] = useState(slice)
  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const noOfPlayers = Number(event.target.value)
    setInput(noOfPlayers)
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    // dispatch()
    // send number to db
    setInput(input)
    console.log(input)
    navigate('/start')
  }

  return (
    <div className="h-screen">
      <div className="container flex justify-center">
        <div className="window w-1/2">
          <div className="title-bar">
            <div className="title-bar-text">How To Play</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <ul>
              <li>
                Player One writes a secret whacky caption, then passes the
                device to the next player
              </li>
              <li>
                Player Two secretly draws it, then passes the device to the next
                player
              </li>
              <li>
                Player Three secretly captions the image, then passes the device
                to the next player
              </li>
              <li>
                ... and continues until all the players have made their
                contribution
              </li>
              <li>Enjoy your collective masterpiece!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white container h-1/4 w-1/2 b-10 flex justify-center rounded-lg">
        <form>
          <p>Enter the number of players</p>
          <select onChange={handleChange}>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>

          <button onClick={handleSubmit} type="submit" aria-label="submit">
            Start
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
