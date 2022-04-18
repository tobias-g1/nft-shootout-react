import axios from 'axios';
const baseUrl = 'http://localhost:8082/'

const MarketplaceService = {
    getCollectionData: async function (collectionAddress: string, offset: number, limit: number) {
        axios.get(baseUrl + `marketplace/listed/0x943f9a17aaa6eb0586187c2093c114ad7b8f2e16?offset=0&limit=1000`)
        .then(res => {
            return res.data;
        })
    }
};

export {MarketplaceService};
