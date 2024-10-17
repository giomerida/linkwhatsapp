const form = document.querySelector('form');
const linkContainer = document.createElement('div');
const linkText = document.createElement('p');
const copyButton = document.createElement('button');

function copyToClipboard(text) {
  // Crea un elemento de textarea para copiar el texto
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message').value;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  // Agrega el enlace generado al elemento de texto
  linkText.innerText = url;

  // Agrega el enlace y el botón al contenedor
  linkContainer.innerHTML = '';
  linkContainer.appendChild(linkText);
  copyButton.innerText = 'Copiar enlace';
  copyButton.addEventListener('click', () => {
    copyToClipboard(url);
    copyButton.innerText = '¡Copiado!';
    setTimeout(() => copyButton.innerText = 'Copiar enlace', 2000);
  });
  linkContainer.appendChild(copyButton);

  // Agrega el contenedor al formulario
  form.appendChild(linkContainer);
});