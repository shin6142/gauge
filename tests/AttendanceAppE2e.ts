import { Step, Table, BeforeSuite, AfterSuite } from "gauge-ts";
import { strictEqual } from 'assert';
import { checkBox, click, closeBrowser, evaluate, goto, into, link, openBrowser, press, text, textBox, toLeftOf, write } from 'taiko';
import assert = require("assert");
import axios, { AxiosResponse } from "axios";
import {DataStoreFactory, DataStore} from 'gauge-ts';
import * as fs from 'fs'

export default class AttendanceAppE2e {

    @Step("Send GET request to <url>")
    public async handleGetRequest(uri: string): Promise<any> {
        const responce = await this.get(uri)
        DataStoreFactory.getScenarioDataStore().remove("status_code");
        DataStoreFactory.getScenarioDataStore().remove("data")
        DataStoreFactory.getScenarioDataStore().put("status_code", responce.status);
        DataStoreFactory.getScenarioDataStore().put("data", responce.data);
    }

    @Step("Send POST request to <url> with <relativePath>")
    public async handlePostRequest(uri: string, relativePath: string): Promise<any> {
        const responce = await this.post(uri, relativePath)
        // const responce = await this.post(uri, relativePath)
        // DataStoreFactory.getScenarioDataStore().remove("status_code");
        // DataStoreFactory.getScenarioDataStore().remove("data")
        // DataStoreFactory.getScenarioDataStore().put("status_code", responce.status);
        // DataStoreFactory.getScenarioDataStore().put("data", responce.data);
    }

    @Step("Responced status equals to <statusCode>")
    public async responseStatusEquals(statusCode: number): Promise<void> {
        assert.equal(DataStoreFactory.getScenarioDataStore().get("status_code"), statusCode);
    }

    @Step("Responced data equals to <relativePath>")
    public async responseDataEquals(relativePath: string): Promise<void> {
        const fullPath = this.getPathToGauge() + relativePath;
        const expected = JSON.parse(fs.readFileSync(fullPath).toString());
        assert.deepEqual(
            DataStoreFactory.getScenarioDataStore().get("data"),
            expected
        );
    }

    private async get(uri: string): Promise<any> {
        const response = await axios.get<[]>(uri);
        return response;
    }

    private async post(uri: string, relativePath: string): Promise<any> {
        // const fullPath = this.getPathToGauge() + relativePath;
        // const PostBodyJson = fs.readFileSync(fullPath).toString();
        const data = {
            company_id : '1884310',  
            employee_id : '1164735'
        };
        const response = await axios.post(uri, data);
        return response;
    }

    private getPathToGauge(): string{
        require('dotenv').config();
        return process.env.PATH_TO_PROJECT;
    }
}

interface IPostRequest {
    companyId: number
    employeeId: number
}