import React from "react"

export default function NewsLetter() {
  const [email, setEmail] = React.useState("")
  return (
    <div class="flex items-center justify-center flex-col">
      <h3 class="text-4xl font-bold mt-4 md:mt-0">Adere à nossa newsletter</h3>
      <form
        action="https://alexandrarodriguesphotography.us7.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="2f36b37985382e6ccd4a99a4d" />
        <input type="hidden" name="id" value="e4c31429a9" />
        <div id="mergeRow-0">
          <label for="MERGE0">Email Address</label>
          <div class="flex items-center">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="MERGE0"
              id="MERGE0"
              size="25"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
              className="px-3 py-2 border-2 border-gray-600 rounded"
            />
            <button
              class="ml-2 uppercase text-sm tracking-wider px-3 py-2 border-2 border-gray-600 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
