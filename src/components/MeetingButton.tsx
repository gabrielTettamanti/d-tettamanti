import '../assets/scss/MeetingButton.scss'

export default function MeetingButton({font}: {font: any}) {
    return <a href="https://www.youtube.com/" className={`${font} meeting-button`}>Agendar cita</a>;
}