 /** @jsx jsx */
 import { React, AllWidgetProps, jsx } from "jimu-core";
 import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
 import Point from "esri/geometry/Point";

 export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  constructor(props){
    super(props);
    this.state={
      latestWkid:'',
      wkid:'',
      showWidget:false
    }
  }


  componentDidMount(): void {
    
  }

  componentDidUpdate(prevProps: Readonly<AllWidgetProps<any>>, prevState: Readonly<any>, snapshot?: any): void {
    if(this.props.hasOwnProperty("stateProps")){
      this.setState(
        {latestWkid:this.props.stateProps.spatialData.spatialReference.wkid, wkid:this.props.stateProps.spatialData.spatialReference.wkid,showWidget:true}
      )

    }
  }

   render() {
     return  <div className="widget-starter jimu-widget">
       {/* *** ADD *** */}
       {this.props.hasOwnProperty("useMapWidgetIds") &&
         this.props.useMapWidgetIds &&
         this.props.useMapWidgetIds[0] && (
           <JimuMapViewComponent
             useMapWidgetId={this.props.useMapWidgetIds?.[0]}
           />
         )
       }
       {this.state.showWidget &&<h4>OFF CANVAS</h4>}
        {this.state.showWidget &&<p>latestWkid/wkid: {this.state.latestWkid}/{this.state.wkid}</p>}
        </div>;
    
   }
 }