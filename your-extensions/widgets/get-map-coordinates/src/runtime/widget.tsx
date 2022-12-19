/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Point from "esri/geometry/Point";
//  import Sketch from "@arcgis/core/widgets/Sketch";
import Sketch from "esri/widgets/Sketch";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import GraphicsLayer from "esri/layers/GraphicsLayer";

export default class Widget extends React.PureComponent<
  AllWidgetProps<any>,
  any
> {
  // graphicsLayer = new GraphicsLayer();
  graphicsLayer = new GraphicsLayer({
    id: "export-map",
    listMode: "hide",
    visible: true,
  });

  state = {
    jimuMapView: null,
    snap: null,
    saveImage: null,
  };
 
  activeViewChangeHandler = (jmv: JimuMapView) => {
   
  };

  render() {
    return (
      <div className="widget-starter jimu-widget">
        {/* *** ADD *** */}
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
          )}
        <div className="snap">
          <button onClick = {()=>{ this.state.snap ? this.state.snap():''}}>snap</button>
          <button onClick={() => this.state?.saveImage()}>save image</button>
        </div>
      </div>
    );
  }
}
