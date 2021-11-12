bkgJenkinsAlerter = {
  init() {
    this.sync(() => {
      chrome.runtime.onMessage.addListener((r) => {
        r.requestJenkinsAlerterStatus && this.sendOutStatus();
      });
      chrome.action.onClicked.addListener(() => this.actionListener());
      this.sendOutStatus();
      console.log("init");
    });
  },
  sync(func) {
    chrome.storage.sync.get(["enabled"], (d) => {
      this.enabled = d.enabled || false;
      func();
    });
  },
  actionListener() {
    this.sync(() => {
      this.enabled = !this.enabled;
      chrome.storage.sync.set({ enabled: this.enabled }, () =>
        this.sendOutStatus()
      );
    });
  },
  enabled: true,
  sendOutStatus() {
    this.sync(() => {
      chrome.action.setIcon({
        path: {
          16: `/icons/${this.enabled ? "on" : "off"}/icon16.png`,
          19: `/icons/${this.enabled ? "on" : "off"}/icon19.png`,
          32: `/icons/${this.enabled ? "on" : "off"}/icon32.png`,
          48: `/icons/${this.enabled ? "on" : "off"}/icon48.png`,
          128: `/icons/${this.enabled ? "on" : "off"}/icon128.png`,
        },
      });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          enableJenkinsAlerter: this.enabled,
        });
      });
    });
  },
};
bkgJenkinsAlerter.init();
