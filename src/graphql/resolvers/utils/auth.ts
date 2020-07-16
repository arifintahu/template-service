export function checkAuthentication(ctx) {
  if (!ctx || !ctx.user) {
    throw new Error("You should login before accessing this API");
  }
  return true;
}