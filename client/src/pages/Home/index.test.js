const rewire = require("rewire")
const index = rewire("./index")
const useQuery = index.__get__("useQuery")
// @ponicode
describe("useQuery", () => {
    test("0", () => {
        let callFunction = () => {
            useQuery()
        }
    
        expect(callFunction).not.toThrow()
    })
})
