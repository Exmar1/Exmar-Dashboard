import { useState } from 'react'
import { FancyCheckbox } from '../../../components/ui/Checkbox/CustomCheckbox'

export function TableUser({ mobile = false }) {
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

  if (mobile) {
  return (
    <>
      {items.map(item => (
        <div key={item.id} className="rounded-xl dark:bg-card bg-white p-4 shadow flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full dark:bg-profile bg-purple-600 flex items-center justify-center text-white font-semibold">
              {item.avatar}
            </div>

            <div>
              <h3 className="font-semibold dark:text-white text-gray-900">{item.name}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-600 truncate max-w-[180px]">
                {item.email}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs dark:text-gray-400 text-gray-500">{item.phone}</p>
            <span className="text-[11px] dark:text-gray-500 text-gray-400">
              {item.location}
            </span>
          </div>

        </div>
      ))}
    </>
  )
}
  return (

    <div className="dark:bg-card bg-white rounded-xl shadow-md overflow-hidden w-full transition-colors duration-300">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead className="dark:text-gray-300 text-gray-600 text-xs md:text-sm dark:bg-card bg-white">
            <tr>
              <th className="px-3 md:px-6 py-3 md:py-4">
                <FancyCheckbox
                  checked={allChecked}
                  onChange={handleCheckAll}
                />
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-medium dark:text-white text-gray-900">Name</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-medium dark:text-white text-gray-900">Email</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-medium dark:text-white text-gray-900 hidden lg:table-cell">Location</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-medium dark:text-white text-gray-900 hidden md:table-cell">Phone</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-medium dark:text-white text-gray-900 hidden xl:table-cell">Signed Up</th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-sm">
            {items.map(item => (
              <tr
                key={item.id}
                className="dark:border-t border-gray-100 dark:has-[input:checked]:bg-gray-900 has-[input:checked]:bg-purple-50 dark:hover:bg-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <FancyCheckbox
                    id={item.id}
                    checked={item.checked}
                    onChange={() => handleCheckOne(item.id)}
                  />
                </td>

                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-x-2 md:gap-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full dark:bg-profile bg-purple-600 
                    flex items-center justify-center text-white font-semibold text-xs md:text-sm flex-shrink-0">
                      {item.avatar}
                    </div>
                    <span className="font-medium dark:text-white text-gray-900 truncate">
                      {item.name}
                    </span>
                  </div>
                </td>

                <td className="px-3 md:px-6 py-3 md:py-4 dark:text-white text-gray-700">
                  <span className="block truncate max-w-[150px] md:max-w-none">
                    {item.email}
                  </span>
                </td>

                <td className="px-3 md:px-6 py-3 md:py-4 dark:text-white text-gray-700 hidden lg:table-cell">
                  {item.location}
                </td>

                <td className="px-3 md:px-6 py-3 md:py-4 dark:text-white text-gray-700 hidden md:table-cell">
                  {item.phone}
                </td>

                <td className="px-3 md:px-6 py-3 md:py-4 dark:text-white text-gray-700 hidden xl:table-cell">
                  {item.signedUp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableUser