# 💧 Solana Tipping & Blink Integration

This project enables users to send **Solana tips** via **Blink links**, allowing seamless transaction signing on the Solana blockchain. It leverages **Solana Web3.js** for transaction creation and **Solana Blink** for simplified signing.

---

## 🗂 Project Structure

### 🔹 Frontend

- Built with **React** and **Solana Wallet Adapter** for seamless wallet integration (Phantom, Sollet, etc.).
- Provides an intuitive interface to **send tips** to other Solana wallets.
- Uses **Solana Blink** to generate transaction URLs for simple and secure signing.

### 🔹 Backend

- Developed using **Express.js** and **@solana/web3.js**.
- Generates Solana transactions and creates Blink-compatible URLs.
- Enables tipping to any valid Solana wallet address.

---

## 📦 Requirements

### Frontend

- [Node.js](https://nodejs.org/)
- React
- [`@solana/wallet-adapter-react`](https://www.npmjs.com/package/@solana/wallet-adapter-react)
- [`@solana/wallet-adapter-react-ui`](https://www.npmjs.com/package/@solana/wallet-adapter-react-ui)

### Backend

- [Node.js](https://nodejs.org/)
- Express
- [`@solana/web3.js`](https://www.npmjs.com/package/@solana/web3.js)
- [`bs58`](https://www.npmjs.com/package/bs58) for encoding serialized transactions

---

## 🔗 Links

- **Frontend Repository:** [https://github.com/Bharathhh30/Solana-Hackathon](https://github.com/Bharathhh30/Solana-Hackathon)
- **Live App:** [https://drip-one.vercel.app/](https://drip-one.vercel.app/)
