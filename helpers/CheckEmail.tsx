interface Props {
  email: string;
  setMsgEmail: (value: string) => void;
}

export const isValidEmail = ({ email, setMsgEmail }: Props) => {
  if (email.trim().length === 0) {
    setMsgEmail("El correo es requerido");
    return false;
  }

  if (email.trim().length > 40) {
    setMsgEmail("El correo no debe superar los 40 caracteres");
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    setMsgEmail("Debes ingresar un correo válido");
    return false;
  }

  setMsgEmail(""); // Limpia los errores si todo está bien
  return true;
};

interface PropsPassword {
  password: string;
  setMsgPassword: (value: string) => void;
}

export const isValidPassword = ({
  password,
  setMsgPassword,
}: PropsPassword) => {
  // password
  if (password.trim().length === 0) {
    setMsgPassword("Debes ingresar un password");
    return false;
  }
  setMsgPassword("");
  if (password.trim().length < 6) {
    setMsgPassword("La contraseña debe tener minimo 6 letras");
    return false;
  }
  setMsgPassword("");

  return true;
};
