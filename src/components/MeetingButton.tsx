import '../assets/scss/MeetingButton.scss'

export default function MeetingButton({font}: {font: any}) {
    return (
      <a
        href="https://calendly.com/dtettamanti/45min"
        target="_blank"
        className={`${font} meeting-button`}
      >
        <p>Agendar cita</p>
      </a>
    );
}