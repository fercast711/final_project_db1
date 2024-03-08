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
  const {
    home,
    agent,
    seller,
    buyer,
    propertiesMarket,
    soldProperties
  } = useSelector(state => state.render)

  const {
    tdAgent,
    tdSeller,
    tdBuyer,
    tdProperty_market,
    tdSold_property
  } = useSelector(state => state.tdRender)

  const {
    formSellers,
    formBuyers,
    formAgents
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
      {home && (<div className=" flex justify-center items-center h-[70vh]">
        <h1 className=" text-white font-extrabold font-sans text-7xl text-center max-w-5xl mt-11">
          {text.substring(0, index)}
          <span className={reverse && index === 0 ? '' : 'blinker'}>|</span>
        </h1>
      </div>)}
      {agent && <TableAdmin componentTh={agentTh} title="Agents" componentTd={tdAgent} />}
      {seller && <TableAdmin componentTh={clientTh} title="Sellers" componentTd={tdSeller} />}
      {buyer && <TableAdmin componentTh={clientTh} title="Buyers" componentTd={tdBuyer} />}
      {propertiesMarket && <TableAdmin componentTh={market} title="Properties On The Market" componentTd={tdProperty_market} />}
      {soldProperties && <TableAdmin componentTh={sold} title="Sold Properties" componentTd={tdSold_property} />}
      {(formAgents || formBuyers || formSellers) && <Modal/>}
    </div>
  )
}

export default AdminPage