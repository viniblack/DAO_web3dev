import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x4a43D73ba37E83fCd22255887D4BAc57586071d9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cthulhu",
        description: "Esse NFT vai te dar acesso ao CthulhuDAO!",
        image: readFileSync("scripts/assets/hello.gif"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no drop!");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()