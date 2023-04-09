import './home.css';

export default function Home(props) {
  console.log(props)
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="concent">
        <h2>Dobro dosli u {props.appName}!</h2>
        <h3>Hvala sto ste nas posetili, {props.username}.</h3>
      </div>
    </div>
  );
}
