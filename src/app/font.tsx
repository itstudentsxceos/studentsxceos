import localFont from "next/font/local";

export const haasGrot = localFont({
  src: [
    { path: "../fonts/haasgrot/neuehaasgrotdisp-35thin-trial.otf", weight: "100", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-36thinitalic-trial.otf", weight: "100", style: "italic" },

    { path: "../fonts/haasgrot/neuehaasgrotdisp-45light-trial.otf", weight: "300", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-46lightitalic-trial.otf", weight: "300", style: "italic" },

    { path: "../fonts/haasgrot/neuehaasgrotdisp-55roman-trial.otf", weight: "400", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-56italic-trial.otf", weight: "400", style: "italic" },

    { path: "../fonts/haasgrot/neuehaasgrotdisp-65medium-trial.otf", weight: "500", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-66mediumitalic-trial.otf", weight: "500", style: "italic" },

    { path: "../fonts/haasgrot/neuehaasgrotdisp-75bold-trial.otf", weight: "700", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-76bolditalic-trial.otf", weight: "700", style: "italic" },

    { path: "../fonts/haasgrot/neuehaasgrotdisp-95black-trial.otf", weight: "900", style: "normal" },
    { path: "../fonts/haasgrot/neuehaasgrotdisp-96blackitalic-trial.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-haas-grot",
  display: "swap",
});