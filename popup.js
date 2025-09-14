document.addEventListener("DOMContentLoaded", () => {
  const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("botao");

  const initialText = 'Olá, mundo!';
  const changedText = 'Bem-vindo!';
  const initialBtnLabel = 'Diga "olá você também"';
  const revertBtnLabel = 'Voltar';

  let ativo = false;
  mensagem.textContent = initialText;
  botao.setAttribute('aria-pressed', 'false');
  botao.innerHTML = initialBtnLabel.replace(/"/g, "&quot;");

  botao.addEventListener("click", () => {
    ativo = !ativo;

    if (ativo) {
      mensagem.textContent = changedText;
      botao.classList.add("ativo");
      botao.setAttribute('aria-pressed', 'true');
      botao.textContent = revertBtnLabel;
    } else {
      mensagem.textContent = initialText;
      botao.classList.remove("ativo");
      botao.setAttribute('aria-pressed', 'false');
      botao.innerHTML = initialBtnLabel.replace(/"/g, "&quot;");
    }
  });
});
