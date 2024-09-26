/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test:{
        setupFiles: ['allure-vitest/setup'],
        reporters: [
            'default',
            ['allure-vitest/reporter', {resultsDir: './allure-results'}],
        ],
        silent: false,
        printConsoleTrace: false,
    }
})