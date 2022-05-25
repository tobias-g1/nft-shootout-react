import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./filter-options.scss";
import axios from 'axios';

function FilterOptionsComponent(props: any) {

  const location = useLocation();

  async function search() {
    await axios.get(process.env.REACT_APP_API_BASE_URL + `marketplace/listed/0x943f9a17aaa6eb0586187c2093c114ad7b8f2e16?offset=0&limit=1000`)
    .then(res => {
      props.sendData(res.data)
    })
  }

  useEffect(() => {
    search()
  }, [location]);
  
  return (
    <div className="filter-options-wrapper"></div>
  );
}

export default FilterOptionsComponent;
