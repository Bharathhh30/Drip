import express from 'express';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import bs58 from 'bs58';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { recipient, amount } = req.body;
    console.log('Received blink request:', req.body);

    if (!recipient || !amount) {
      return res.status(400).json({ error: 'Recipient and amount are required' });
    }

    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const toPubkey = new PublicKey(recipient.trim());
    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

    const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    const transaction = new Transaction({
      recentBlockhash,
      feePayer: new PublicKey('11111111111111111111111111111111'), // placeholder for frontend signer
    }).add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey('11111111111111111111111111111111'), // dummy sender
        toPubkey,
        lamports,
      })
    );

    const serialized = transaction.serialize({ requireAllSignatures: false });
    const base58Tx = bs58.encode(serialized);

    const blinkUrl = `https://solana.com/blink?transaction=${base58Tx}`; // placeholder
    console.log('Generated blink URL:', blinkUrl);
    res.json({ blinkUrl });
  } catch (err) {
    console.error('Error generating blink:', err);
    res.status(500).json({ error: 'Server error creating blink' });
  }
});

export default router;
