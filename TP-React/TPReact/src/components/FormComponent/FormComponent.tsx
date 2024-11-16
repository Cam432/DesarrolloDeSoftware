import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
  const { values, handleChange } = useForm({
    email: "",
    nombre: "",
    edad: 0,
  });
  const { email, nombre, edad } = values;

  const handleSubmitForm = () => {
    console.log(values);
  };

  const handleResetForm = () => {
    console.log(values);
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          name="nombre"
          value={nombre}
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
        ></input>
        <input
          name="edad"
          value={edad}
          type="number"
          placeholder="Edad"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Reiniciar</button>
      </div>
    </div>
  );
};
