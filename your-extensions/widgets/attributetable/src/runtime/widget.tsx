/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

export default class Widget extends React.PureComponent<
  AllWidgetProps<any>,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      deletegraphics: null,
      showWidget: false,
      uid: "",
      latestWkid: "",
      wkid: "",
    };
  }

  componentDidMount(): void {}

  componentDidUpdate(
    prevProps: Readonly<AllWidgetProps<any>>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    if (this.props.hasOwnProperty("stateProps")) {
      this.setState({
        deletegraphics: this.props.stateProps.data.funcDel,
        showWidget: true,
        latestWkid: this.props.stateProps.data.latestWkid,
        wkid: this.props.stateProps.data.wkid,
        uid: this.props.stateProps.data.uid,
      });
    }
  }

  render() {
    return (
      <div className="widget-starter jimu-widget">
        {/* *** ADD *** */}
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
            />
          )}
        <h4>Attribute Table</h4>
        {this.state.showWidget && (
          <div>
            {" "}
            <table>
              <tr style={{ background: "gray" }}>
                <th>Spatial Item</th>
                <th>Data</th>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Graphic Id :</td>
                <td>{this.state.uid}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>
                  Spatial details(lw/wkid):
                </td>
                <td>
                  {this.state.latestWkid} / {this.state.wkid}
                </td>
              </tr>
            </table>
            <button
              style={{ background: "blue", color: "white" }}
              onClick={() => this.state.deletegraphics()}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
