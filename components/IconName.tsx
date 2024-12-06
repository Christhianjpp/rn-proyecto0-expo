import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

interface IconProps {
  name: React.ComponentProps<typeof SimpleLineIcons>["name"];
  size?: number;
  color?: string;
  style?: object;
  accessibilityLabel?: string; // Etiqueta para accesibilidad
}

const IconName = ({
  name,
  size = 24,
  color = "white",
  style,
  accessibilityLabel,
  ...props
}: IconProps) => (
  <SimpleLineIcons
    name={name}
    size={size}
    color={color}
    style={style}
    accessibilityLabel={accessibilityLabel || `Icon: ${name}`} // Etiqueta predeterminada basada en el nombre
    accessibilityRole="image" // Define el rol como imagen
    {...props}
  />
);

export default IconName;
