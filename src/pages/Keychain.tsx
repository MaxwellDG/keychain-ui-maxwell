import React, {FC, ReactElement} from "react";
import {Button, Input } from 'react-daisyui';



export const Keychain : FC<any> = () : ReactElement => {

   return (
      <div style={{padding: 16}}>
          <h1>Keychain</h1>
          <p className={"test-sm"}>
              A Kaizen Corps Product
          </p>
          <br/>
          <p>
          Keychain is a way to link multiple wallets to a single on-chain account. So, for example, link your
          hardware wallet as a Key to your Keychain, and view your NFTs here.
          </p>
          <br/>
          <div>
              <div className={"flex-row"}>
                  How it works
              </div>
              <div className={"flex-row"}>
                          Step 1: Create your Keychain by choosing a playername (will need to be unique) and clicking 'Create Keychain'.
                          This will create your Keychain account with your playername and add your Backpack wallet as a key.
              </div>
              <div className={"flex-row"}>
                          Step 2: Add an existing wallet address. This will add an unverified wallet to your Keychain as a key.
                          **Note: A wallet can only belong to a single Keychain at a time.
              </div>
              <div className={"flex-row"}>
                          Step 3: Visit https://keychain.kaizencorps.com/verify, connect with your added wallet and hit verify. This will
                          prove that you oAt this point
                          you can come back to this app and see your
              </div>
          </div>
          <br/>
          <p>
            Select a playername for your Keychain
          </p>
          <Input></Input>
          <Button>Create Keychain</Button>
          {/*<div className="flex flex-row">*/}
          {/*    <div className="basis-1/4">01</div>*/}
          {/*    <div className="basis-1/4">02</div>*/}
          {/*    <div className="basis-1/2">03</div>*/}
          {/*</div>*/}
      </div>
   );
}
