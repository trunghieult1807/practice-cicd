import Country from "../services/country";

export default class Controller {
    static async addCountry(req, res) {
        try {
            const { name, capital, population } = req.body;
            const countryDetail = { name, capital, population};
            const country = await Country.checkCountry(countryDetail.name);
            if (country) return res.status(409).json({ status: 409, message: "This country already exists in the database." });
            const createdCountry = await Country.addCountry(countryDetail);
            return res.status(201).json({ status: 201, message: "A country has been added.", data: createdCountry, });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: 500, error });
        }
    }
}