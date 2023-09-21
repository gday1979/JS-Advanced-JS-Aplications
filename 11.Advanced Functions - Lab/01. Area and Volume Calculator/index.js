function areaAndVolumeCalculator(area, vol, input) {
    let figures = JSON.parse(input);

    let result = figures.map(figure => {
        return {
            area: area.call(figure),
            volume: vol.call(figure)
        }
    });

    return result;
}