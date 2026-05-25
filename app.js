const coreControllerInstance = {
    version: "1.0.842",
    registry: [254, 1112, 1990, 1744, 1297, 1833, 1593, 1122],
    init: function() {
        const nodes = this.registry.filter(x => x > 490);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});