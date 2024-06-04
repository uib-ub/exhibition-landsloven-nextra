/**
 * Map throup the colors in the tailwind.config.js and return a components that shows all the colors and their wieghts
 * @param {Object} colors - The colors object from the tailwind.config.js
 * @returns {JSX.Element} - A component that shows all the colors and their wieghts
 */

export const Colors = ({ colors }) => {
  return (
    <div className="grid grid-cols-1 gap-4 my-10">
      {Object.entries(colors).map(([color, value]) => (
        <div key={color}>
          <h3 className='text-xl font-bold'>{color}</h3>
          <div className="flex items-center justify-between ">
            {Object.entries(value).map(([weight, hex]) => (
              <div key={weight} className="flex flex-col items-center">
                <div className="w-12 h-12" style={{ backgroundColor: hex }}></div>
                <div>{weight}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Colors