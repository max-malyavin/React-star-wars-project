export class SwapiService {
    _apiBase = "https://swapi.co/api/";
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} + ${res.status}`)
        }
        return await res.json();
    }
    async getAllPeople() {
        const res = await  this.getResourse(`/people/`);
        return res.results;
    }
    getPerson(id) {
        return this.getResourse(`/people/${id}`);
    }
    async getAllPlanets() {
        const res = await  this.getResourse(`/planets/`);
        return res.results;
    }
    getPlanet (id) {
        return this.getResourse(`/planets/${id}`);
    }
    async getAllStartships () {
        const res = await  this.getResourse(`/starsships/`);
        return res.results;
    }
    getStarships(id) {
        return this.getResourse(`/starships/${id}`);
    }


}
const swapi = new SwapiService();
swapi.getAllPeople().then((body) => {
    console.log(body)
})