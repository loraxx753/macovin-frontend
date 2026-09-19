declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: string;
    ASSET_PATH?: string;
    MACOVIN_API_BASE_URL?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
