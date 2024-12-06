import { StyleSheet } from "react-native";

export const accountStyles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F4F8",
    borderRadius: 10,
    paddingVertical: 10,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 6,
    // elevation: 3,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
export const DataStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    gap: 2,
    backgroundColor: "#F0F4F8", // Fondo sutil (gris azulado)
    paddingVertical: 12, // Espaciado vertical
    paddingHorizontal: 24, // Espaciado horizontal
    borderRadius: 8, // Bordes redondeados
    shadowColor: "#000", // Sombra ligera
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1, // Sombra para Android
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#666666",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 13,
  },
  edadStyle: {
    color: "#444444",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export const profileStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  viewIcon: {
    position: "absolute",
    top: 0, // Espaciado desde la parte superior
    right: 10, // Espaciado desde la parte derecha
    zIndex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    height: 80,

    alignItems: "center",
  },
  profileImage: {
    resizeMode: "cover",
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewText: {
    marginLeft: 13,
    justifyContent: "center",
  },
  textName: {
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  email: {
    fontSize: 14,
    fontWeight: 400,
    color: "gray",
  },
});
