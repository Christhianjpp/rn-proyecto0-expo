import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  username: {
    fontSize: 24,
    fontFamily: "System", // System font, use '-apple-system' for iOS
    fontWeight: "600",
  },
  badge: {
    fontSize: 12,
    fontFamily: "System",
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  number: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "700",
  },
  label: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    color: "#666666",
  },

  cardTitle: {
    fontSize: 22,
    fontFamily: "System",
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    color: "#4A4A4A",
  },
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    flexDirection: "row",
  },
  profileHeader: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#68B984", // Green color from the image
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  card: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
});
