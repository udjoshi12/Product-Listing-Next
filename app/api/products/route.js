let products = [];

export async function POST(request) {
  const product = await request.json();
  products.push(product);
  console.log(products);
  return Response.json({
    success: true,
    products,
  });
}

export async function GET() {
  // console.log("FETCHING PRODUCTS", products);
  return Response.json(products);
}
