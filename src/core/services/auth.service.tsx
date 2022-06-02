import NotificationService from "./notification.service";

const AuthService = {
    async checkNetwork() {
        if (window.ethereum) {
            try {
              // check if the chain to connect to is installed
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
              });
            } catch (error) {
              // This error code indicates that the chain has not been added to MetaMask
              // if it is not, then install it into the user MetaMask
              if (error.code === 4902) {
                try {
                  await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: '0x61',
                        rpcUrl: process.env.REACT_APP_RPC_URL
                      },
                    ],
                  });
                } catch (addError) {
                  console.error(addError);
                }
              }
              console.error(error);
            }
          } else {
            window.open("https://metamask.app.link/dapp/nft-shootout-dev.herokuapp.com/", "_blank");
            NotificationService.sendNotification('error', 'Error', "Metamask not detected");
          } 
        }
};

export default AuthService;
