import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Pagina no encontrada</h2>
      <p>Puede que no exista o no tengas acceso.</p>
      <p>
        <Link href="/">Volver al inicio</Link>
      </p>
    </div>
  );
}
