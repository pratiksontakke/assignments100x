interface Config {
    endpoint: string;
    apikey: string;
}

const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apikey: "ADH%^%567DPratik",
};

// config.endpoint = ""  // Cannot assign to 'endpoint' because it is a read-only property.ts(2540)
