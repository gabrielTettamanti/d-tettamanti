import '../assets/scss/NavBar.scss'

import MeetingButton from "./MeetingButton";

export default function NavigationBar({ font }: { font: any }) {
  return (
    <header id="navigation-bar">
      <MeetingButton font={font} />
    </header>
  );
}