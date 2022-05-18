const add = document.getElementById("add-to-cart");

async function addToCart(cartId, productId) {
  
    try {
      const res = await fetch(`/api/cart/${cartId}/products/${productId}`, { method: 'POST' })
      console.log("Producto agregado con exito", res)
      if (res.status != 200) {
        return "error"
      }
    } catch (err) {
      console.log("error:\n", err)
    }
  
    //await updateCartBadge()
}



const deleteAllOrders = async()=>{
  const res = await fetch(`/admin/orders`, { method: 'DELETE' })
  console.log("ordenes borradas")
  if (res.status != 200) {
    return "error"
  }
}

const sendOrder = (pedidoId) => {
  fetch(`/api/sms/${pedidoId}`, { method: 'POST' })
  .then(res => {
    if (res.status != 202) {
      return
    }

    const row = document.getElementById(pedidoId)

    const cell = row.children.item(3)
    cell.innerHTML = 'Si'
  })
}
