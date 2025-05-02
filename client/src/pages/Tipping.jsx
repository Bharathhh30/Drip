import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useState } from 'react';

export default function Tipping() {
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleTip = async () => {
    if (!publicKey || !recipient || !amount) return;

    try {
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      const recipientPubKey = new PublicKey(recipient);
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');
      setStatus(`✅ Tip sent! Signature: ${signature}`);
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send tip.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-bold">Tip a Creator</h1>
      <WalletMultiButton />

      <input
        className="p-2 rounded bg-gray-800 w-full max-w-md"
        placeholder="Creator Wallet Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />

      <input
        className="p-2 rounded bg-gray-800 w-full max-w-md"
        placeholder="Amount (SOL)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleTip}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Send Tip
      </button>

      {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
    </div>
  );
}
