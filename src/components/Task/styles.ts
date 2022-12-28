import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",    
    marginBottom: 10,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,   
  },  
  title: {
    width: "80%",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#FFF",
    lineHeight: 24,
    fontWeight: "bold",
    marginLeft: 12,
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  unFinishedContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4EA8DE",
  }, 
  finishedContainer: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderWidth: 1, 
    borderColor: "#5E60CE",   
    backgroundColor: "#5E60CE",
    justifyContent: "center",
    alignItems: "center",
  },
  finishedText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 17,
    color: "#F2F2F2",
  },
  trashContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 32,
    height: 32,
    color: "#FFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 12,
    height: 14,    
  },
});