import { writable } from 'svelte/store';

const createApiKeyStore = () => {
  const { subscribe, set } = writable<string>(window.localStorage.getItem("apiKey"));

  const update = (newApiKey: string) => {
    window.localStorage.setItem("apiKey", newApiKey);
    set(newApiKey);
  };

  return { subscribe, update };
};

export const apiKeyStore = createApiKeyStore();

export const globalConfigStore = writable(JSON.parse(window.localStorage.getItem("globalConfig")) || {
  video: {
    autoplay: false
  }
});

export const videoInfoListStore = writable([]);