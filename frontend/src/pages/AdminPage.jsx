import { useEffect, useState } from "react";
import HeaderPages from "../components/HeaderPages"
import { useSelector } from "react-redux";
import TableAdmin from "../components/components_Admin/TableAdmin";

const AdminPage = () => {
  const speed = 100;
  const text = 'Welcome to Databases manager!'
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const {
    home,
    // agent,
    seller,
    buyer,
    // propertiesMarket,
    // soldProperties
  } = useSelector(state => state.render)

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
  // const agentsTr = [
  //   'Identity Number',
  //   'Name',
  //   'Address',
  //   'Phone Number',
  //   'Office Phone'
  // ]
  const clientTr = [
    'Identity Number',
    'Name',
    'Address',
    'Phone Number',
  ]
  const buyerRobertBlack = [{
    IdentityNumber: '7890123456789',
    Name: 'Robert Black',
    Address: '404 Maple St, Cityvillage',
    PhoneNumber: 78901234
  },
  {
    IdentityNumber: '7890123456788',
    Name: 'Robert Black',
    Address: '404 Maple St, Cityvillage',
    PhoneNumber: 78901234
  }
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
      {/* { agent && <TableAdmin componentTr={agentsTr} title="Agents" />} */}
      { seller && <TableAdmin componentTr={clientTr} title="Sellers" componentTd={buyerRobertBlack}/>}
      { buyer && <TableAdmin componentTr={clientTr} title="Buyers" componentTd={buyerRobertBlack}/>}
      {/* { propertiesMarket && <TableAdmin/>}
      { soldProperties && <TableAdmin/>} */}
    </div>
  )
}

export default AdminPage