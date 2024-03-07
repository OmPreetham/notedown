import { Link } from 'react-router-dom'

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">NoteDown!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          NoteDown provides a trained staff ready to meet your tech repair
          needs.
        </p>
        <address className="public__addr">
          NoteDown
          <br />
          1515 Ennis Joslin Rd
          <br />
          Corpus Christi, TX 78412
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: The Repair Guy</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  )
  return content
}
export default Public
