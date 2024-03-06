import PropTypes from 'prop-types'

const TableAdmin = ({ componentTr, title, componentTd }) => {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mx-20">
            <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right  text-white bg-gray-800">
                    {title}
                </caption>
                <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                    <tr>
                        {
                            componentTr.map((tr, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {tr}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr className=" border-b bg-gray-800 border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium className text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr> */}
                    {
                        componentTd.map((tr, index) => (
                            <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                                {
                                    Object.keys(tr).map((keyTd) => (
                                        <td key={keyTd} className="px-6 py-4">
                                            {tr[keyTd]}
                                        </td>
                                    ))
                                }
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium className text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

TableAdmin.propTypes = {
    componentTr: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    componentTd: PropTypes.array.isRequired
}

export default TableAdmin