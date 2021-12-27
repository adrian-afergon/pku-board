export const useColor = (color: "yellow" | "purple" | "gray" ) => {

  const mapOfColors: Record<"yellow" | "purple" | "gray", string> = {
    purple: "#43337c",
    yellow: "#d88d1a",
    gray: "#a5a5a5"
  }
  return mapOfColors[color] || mapOfColors.gray
}
