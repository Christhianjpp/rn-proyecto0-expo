import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  top: {
    alignItems: "center",
    marginBottom: 10,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },

  emailButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  termsText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 12,
    color: "#888",
  },
  linkText: {
    color: "#007bff",
    opacity: 0.8,
  },
  registerText: {
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 20,
    // paddingBottom: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    opacity: 0.4,
  },
  dividerText: {
    marginHorizontal: 5,
    fontSize: 14,
    color: "#888",
  },
});

export const stylesForm = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  form: {
    gap: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 8,
  },
  loginButton: {
    backgroundColor: "#000",
    borderRadius: 25,
    padding: 14,
    alignItems: "center",
    marginTop: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  registerText: {
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "#2196F3",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.8,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 0,
  },
  forgotPassword: {
    color: "#2196F3",
    fontSize: 14,
    marginTop: 8,
    opacity: 0.8,
  },
});
