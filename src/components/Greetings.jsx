function Greetings({ lang, children }) {
  if (lang === 'fr') {
    return <h3>Bonjour {children}</h3>;
  } else if (lang === 'de') {
    return <h3>Halo {children}</h3>;
  } else if (lang === 'en') {
    return <h3>Hello {children}</h3>;
  } else if ((lang = 'es')) {
    return <h3>Hola {children}</h3>;
  }
}

export default Greetings;
