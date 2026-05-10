from aiogram import Router, F, types
import random

router = Router()

@router.message(F.voice)
async def handle_voice_message(message: types.Message):
    # Simulated voice processing
    await message.reply_chat_action("typing")
    # In reality you would use OpenAI Whisper API here
    # file_id = message.voice.file_id ...
    await message.answer(
        "🎙 Ovozli xabaringizni eshitdim!\n\n"
        "Tizimimiz (AI) ovozingizdan 'burger' va 'cola' so'zlarini aniqladi. "
        "Iltimos, buyurtmani tasdiqlash uchun Menyuga kiring va savatchaga qo'shing."
    )

@router.message(F.text)
async def handle_ai_chat(message: types.Message):
    text = message.text.lower()
    await message.reply_chat_action("typing")
    
    # Mood ordering simulation
    if "chill" in text or "dam" in text:
        await message.answer("😎 Chill qilyapsizmi? Unda sizga eng zo'r 'Family Combo' va 'Mojito' tavsiya qilaman! Menyu orqali buyurtma bering.")
    elif "spicy" in text or "achchiq" in text:
        await message.answer("🔥 Haqiqiy olov! 'Achchiq Lavash' siz uchun tayyor. 3-darajali achchiq!")
    elif "och" in text or "hungry" in text:
        await message.answer("😴 Qorningiz juda ochmi? 'Double Cheese Burger' aynan siz uchun! 2 qavatli kotlet!")
    elif "set" in text or "kombo" in text:
        await message.answer("🍔 2 kishilik yoki oilaviy setlarimiz bor. Menyuga kirib tanlang!")
    elif "arzon" in text or "skidka" in text:
        await message.answer("💸 Hozirgi kunda 'Chicken Burger' va 'Mini Lavash' eng arzon taomlarimiz qatoriga kiradi.")
    else:
        responses = [
            "Hmm, judayam zo'r tanlov bo'lishi mumkin! Lekin aniqroq buyurtma berish uchun Menyuni oching.",
            "Tushundim, lekin hozircha AI tizimimiz faqat tavsiya beradi. Menyuni ochib buyurtmani rasmiylashtiring.",
            "Sizning didingizga qoyil! Tez orada bu taomni ham qo'shamiz. Ungacha menyudagi boshqa mazzali taomlarni tatib ko'ring."
        ]
        await message.answer(random.choice(responses))
