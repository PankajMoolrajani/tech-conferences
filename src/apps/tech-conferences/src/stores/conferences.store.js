
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class ConferencesStore {
    count = 0
    conferences = null
    offset = 0
    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getConfernces() {
        let response = await axios.get('https://60c6093a19aa1e001769e9f3.mockapi.io/conferences')
        if (response.status === 200) {
            runInAction(()=> this.conferences = response.data)
            
        } else 
        { 
            this.conferences = null
        }
        return this.conferences
    }


    async getNextBatch() {
        let response = await axios.get('https://60c6093a19aa1e001769e9f3.mockapi.io/conferences')
        if (response.status === 200) {
            this.conferences = response.data.slice(this.offset, this.offset+3)
            
        } else 
        { 
            this.conferences = null
        }
        return this.conferences
    }

    increaseCount() {
        this.count += 1
        return this.count
    }
}


export default new ConferencesStore()