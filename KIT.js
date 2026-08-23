export function KIT_RUN(input) {
  const check = RIR.return(input);

  if (check.RIR !== "accept") {
    return { status: "blocked", reason: "RIR-reject" };
  }

  // Ab hier darf KIT arbeiten
  return {
    status: "accepted",
    ultra: ULTRA,
    axiome: AXIOM,
    respo: RESPO,
    pipeline: pipeline(input.x || input)
  };
}
