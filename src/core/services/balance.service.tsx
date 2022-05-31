import axios from "axios";

class BalanceService {

    price = 0;

    async getShooPrice() {
        await axios.get(process.env.REACT_APP_API_BASE_URL + `price/current`)
          .then(res => {
            return this.price = res.data.usd;
          })
      }
};

export default BalanceService;
