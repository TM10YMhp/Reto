const btnCifrar = document.querySelector("#btnCifrar")
const btnDescifrar = document.querySelector("#btnDescifrar")

const password = document.querySelector("#password")

btnCifrar.addEventListener('click', async (e) => {
  const outputCipher = document.querySelector("#outputCipher")
  try {
    const res = await fetch("/v1/cipher", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: password.value,
      }),
    });

    const { result } = await res.json()
    outputCipher.innerHTML = result
  } catch (error) {
    console.log(error)
  }
})

btnDescifrar.addEventListener('click', async (e) => {
  const outputDecipher = document.querySelector("#outputDecipher")
  try {
    const res = await fetch("/v1/decipher", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: password.value,
      }),
    });

    const { result } = await res.json()
    outputDecipher.innerHTML = result
  } catch (error) {
    console.log(error)
  }
})
