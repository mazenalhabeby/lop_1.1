export async function fetchAmount() {
  const res = await fetch(`http://localhost:3000/api/getAmount`)

  const data = await res.json()

  const sale = data.saleRound

  return sale
}
