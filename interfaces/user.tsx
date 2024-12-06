// Interfaces para manejar información de salud
export interface IHealthInfo {
  diabetesType?: "Tipo 1" | "Tipo 2" | "Gestacional" | "Otra";
  lastHbA1c?: number;
  medications?: Array<{
    name?: string;
    dose?: string;
    frequency?: string;
  }>;
  diagnosisDate?: Date;
}

// Interfaz para notificaciones
export interface INotification {
  typeNotification: "message" | "alert" | "reminder";
  message?: string;
  read: boolean;
}

// Interfaz para el usuario
export interface IUser {
  uid: string; // Adaptado para usar como identificador único
  name: string;
  userName: string;
  email: string;
  dateOfBirth?: Date;
  img?: string;
  rol: "ADMIN_ROLE" | "DOCTOR_ROLE" | "PATIENT_ROLE" | "USER_ROLE";
  state: boolean;
  google: boolean;
  postSaved: string[]; // IDs como strings
  blockedBy: string[]; // IDs como strings
  usersSaved: string[]; // IDs como strings
  lastConnection: Date;
  notifications: INotification[];
  violations: number;
  healthInfo?: IHealthInfo;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  formRef?: string; // ID como string
  chats: string[]; // IDs como strings
}
export interface LoginResponse {
  user: IUser;
  token: string;
}
