  private async test(){

const web3 = new Web3();
const wallet = '0x9D0C62a3227086A48189d5Ca47cE03ab78D09143';
const privateKey =process.env.privatekey;

const signinParams = {
    "address": wallet,
    "provider": "metamask",
}

const signInRes = await this.signin(signinParams);

const signature = web3.eth.accounts.sign(signInRes.arbitaryCode, privateKey);

const verifySignatureParams = {
  signature: signature.signature,
  nonce: signInRes.nonce,
}

 const token = await this.verifySignature(verifySignatureParams);
 console.log(token);

  }
