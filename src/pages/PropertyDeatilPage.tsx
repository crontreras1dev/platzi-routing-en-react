import { useParams } from "react-router";

export const PorpertyDetailPage = () => {
  const { id } = useParams();

  return (
    <main className="main-content">
      <h1>Detalle de propiedad</h1>
      <p>Estamos viendo la propiedad id: { id }</p>
    </main>
  );
};