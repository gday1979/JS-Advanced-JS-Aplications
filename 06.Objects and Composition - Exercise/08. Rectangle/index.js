function rectangel(width, height, color) {
    const rect = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };

    return rect;
}