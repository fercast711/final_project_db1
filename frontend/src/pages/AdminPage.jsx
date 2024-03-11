import { useEffect, useState } from "react";
import HeaderPages from "../components/HeaderPages"
import { useSelector } from "react-redux";
import TableAdmin from "../components/components_Admin/TableAdmin";
import Modal from "../components/Modal";

const AdminPage = () => {
  const speed = 100;
  const text = 'Welcome to Databases manager!'
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  // const [salesXagent, setSalesXagent] = useState(false);
  const {
    home,
    agent,
    seller,
    buyer,
    propertiesMarket,
    soldProperties,
    reports
  } = useSelector(state => state.render)
  
  const {
    tdAgent,
    tdSeller,
    tdBuyer,
    tdPropertyMarket,
    tdSoldProperty
  } = useSelector(state => state.tdRender)

  const {
    formSellers,
    formBuyers,
    formAgents,
    formPropMarket,
    formSoldProp,
    formSellProp,
    formDelete
  } = useSelector(state => state.formRender)

  useEffect(() => {
    if (index === text.length && !reverse) {
      setTimeout(() => setReverse(true), 1000);
    }

    if (index === 0 && reverse) {
      setReverse(false);
    }

    const timeout = setTimeout(() => {
      setIndex((currentIndex) => currentIndex + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, reverse, speed]);
  const clientTh = [
    'Identity Number',
    'Name',
    'Address',
    'Phone Number',
  ]
  const agentTh = [
    'Identity Number',
    'Name',
    'Address',
    'Phone Number',
    'Office Phone'
  ]
  const market = [
    'Property Id',
    'Name',
    'City',
    'Address',
    'Phone Number',
    'Bedroom Count',
    'Features',
    'Price',
    'Publication Date',
    'Agent Identity Number',
    'Seller Identity Number',
  ]
  const sold = [
    'Property Id',
    'Name',
    'City',
    'Address',
    'Phone Number',
    'Bedroom Count',
    'Features',
    'Price',
    'Sale Price',
    'Publication Date',
    'Sale Date',
    'Agent Identity Number',
    'Seller Identity Number',
    'Buyer Identity Number',
    'Sale Commission',
  ]
  return (
    <div
      className="bg-gray-600 min-h-screen"
    >

      <HeaderPages />
      {reports && (
        <div className=" flex justify-between mt-4 mx-6">
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per agent
          </button>
          <button className="text-white focus:ring-4  bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
          Sales per seller
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
          Purchases per buyer
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
          Sales per location
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
          Sales per property price
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
          Sales per features
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Hola
          </button>
          <button className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Hola
          </button>
        </div>
      )}
      {home && (<div className=" flex justify-center items-center h-[70vh]">
        <h1 className=" text-white font-extrabold font-sans text-7xl text-center max-w-5xl mt-11">
          {text.substring(0, index)}
          <span className={reverse && index === 0 ? '' : 'blinker'}>|</span>
        </h1>
      </div>)}
      {agent && <TableAdmin componentTh={agentTh} title="Agents" componentTd={tdAgent} />}
      {seller && <TableAdmin componentTh={clientTh} title="Sellers" componentTd={tdSeller} />}
      {buyer && <TableAdmin componentTh={clientTh} title="Buyers" componentTd={tdBuyer} />}
      {propertiesMarket && <TableAdmin componentTh={market} title="Properties On The Market" componentTd={tdPropertyMarket} />}
      {soldProperties && <TableAdmin componentTh={sold} title="Sold Properties" componentTd={tdSoldProperty} />}
      {(formAgents || formBuyers || formSellers || formPropMarket || formSoldProp || formSellProp || formDelete) && <Modal/>}
    </div>
  )
}

export default AdminPage