var stamp = Math.floor((1 + Math.random()) * 0x10000).toString(16);
localStorage.setItem("uniqueId", stamp);
