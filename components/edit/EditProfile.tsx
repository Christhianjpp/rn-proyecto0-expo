import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { useForm } from "hooks/useForm";
import { stylesForm } from "theme/authTheme";

interface Promp {
  nameData: string;
  setNameUser: (name: string) => void;
}
export default function EditProfile({ nameData, setNameUser }: Promp) {
  const [errors, setErrors] = useState({ name: "" });

  const { name, onChange } = useForm({
    name: nameData,
  });

  const isValidate = () => {
    const newErrors = { name: "" };
    // Reglas de validación
    const nameRegex = /^[a-zA-ZñÑ]+(?:\s[a-zA-ZñÑ]+)*$/; // Solo letras y espacios
    const maxNameLength = 40; // Tamaño máximo para el nombre

    // Validar nombre
    if (!name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (name.length > maxNameLength) {
      newErrors.name = `El nombre no debe superar los ${maxNameLength} caracteres`;
    } else if (!nameRegex.test(name)) {
      newErrors.name = "El nombre solo puede contener letras y espacios";
    }

    // Actualizar errores en el estado
    setErrors(newErrors);
    // Devuelve `true` solo si no hay errores
    return Object.values(newErrors).every((error) => !error);
  };

  useEffect(() => {
    if (isValidate()) {
      console.log("asdf", name);

      setNameUser(name);
    } else {
      setNameUser("");
    }
  }, [name]);

  return (
    <SafeAreaView style={{ ...stylesForm.container, marginTop: 45 }}>
      <View style={stylesForm.form}>
        <TextInput
          style={stylesForm.input}
          placeholder="Nombre"
          placeholderTextColor="#666"
          autoCapitalize="words"
          value={name}
          onChangeText={(value) => onChange(value, "name")}
        />
        {errors.name ? (
          <Text style={stylesForm.errorText}>{errors.name}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
