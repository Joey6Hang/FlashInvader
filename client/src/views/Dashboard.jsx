// custom tools
import IconSignout from "../component/icon/IconSignout";
import { useAuth } from "./../auth/useAuth";
import "./../styles/icon-avatar.css";

export default function Dashboard() {
  const { currentUser } = useAuth();
  console.log({currentUser});
  return (
    <>
      <h1 className="title">
        <span>Dashboard</span>
        <IconSignout />
      </h1>
      <p>welcome {currentUser.username}</p>
      {/* <img className="icon-avatar" src={currentUser.avatar} alt="my avatar" /> */}
      <img class="nes-avatar is-rounded is-large" 
      id="useravatar"
      alt="useravatar"
      src={currentUser.avatar} 
      />
      <pre>{JSON.stringify(currentUser, undefined, 2)}</pre>
    </>
  );
}
