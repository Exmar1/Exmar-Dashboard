import './Checkbox.css'

export function FancyCheckbox({ id, checked, onChange }) {
  return (
    <div className="checkbox-wrapper-12">
      <div className="cbx">
        <input
          type="checkbox"
          id={`cbx-${id}`}
          checked={checked}
          onChange={onChange}
        />

        <label htmlFor={`cbx-${id}`}></label>

        <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
          <path d="M2 8.36364L6.23077 12L13 2" />
        </svg>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo-12">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 22 -7"
              mode="matrix"
              in="blur"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

