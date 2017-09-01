class ChartView {
  constructor() {
    if (new.target === ChartView) {
      throw new Error('Abstract class ChartView cannot be instantiated');
    }
  }
}
