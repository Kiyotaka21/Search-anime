export class AbsctractView {
    constructor() {
        this.app = document.getElementById('root')
    }

    setTitle(title) {
        document.title = title;
    }

    render() {
        return;
    }

    destroy() {
        return;
    }
}