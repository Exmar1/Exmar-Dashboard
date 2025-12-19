import { useState } from 'react'
import { FancyCheckbox } from '../Checkbox/CustomCheckbox'

export function TableUser() {
  const [items, setItems] = useState([
  {
    id: 1,
    name: 'Alcides Antonio',
    email: 'alcides.antonio@devias.io',
    location: 'Madrid, Spain',
    phone: '908-691-3242',
    signedUp: 'Jun 27, 2025',
    checked: false,
    avatar: "AA"
  },
  {
    id: 2,
    name: 'Jane Cooper',
    email: 'jane.cooper@devias.io',
    location: 'Berlin, Germany',
    phone: '123-456-7890',
    signedUp: 'May 14, 2025',
    checked: false,
    avatar: "JC"
  },
  {
    id: 3,
    name: 'Ivan Perov',
    email: 'ivan@example.com',
    location: 'Moscow, Russian',
    phone: '123-456-7890',
    signedUp: 'July 10, 2024',
    checked: false,
    avatar: "IP"
  },
  {
    id: 4,
    name: 'Alexandr Panfilov',
    email: 'panfilov.io',
    location: 'Saratov, Russian',
    phone: '101-831-1890',
    signedUp: 'December 21, 2025',
    checked: false,
    avatar: "AP"
  },
  {
    id: 5,
    name: 'Maria Sidorova',
    email: 'maria@example.com',
    location: 'Chelyabinsk, Russian',
    phone: '129-346-9012',
    signedUp: 'February 30, 2023',
    checked: false,
    avatar: "MS"
  },
  {
    id: 6,
    name: 'Alexei Ivanov',
    email: 'alex@example.com',
    location: 'Novosibirsk, Russia',
    phone: '971-456-1892',
    signedUp: 'September 2, 2024',
    checked: false,
    avatar: "AI"
  },
  {
    id: 7,
    name: 'Dmitriy Kozlov',
    email: 'dmitry@example.com',
    location: 'Voronezh, Russia',
    phone: '023-718-8471',
    signedUp: 'November 30, 2025',
    checked: false,
    avatar: "DM"
  },
  {
    id: 8,
    name: 'Olga Novikova',
    email: 'olga@example.com',
    location: 'Saint Petersburg, Russia',
    phone: '234-012-0136',
    signedUp: 'May 14, 2025',
    checked: false,
    avatar: "ON"
  },
  {
    id: 9,
    name: 'Elena Smirnova',
    email: 'elena@example.com',
    location: 'Moscow, Russia',
    phone: '638-891-9127',
    signedUp: 'May 9, 2023',
    checked: false,
    avatar: "ES"
  },
])

  const allChecked = items.length > 0 && items.every(item => item.checked)

  const handleCheckAll = (e) => {
    const value = e.target.checked
    setItems(items.map(item => ({ ...item, checked: value })))
  }

  const handleCheckOne = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : item
    ))
  }

  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden w-full">
      <table className="w-full border-collapse">
        <thead className="text-gray-300 text-sm">
          <tr>
            <th className="px-6 py-4">
							<FancyCheckbox
								checked={allChecked}
								onChange={handleCheckAll}
							/>
            </th>
            <th className="px-6 py-4 text-left font-medium">Name</th>
            <th className="px-6 py-4 text-left font-medium">Email</th>
            <th className="px-6 py-4 text-left font-medium">Location</th>
            <th className="px-6 py-4 text-left font-medium">Phone</th>
            <th className="px-6 py-4 text-left font-medium">Signed Up</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {items.map(item => (
            <tr
              key={item.id}
              className="border-t has-[input:checked]:bg-gray-900 hover:bg-gray-900 transition"
            >
              <td className="px-6 py-4">
              <FancyCheckbox
								id={item.id}
								checked={item.checked}
								onChange={() => handleCheckOne(item.id)}
							/>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 -ml-10 mr-3 rounded-full bg-profile 
                  flex items-center justify-center text-white font-semibold text-sm">
                    {item.avatar}
                </div>
                  <span className="font-medium text-white">
                    {item.name}
                  </span>
                </div>
              </td>

              <td className="px-6 py-4 text-white">
								{item.email}
              </td>

              <td className="px-6 py-4 text-white">
                {item.location}
              </td>

              <td className="px-6 py-4 text-white">
                {item.phone}
              </td>

              <td className="px-6 py-4 text-white">
                {item.signedUp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableUser
