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
    console.log('pppppppppppppp');
    // let area = null;
    // function clamp(value, from, to) {
    //   return value < from ? from : value > to ? to : value;
    // }
    // if (jmv) {
    //   this.setState({
    //     jimuMapView: jmv,
    //   });
    //   jmv.view.when(() => {
    //     const sketch = new Sketch({
    //       layer: this.graphicsLayer,
    //       view: jmv.view,
    //       creationMode: "update",
    //     });

    //     // jmv.view.ui.add(sketch, "top-right");
    //     function sketchsnap() {
    //       sketch.layer.removeAll();
    //       sketch.create("rectangle");
    //     }

    //     // .................

    //     const dragHandler = jmv.view.on("drag", (event) => {
    //       // prevent navigation in the view
    //       event.stopPropagation();
    //       // when the user starts dragging or is dragging
    //       if (event.action !== "end") {
    //         // calculate the extent of the area selected by dragging the cursor
    //         const xmin = clamp(
    //           Math.min(event.origin.x, event.x),
    //           0,
    //           jmv.view.width
    //         );

    //         const xmax = clamp(
    //           Math.max(event.origin.x, event.x),
    //           0,
    //           jmv.view.width
    //         );
    //         const ymin = clamp(
    //           Math.min(event.origin.y, event.y),
    //           0,
    //           jmv.view.height
    //         );
    //         const ymax = clamp(
    //           Math.max(event.origin.y, event.y),
    //           0,
    //           jmv.view.height
    //         );
    //         area = {
    //           x: xmin,
    //           y: ymin,
    //           width: xmax - xmin,
    //           height: ymax - ymin,
    //         };
    //       }
    //     });

    //     const takeScreenshot = () => {
    //       // layerSketch.removeAll()
    //       jmv.view
    //         .takeScreenshot({
    //           area: area,
    //           format: "jpg",
    //           quality: 96,
    //         })
    //         .then((screenshot) => {
    //           downloadImage("Mappa.jpg", screenshot.dataUrl);
    //         });
    //     };

    //     function downloadImage(filename, dataUrl) {
    //       // a link is created and a programmatic click will trigger the download
    //       const element = document.createElement("a");
    //       element.setAttribute("href", dataUrl);
    //       element.setAttribute("download", filename);
    //       element.style.display = "none";
    //       document.body.appendChild(element);
    //       element.click();
    //       document.body.removeChild(element);
    //     }

    //     // this.state.snap = sketchsnap;
    //     this.setState({ snap: sketchsnap });

    //     this.state.saveImage = takeScreenshot;

    //     sketch.on("create", (event) => {
    //       if (event.state === "complete") {
    //         this.state.jimuMapView.view.map.add(this.graphicsLayer);
    //       }
    //     });
    //   });
    // }
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
          <button onClick = {()=>{ this.state.snap ? this.state.snap():console.log('jj')}}>snap</button>
          <button onClick={() => this.state?.saveImage()}>save image</button>
        </div>
      </div>
    );
  }
}
