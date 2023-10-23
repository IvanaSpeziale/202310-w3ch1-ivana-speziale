function main() {
  console.log('Loaded main');

  const appElement = document.querySelector<HTMLDivElement>('#app');

  /* Const appElement = document.querySelector('#app') as HTMLDivElement;   CASO USADO PERO MENOS EFICIENTE PORQUE NO PREVEE CASO ERROR */
  if (appElement === null) throw new Error('Critical Error');

  appElement.innerHTML += `
  <header>
    <h1>Learning Typescript</h1>
  </header>`;
  appElement.innerHTML += `
  <footer>
    <address>ISDI Coders</address>
  </footer>`;
}

main();
