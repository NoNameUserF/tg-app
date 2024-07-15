export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  const close = () => {
    tg.close();
  };

  const toggle = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg: tg,
    onToggle: toggle,
    onClose: close,
    user: tg.initDataUnsafe?.user?.username,
  };
};
