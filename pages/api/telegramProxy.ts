import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, name, wishes, itemName } = req.body;
  const botToken = "7072850601:AAH2MhtYa3SzxfoxDYt4xtAa2FOGb_pHlf4"; // Замените на токен вашего бота
  const chatIds = ["1175000586", "50466403", "1460797386"]; // Добавьте ID вашего чата

  const message = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nПожелания: ${wishes}\nНазвание товара: ${itemName}`;

  try {
    chatIds.forEach(async (chatId) => {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
    })
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    res.status(500).json({ success: false });
  }
}