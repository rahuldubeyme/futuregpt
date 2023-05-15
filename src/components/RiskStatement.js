import React from "react";
import { Component } from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import DocumentMeta from "react-document-meta";

class RiskStatement extends Component {
    render() {
    const meta = {
      title: '',
      description: "",
      canonical: '',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    };
    return (
      <div>
        <DocumentMeta {...meta}>
          <div>
            <Nav />
            <div className="privacy_policy">
              <div className="container">
                <h2>Avonex Exchange Risk Statement</h2>
                <p>
                  Avonex Exchange RL (AvonexExchange EXCHANGE or we or us)
                  operates an exchange for trading digital assets including
                  cryptocurrencies and tokens (together, Coins)
                  at https://Avonexexchangeexchange.in/ (the Platform).
                </p>
                <p>
                  AvonexExchange EXCHANGE does not permit the trading of Coins
                  which are "financial products" for India, India law purposes
                  (also called "securities" outside, India) on the Platform.
                </p>
                <h3>Important warning</h3>

                <p>
                  1. Buying and selling Coins is highly speculative and carries
                  high risk. You may lose some or all of the money or Coins
                  placed on the Platform. You use the Platform at your own risk.
                </p>
                <p>
                  2. You must carefully read all available information,
                  including the risks set out below, and consider your personal
                  financial circumstances before trading on the Platform. If you
                  are unsure about any aspect of trading in Coins, you should
                  seek independent advice before using the Platform.
                </p>
                <h3>Support requests and complaints</h3>

                <p>
                  3. We offer a free complaints and IT support service in
                  respect of the Platform. We seek to acknowledge customer
                  requests and complaints within three business days and to
                  resolve (where possible) complaints within 5 to 15 business
                  days.
                </p>
                <p>
                  4. During periods of high trading on the Platform, however, it
                  may take us longer to respond to your request or complaint.
                  This can occur from time to time because of the extreme
                  volatility and sensitivity to market sentiment of Coin
                  markets. For this reason, we do not guarantee our response
                  times. We believe it is better that you understand upfront
                  that there may be delays from time to time.
                </p>
                <h3>Risks of using the Platform</h3>

                <b>Market risks</b>
                <p>
                  6. Coins can experience extreme price volatility. The exchange
                  price of a Coin may change significantly and you may be unable
                  to transact Coins or money at the anticipated rate or price.
                  Changes in prices may result in large changes in value and/or
                  losses of Coins or money.
                </p>
                <p>
                  7. Past performance is not a reliable indicator or guarantee
                  of future performance. Coin prices go down as well as up.
                </p>
                <p>
                  8. The value of Coins can be affected by many other factors
                  including (but not limited to) future sales or further issues
                  (e.g. airdrops), negative publicity involving the Coin issuer
                  or project, failure to deliver projects or failure of projects
                  to meet expectations, failure of or material damage to the
                  underlying network (including through cyber-attack), fraud or
                  theft by or affecting the Coin issuer or project, competition
                  in the issuer's market, technical failures or setbacks, or
                  general global and economic conditions and sentiments. You
                  must research Coins that you are interested in carefully.
                  Their whitepapers or other offer materials may list further
                  risks which are relevant to holding them.
                </p>
                <h3>Processing of transactions</h3>
                <p>
                  9. There is a risk that transactions cannot be settled or are
                  delayed at settlement, that processing times differ for each
                  transaction, or a transaction may be incorrectly processed.
                  These risks can result from, amongst other issues:
                  <br />
                  a. user error when providing transaction details (such as
                  providing an incorrect wallet address or other information)
                  <br />
                  b. an error in delivering the consideration for a transaction
                  <br />
                  c. increases in market volume or Platform volume
                  <br />
                  d. a failure in the Platform processing systems or a failure
                  in an underlying network or software (see further information
                  below at System risk)
                </p>
                <p>
                  10. It may not be possible to reverse a digital currency
                  transaction once processing has commenced.
                </p>
                <h3>System risks</h3>
                <p>
                  11. All Coins, including transactions involving those Coins,
                  rely on the operation of underlying networks and software. As
                  this is developing technology, the networks and software may
                  be subject to technical weaknesses, bugs, system failures, and
                  hacks by external parties. These failures may affect the
                  Platform network and software itself or may relate to a Coin's
                  underlying network and software (including, but not limited
                  to, a weakness in the underlying blockchain). You should
                  understand the operation of the technology underlying a
                  digital currency and the Platform to understand these risks.
                </p>
                <p>
                  12. For example, Coins can be subject to 51% attacks. This
                  refers to an attack on a blockchain by a group of miners
                  controlling more than 50% of the network's mining hash rate,
                  or computing power, or otherwise controlling the blockchain's
                  consensus mechanism in an illegitimate manner. If this
                  happens, the attackers may be able to control new
                  transactions, halt payments or transfer and reverse completed
                  transactions. AvonexExchange exchange does not control the
                  blockchain or network for Coins and cannot stop this. If we
                  become aware of an attack, we will assess the best response on
                  a case-by-case basis, which may include suspending or removing
                  Coins from our exchange.
                </p>
                <p>
                  13. Hackers are sophisticated, and you may also be targeted by
                  'phishing' attacks or other scams. Phishing includes where
                  third parties masquerade as a legitimate AvonexExchange
                  exchange site, social media account, telephone support number
                  or App in order to steal your credentials. You should only
                  access the AvonexExchange exchange Web site through its
                  official website (https://Avonexexchangeexchange.org/). Never
                  click on a link or download an App from a third party. We
                  strongly recommend that you enable two factor authentication
                  for all transactions to prevent unauthorised account use. Your
                  AvonexExchange EXCHANGE passwords should be unique to Avonex
                  Exchange EXCHANGE and should never be stored insecurely on any
                  personal device. If you are a victim of such an attack or
                  scam, the hacker may be able to get you to send them money or
                  Coins inadvertently or they may steal money or Coins.
                </p>
                <p>
                  14. Your ability to use the Platform, buy or sell Coins, or
                  withdraw money, may be affected by these technical failures or
                  attacks.
                </p>
                <p>
                  15. We will make reasonable efforts to notify users where the
                  Platform, or a particular Coin traded on the Platform, has
                  been subject to a technical weakness, bug, system failure, or
                  hack.
                </p>
                <p>
                  16. We may also need to do maintenance or upgrades on the
                  Platform from time to time which could affect your ability to
                  use the Platform, buy or sell Coins, or withdraw money.
                </p>
                <h3>Security of private keys and wallets</h3>
                <p>
                  17. You must be careful when choosing a wallet to store or
                  transmit your private keys relating to your Coins. If your
                  wallet is hacked or another person learns your private key/s,
                  you may lose some or all of your Coins. You should not give
                  your private key or wallet passcode to any other person.
                </p>
                <p>
                  18. If you forget or lose your passcode to your wallet/s,
                  AvonexExchange EXCHANGE has no ability to provide a back-up
                  or details of your private key or passcode, given the
                  decentralised nature of Coins. This may result in the loss of
                  any Coins stored in that wallet.
                </p>
                <p>
                  19. You should use the highest level of security offered for
                  any wallet that you choose.
                </p>
                <p>20. ---</p>
                <p>21. ---</p>
                <h3>Cyber security generally</h3>

                <p>
                  The transmission of information over the internet (including
                  to or from the Platform) is not completely secure or error
                  free. You should stop transacting when it is clear there has
                  been a breach of security or a system failure that poses a
                  risk to security exists (such as malware, ransomware or
                  phishing).
                </p>
                <h3>Regulatory risks</h3>
                <p>
                  22. There is currently no specific regulation of Coins and
                  Coin exchanges in India, India, and it is likely that the
                  rules may evolve rapidly. There is also limited guidance on
                  how existing laws and regulations can be applied to Coins and
                  Coin exchanges. New or changing laws and regulations, or
                  interpretations of existing laws and regulations, may
                  adversely impact or significantly change the trading of Coins
                  and the Platform.
                </p>
                <p>
                  23. If we become aware that a Coin which we list is a
                  financial product under India, India law, we may de-list it.
                  We may also de-list Coins for other reasons. Delisting may
                  mean that if you hold the Coin there may not be a ready market
                  on which you can sell it, especially if it is not listed on
                  another exchange. You should not assume that any Coin will
                  always be listed by us.
                </p>
                <p>
                  24. Users are responsible for ensuring they comply with all
                  laws regarding the trading of digital currencies applicable in
                  any relevant country for them when using the Platform.
                </p>
                <p>
                  25. Equally, we have no control over whether Coin issuers have
                  complied with laws in any relevant jurisdictions. Any action
                  taken by regulatory authorities or other persons against a
                  Coin issuer or any other person in relation to a Coin may
                  prevent you from selling Coins or otherwise cause a loss in
                  value.
                </p>
                <p>
                  26. Regulatory issues can also cause problems with other
                  important relationships, such as our or your relationship with
                  banks. Many banks currently are shutting accounts which are
                  linked to Coins or dealing in Coins. This has affected our
                  ability to provide certain products.
                </p>
                <p>
                  27. If you are outside of India, you may be subject (or we may
                  become subject) to laws or regulations of other countries
                  which could prevent you from using the Platform or cause us to
                  change the availability of the Platform in your country or how
                  we operate or offer the Platform.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </DocumentMeta>
      </div>
    );
  }
}

export default RiskStatement;
