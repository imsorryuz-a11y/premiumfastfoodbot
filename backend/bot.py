import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.utils.keyboard import InlineKeyboardBuilder
from core.config import settings
from bot_handlers.chat import router as chat_router

logging.basicConfig(level=logging.INFO)

bot = Bot(token=settings.BOT_TOKEN)
dp = Dispatcher()

@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    webapp_url = settings.WEBAPP_URL.strip()
    builder = InlineKeyboardBuilder()
    builder.row(types.InlineKeyboardButton(
        text="🍔 Menyuni ochish",
        web_app=types.WebAppInfo(url=webapp_url)
    ))
    
    await message.answer(
        "🌟 *Premium Fast Food - ga xush kelibsiz!*\n\n"
        "Eng mazali taomlar, tez yetkazib berish va zamonaviy xizmat.\n"
        "Buyurtma berish uchun quyidagi tugmani bosing va menyu bilan tanishing.",
        reply_markup=builder.as_markup(),
        parse_mode="Markdown"
    )

# Include Routers
dp.include_router(chat_router)

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
