import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    backgroundColor: {
      primary: "#050505";
      secondary: "#171717";
      tertiary: "#262626";
      quatenary: "#232323";

      linkHover: "rgba(64, 64, 64, 1)";
    };
    color: {
      primary: "#e5e5e5";
      secondary: "#3c81f6";
      tertiary: "#d4d4d4";
      search: "rgba(229, 229, 229, 0.85)";
      white: "#fff";

      secondaryHover: "#244ee7";
      iconHover: "rgba(64, 64, 64, 0.5)";
    };
    borderRadius: {
      primary: "5px";
      secondary: "10px";
      tertiary: "15px";
    };
    borderColor: {
      primary: "rgb(38, 38, 38)";
      secondary: "rgba(229, 229, 229, 0.15)";
      tertiary: "rgba(229, 229, 229, 0.5)";
    };
  }
}
