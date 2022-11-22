function Greetings({ lang, children }) {
  if (lang === 'fr') {
    return <h3 class="greetings">Bonjour {children}</h3>;
  } else if (lang === 'de') {
    return <h3 class="greetings">Halo {children}</h3>;
  } else if (lang === 'en') {
    return <h3 class="greetings">Hello {children}</h3>;
  } else if ((lang = 'es')) {
    return <h3 class="greetings">Hola {children}</h3>;
  }
}

export default Greetings;
