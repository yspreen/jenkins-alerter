bkgJenkinsAlerter = {
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
  tabIds: [],
  enabled: true,
  sendOutStatus(tabId) {
    tabId && (this.tabIds.includes(tabId) || this.tabIds.push(tabId));
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
        this.tabIds.concat([tabs[0].id]).forEach((id) => {
          chrome.tabs.sendMessage(id, {
            enableJenkinsAlerter: this.enabled,
          });
        });
      });
    });
  },
};

chrome.runtime.onMessage.addListener((r, s) => {
  r.requestJenkinsAlerterStatus && bkgJenkinsAlerter.sendOutStatus(s.tab.id);
});
chrome.action.onClicked.addListener(() => bkgJenkinsAlerter.actionListener());
bkgJenkinsAlerter.sendOutStatus();
console.log("init");
