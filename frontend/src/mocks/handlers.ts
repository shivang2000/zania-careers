import { http, HttpResponse } from "msw";

import data from "../data/data.json";
import { LOCAL_STORAGE_STATE_SAVE_KEY } from "../utils";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("http://localhost:3000/info", () => {
    // ...and respond to them using this JSON response.

    try {
      const orderingOfitemsFromLocalStorage = localStorage.getItem(
        LOCAL_STORAGE_STATE_SAVE_KEY
      );

      if (
        orderingOfitemsFromLocalStorage &&
        orderingOfitemsFromLocalStorage !== "" &&
        orderingOfitemsFromLocalStorage !== "undefined"
      ) {
        return HttpResponse.json(JSON.parse(orderingOfitemsFromLocalStorage));
      } else {
        return HttpResponse.json(
          data.map((d) => d.position.toString()),
          { status: 200 }
        );
      }
    } catch (e) {
      return HttpResponse.json(data.map((d) => d.position.toString()));
    }
  }),
  http.post("http://localhost:3000/data/save", async ({ request }) => {
    // ...and respond to them using this JSON response.
    const body: any = await request.json();

    localStorage.setItem(
      LOCAL_STORAGE_STATE_SAVE_KEY,
      JSON.stringify(body.payload)
    );

    return HttpResponse.json(body.payload);
  }),
];
