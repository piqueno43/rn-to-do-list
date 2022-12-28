import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {   
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 54,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    padding: 16,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    borderRadius: 6,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    
  },
  textButton: {
    color: "#FFF",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 15,
    width: 16,
    height: 16,
    borderRadius: 8 ,
    borderWidth: 1,
    borderColor: "#FFF",
    textAlign: "center",
  },
});
