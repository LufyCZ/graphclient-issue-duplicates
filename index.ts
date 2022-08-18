//import pairsToFetch from "./pairs.json";
import { getBuiltGraphSDK } from "./.graphclient";

async function main() {
  const sdk = getBuiltGraphSDK();
  try {
    // const { uni_pairs: pairs } = await sdk.pairs({
    //   where: { id_in: pairsToFetch.map((p) => p.toLowerCase()) },
    // });

    const { pairs } = await sdk.pairs();

    console.log(pairs?.length);
  } catch (e) {
    console.log(e);
  }
}

main();
