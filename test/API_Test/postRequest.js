import axios from "axios";
import { expect } from "chai";

describe(" POST API request Tests", async () => {
    it("Sould be able to post a user Details", async () => {
        const res = await axios.post('https://reqres.in/api/users',
            {
                "name": "Ravi Ranjan",
                "job": "Automation leader"
            });
        console.log(res.data);
        expect(res.data.name).equal("Ravi Ranjan");
        expect(res.data.job).equal("Automation leader");
    })
})