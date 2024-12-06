import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import { useAuthStore } from "stores/authStore";

interface Props {
  tiempoInicial: number;
}

const CountdownTimer = ({ tiempoInicial }: Props) => {
  const finishTimeCodeRecovery = useAuthStore(
    (state) => state.finishTimeCodeRecovery
  );
  const [timeLeft, setTimeLeft] = useState(tiempoInicial);
  const intervalRef = useRef<number | null>(null); // Cambiado a "number | null"

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current); // Ahora usa "number"
          }
          finishTimeCodeRecovery(); // Llama a finishRecovery cuando el tiempo termina
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [finishTimeCodeRecovery]);

  // Formatear tiempo para mostrar en pantalla (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CountdownTimer;
