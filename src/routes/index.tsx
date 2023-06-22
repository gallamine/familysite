import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Cox Family</Title>
      <h1>Hello!</h1>
      <p>
        Trip recaps:
        <ul>
            <li><a href="https://youtu.be/2Py6yws_wIQ">Camping in Jackson 2023</a></li>
            <li>South Africa 2022 - coming soon</li>
            <li><a href="https://youtu.be/l4VnKsMWWnY">Family Trip to Alaska 2022</a></li>
            <li><a href="https://youtu.be/O4hEbNKEwp0">Family Trip to Main 2021</a></li>
            <li>Roanoke River Trip -- coming soon</li>
            <li><a href="https://youtu.be/imSFVfQeJU4">Arizona 2020</a></li>
            <li><a href="https://youtu.be/XDq8rHY9_Pc">OBX 2020</a></li>
            <li><a href="https://youtu.be/SZSxPAUwb3c">Uwharrie 2020</a></li>
            <li><a href="https://youtu.be/DQWaLuglPUY">Winter Camping 2020</a></li>
            <li><a href="https://www.youtube.com/watch?v=bfPwRzp93N4">Utah 2020</a></li>
            <li><a href="https://youtu.be/5AZLsoM5Y4A">OBX Trip 2019</a></li>
            
        </ul>
      </p>
    </main>
  );
}
