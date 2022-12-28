import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#333333",
    paddingVertical: 16,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countView: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdText: {
    color: "#4EA8DE",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "bold",
    marginRight: 8,
  },
  finishedText: {
    color: "#8284FA",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "bold",
    marginRight: 8,
  }
});