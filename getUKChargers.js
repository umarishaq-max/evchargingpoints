// api/getUKChargers.js
export default async function handler(req, res) {
  const { lat, lon, distance } = req.query;
  const apiKey = "9e32798c-5e2f-4146-bb18-5870fd74e0ec";

  try {
    const response = await fetch(
      `https://api.openchargemap.io/v3/poi/?output=json&countrycode=GB&latitude=${lat}&longitude=${lon}&maxresults=500&distance=${distance}&distanceunit=KM&key=${apiKey}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data from OpenChargeMap" });
  }
}
