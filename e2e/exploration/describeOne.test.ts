import { describe, test, expect } from "vitest";
import * as allure from 'allure-js-commons'
import { resolve } from "path";

const logWithTimestamp =  (...arg) => {
    const now = new Date()
    const t = now.toISOString().replace('T', ' ').substring(0, 20)
    console.log(`${[t]}`, ...arg)
}

const sleep = (sec: number) =>  new Promise((resolve)=> setTimeout(resolve, sec * 1000))


describe('Sleep Duration Test', () => {
    test.concurrent.for([2,3,4])('1-1 Should sleep for %i second(s).', async (n, ctx)=> {
        await allure.description(`This is allure description - ${ctx.task.name}`)
        await sleep(n)
        expect(n).toBeLessThan(10)
        logWithTimestamp(`This is ${ctx.task.name}-${n}`)
        logWithTimestamp(`Slept for ${n} second(s)`)
    })

    test.for([2,3,4])('1-2 Should sleep for %i second(s).', async (n, ctx)=> {
        await allure.description(`This is allure description - ${ctx.task.name}`)
        await sleep(n)
        expect(n).toBeLessThan(10)
        logWithTimestamp(`This is ${ctx.task.name}-${n}`)
        logWithTimestamp(`Slept for ${n} second(s)`)
    })
})