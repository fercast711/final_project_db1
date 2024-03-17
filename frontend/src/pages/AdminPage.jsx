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
  const [salesXagent, setSalesxAgent] = useState(false);
  const [vbuyerPurchases, setVbuyerPurchases] = useState(false);
  const [citySales, setCitySales] = useState(false);
  const [sellerSales, setSellerSales] = useState(false);
  const [featureSales, setFeatureSales] = useState(false);
  const [property_priceSales, setProperty_priceSales] = useState(false);
  const [bestSellingAgent, setBestSellingAgent] = useState(false);
  const [agentsPerformance, setAgentsPerformance] = useState(false);
  const {
    home,
    agent,
    seller,
    buyer,
    propertiesMarket,
    soldProperties,
    reports,
    binnacle
  } = useSelector(state => state.render)
  useEffect(() => {
    if (!reports) {
      setSalesxAgent(false)
      setCitySales(false)
      setVbuyerPurchases(false)
      setSellerSales(false)
      setFeatureSales(false)
      setProperty_priceSales(false)
      setBestSellingAgent(false)
      setAgentsPerformance(false)
    }
  }, [reports])
  const {
    tdAgent,
    tdSeller,
    tdBuyer,
    tdPropertyMarket,
    tdSoldProperty,
    tdReport,
    thReport,
    tdBinnacle
  } = useSelector(state => state.tdRender)

  const {
    formSellers,
    formBuyers,
    formAgents,
    formPropMarket,
    formSoldProp,
    formSellProp,
    formDelete,
    image
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
    'Address',
    'City',
    'Phone Number',
    'Bedroom Count',
    'Features',
    'Price',
    'Publication Date',
    'Agent Identity Number',
    'Seller Identity Number',
    'Image'
  ]
  const sold = [
    'Property Id',
    'Name',
    'Address',
    'City',
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
    'Image'
  ]
  return (
    <div
      className="bg-gray-600 min-h-screen"
    >

      <HeaderPages />
      {reports && (
        <div className=" flex justify-between mt-4 mx-6">
          <button
            onClick={() => {
              setSalesxAgent(true)
              setVbuyerPurchases(false)
              setCitySales(false)
              setSellerSales(false)
              setProperty_priceSales(false)
              setFeatureSales(false)
              setBestSellingAgent(false)
              setAgentsPerformance(false)
            }}
            className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per agent
          </button>
          <button
            onClick={() => {
              setSalesxAgent(false);
              setVbuyerPurchases(false);
              setCitySales(false)
              setSellerSales(true)
              setProperty_priceSales(false)
              setFeatureSales(false)
              setBestSellingAgent(false)
              setAgentsPerformance(false)
            }}
            className="text-white focus:ring-4  bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per seller
          </button>
          <button
            onClick={() => {
              setSalesxAgent(false);
              setVbuyerPurchases(true);
              setCitySales(false)
              setSellerSales(false)
              setProperty_priceSales(false)
              setFeatureSales(false)
              setBestSellingAgent(false)
              setAgentsPerformance(false)
            }}
            className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Purchases per buyer
          </button>
          <button
            onClick={() => {
              setSalesxAgent(false);
              setVbuyerPurchases(false);
              setCitySales(true)
              setSellerSales(false)
              setProperty_priceSales(false)
              setFeatureSales(false)
              setBestSellingAgent(false)
              setAgentsPerformance(false)
            }}
            className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per location
          </button>
          <button 
          onClick={() => {
            setSalesxAgent(false);
            setVbuyerPurchases(false);
            setCitySales(false)
            setSellerSales(false)
            setFeatureSales(false)
            setProperty_priceSales(true)
            setBestSellingAgent(false)
            setAgentsPerformance(false)
          }}
          className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per property price
          </button>
          <button
            onClick={() => {
              setSalesxAgent(false);
              setVbuyerPurchases(false);
              setCitySales(false)
              setSellerSales(false)
              setFeatureSales(true)
              setProperty_priceSales(false)
              setBestSellingAgent(false)
              setAgentsPerformance(false)
            }}
            className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Sales per features
          </button>
          <button 
          onClick={() => {
            setSalesxAgent(false);
            setVbuyerPurchases(false);
            setCitySales(false)
            setSellerSales(false)
            setFeatureSales(false)
            setProperty_priceSales(false)
            setBestSellingAgent(true)
            setAgentsPerformance(false)
          }}
          className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Best selling agent
          </button>
          <button 
          onClick={() => {
            setSalesxAgent(false);
            setVbuyerPurchases(false);
            setCitySales(false)
            setSellerSales(false)
            setFeatureSales(false)
            setProperty_priceSales(false)
            setBestSellingAgent(false)
            setAgentsPerformance(true)
          }}
          className="text-white focus:ring-4 bg-teal-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  hover:bg-teal-700 focus:outline-none focus:ring-teal-800">
            Agents Performance
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
      {(formAgents || formBuyers || formSellers || formPropMarket || formSoldProp || formSellProp || formDelete || image) && <Modal />}
      {salesXagent && <TableAdmin componentTh={thReport} title="Amount of sales per agent" componentTd={tdReport} isReport={true} />}
      {binnacle && <TableAdmin title="Binnacle" isReport={true} componentTd={tdBinnacle} componentTh={['Id', 'Action', 'User', 'Date', 'Time']} />}
      {vbuyerPurchases && <TableAdmin title="Amount of purchases per buyer" isReport={true} componentTd={tdReport} componentTh={thReport} />}
      {citySales && <TableAdmin title="Amount of sales per location" isReport={true} componentTd={tdReport} componentTh={thReport} />}
      {sellerSales && <TableAdmin title="Amount of sales per seller" isReport={true} componentTd={tdReport} componentTh={thReport} />}
      {featureSales && <TableAdmin title="Sales per feature" isReport={true} componentTd={tdReport} componentTh={thReport} />}
      {property_priceSales && <TableAdmin title="Sales per price" isReport={true} componentTd={tdReport} componentTh={thReport} />}
      {bestSellingAgent && <TableAdmin title="Agent who sold more properties in the year" isReport={true} componentTd={tdReport} componentTh={thReport} needYear={true}/>}
      {agentsPerformance && <TableAdmin title="Agents performance in the year" isReport={true} componentTd={tdReport} componentTh={thReport} needYear={true}/>}
    </div>
  )
}

export default AdminPage