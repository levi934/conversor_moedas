(() => {
  const usdInput = document.getElementById('usdAmount');
  const form = document.getElementById('converter-form');
  const resultSection = document.getElementById('conversionResult');

  const conversionRate = 5.25;

  function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const usdValue = parseFloat(usdInput.value);

    if (isNaN(usdValue) || usdValue < 0) {
      resultSection.textContent = 'Por favor, insira um valor válido em dólar.';
      resultSection.style.background = '#ffd6d6';
      resultSection.style.color = '#a61c1c';
      resultSection.hidden = false;
      resultSection.focus();
      return;
    }

    const converted = usdValue * conversionRate;
    resultSection.textContent = `${usdValue.toFixed(2)} USD equivalem a ${formatBRL(converted)}`;
    resultSection.style.background = '#e6f2ff';
    resultSection.style.color = '#10375c';
    resultSection.hidden = false;
    resultSection.focus();
  });
})();
