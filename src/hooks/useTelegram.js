export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  const close = () => {
    tg.close();
  };

  return {
    tg: tg,
    onClose: close,
    user: tg.initDateUnsafe?.user?.username,
  };
};
