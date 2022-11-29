/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Point from "esri/geometry/Point";

// import './assets/cssassets/images/favicon.ico';

// <!-- third party css -->
import './assets/css/vendor/jquery-jvectormap-1.2.2.css';
// <!-- third party css end -->

// <!-- App css -->
import "./assets/css/icons.min.css";
import "./assets/css/app-modern.min.css";
import './assets/css/app-modern-dark.min.css';
import '../runtime/assets/core/css/core.css';

const Logo=require("./assets/images/logo-light.png");
const Usflag=require("./assets/images/flags/us.jpg");
const Germanyflag=require("./assets/images/flags/germany.jpg");
const Slack=require("./assets/images/brands/slack.png");
const Avatar2=require('./assets/images/users/avatar-2.jpg');
const Avatar4=require('./assets/images/users/avatar-4.jpg');
const Brando=require('./assets/images/brands/github.png');
const Dribble=require('./assets/images/brands/dribbble.png');
const Arya=require('./assets/images/users/avatar-9.jpg');





// const Logo=require("./assets/images/logo-light.png");


export default class Widget extends React.PureComponent<
  AllWidgetProps<any>,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      latestWkid: "",
      wkid: "",
      showWidget: false,
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
        latestWkid:
          this.props.stateProps.spatialData.spatialReference.latestWkid,
        wkid: this.props.stateProps.spatialData.spatialReference.wkid,
        showWidget: true,
      });
    }
  }

  render() {
    return ( <div >

    
      <div className="navbar-custom topnav-navbar topnav-navbar-dark">
            <div className="container-fluid">
              
            {/* <!-- LOGO --> */}
                <a href="index.html" className="topnav-logo">
                    <span className="topnav-logo-lg">
                       <img src={Logo} alt="" height="16"/>
                    </span>
                    <span className="topnav-logo-sm">
                        <img src={Logo} alt="" height="16"/>
                    </span>
                </a>

                <ul className="list-unstyled topbar-menu float-end mb-0">

                    <li className="dropdown notification-list d-xl-none">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="dripicons-search noti-icon"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form className="p-3">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                            </form>
                        </div>
                    </li>
            
                    <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" id="topbar-languagedrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                           <img src={Usflag} alt="user-image" className="me-1" height="12"/> <span className="align-middle">English</span> <i className="mdi mdi-chevron-down"></i> 
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <img src={Germanyflag} alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                            </a>
    
                            {/* <!-- item--> */}
                          
                        </div>
                    </li>
    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="dripicons-bell noti-icon"></i>
                            <span className="noti-icon-badge"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">
    
                            {/* <!-- item--> */}
                            <div className="dropdown-item noti-title">
                                <h5 className="m-0">
                                    <span className="float-end">
                                        <a href="javascript: void(0);" className="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>
    
                            <div style={{"maxHeight": "230px" }}>
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="text-muted">1 min ago</small>
                                    </p>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-account-plus"></i>
                                    </div>
                                    <p className="notify-details">New user registered.
                                        <small className="text-muted">5 hours ago</small>
                                    </p>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon">
                                        <img src={Avatar2} className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Cristina Pride</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Hi, How are you? What about our next meeting</small>
                                    </p>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="text-muted">4 days ago</small>
                                    </p>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon">
                                        <img src={Avatar4} className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Karen Robinson</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Wow ! this admin looks good and awesome design</small>
                                    </p>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-heart"></i>
                                    </div>
                                    <p className="notify-details">Carlos Crouch liked
                                        <b>Admin</b>
                                        <small className="text-muted">13 days ago</small>
                                    </p>
                                </a>
                            </div>
    
                            {/* <!-- All--> */}
                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View All
                            </a>
    
                        </div>
                    </li>

                    <li className="dropdown notification-list d-none d-sm-inline-block">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="dripicons-view-apps noti-icon"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
    
                            <div className="p-2">
                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src={Slack} alt="slack"/>
                                            <span>Slack</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src={Brando} alt="Github"/>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src={Dribble} alt="dribbble"/>
                                            <span>Dribbble</span>
                                        </a>
                                    </div>
                                </div>
    
                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            {/* <img src="assets/images/brands/bitbucket.png" alt="bitbucket"> */}
                                            <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            {/* <img src="assets/images/brands/dropbox.png" alt="dropbox"> */}
                                            <span>Dropbox</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            {/* <img src="assets/images/brands/g-suite.png" alt="G Suite"> */}
                                            <span>G Suite</span>
                                        </a>
                                    </div>
                
                                </div>
                            </div>
    
                        </div>
                    </li>

                    <li className="notification-list">
                        <a className="nav-link end-bar-toggle" href="javascript: void(0);">
                            <i className="dripicons-gear noti-icon"></i>
                        </a>
                    </li>
    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            <span className="account-user-avatar"> 
                                {/* <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"> */}
                            </span>
                            <span>
                                <span className="account-user-name">Dominic Keller</span>
                                <span className="account-position">Founder</span>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                            {/* <!-- item--> */}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-circle me-1"></i>
                                <span>My Account</span>
                            </a>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-edit me-1"></i>
                                <span>Settings</span>
                            </a>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lifebuoy me-1"></i>
                                <span>Support</span>
                            </a>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lock-outline me-1"></i>
                                <span>Lock Screen</span>
                            </a>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-logout me-1"></i>
                                <span>Logout</span>
                            </a>
    
                        </div>
                    </li>

                </ul>
                <a className="button-menu-mobile disable-btn">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <div className="app-search dropdown">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." id="top-search"/>
                            <span className="mdi mdi-magnify search-icon"></span>
                            <button className="input-group-text btn-primary" type="submit">Search</button>
                        </div>
                    </form>
                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                        {/* <!-- item--> */}
                        <div className="dropdown-header noti-title">
                            <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                        </div>
    
                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-notes font-16 me-1"></i>
                            <span>Analytics Report</span>
                        </a>
    
                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-life-ring font-16 me-1"></i>
                            <span>How can I help you?</span>
                        </a>
    
                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-cog font-16 me-1"></i>
                            <span>User profile settings</span>
                        </a>
    
                        {/* <!-- item--> */}
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                        </div>
    
                        <div className="notification-list">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="d-flex">
                                    {/* <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32"> */}
                                    <div className="w-100">
                                        <h5 className="m-0 font-14">Erwin Brown</h5>
                                        <span className="font-12 mb-0">UI Designer</span>
                                    </div>
                                </div>
                            </a>
    
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="d-flex">
                                    {/* <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32"> */}
                                    <div className="w-100">
                                        <h5 className="m-0 font-14">Jacob Deo</h5>
                                        <span className="font-12 mb-0">Developer</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
            <div className="content-page" >
                    <div className="content" >
                        
                        {/* <!-- start page title --> */}
                        <div className="row" >
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Tasks</a></li>
                                            <li className="breadcrumb-item active">Task Detail</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Task Detail</h4>
                                </div>
                            </div>
                        </div>     
                        {/* <!-- end page title -->  */}

                        <div className="row">
                            <div className="col-xxl-8 col-xl-7">
                                {/* <!-- project card --> */}
                                <div className="card d-block" >
                                    <div className="card-body" >
                                        <div className="dropdown card-widgets">
                                            <a href="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className='uil uil-ellipsis-h'></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className='uil uil-file-upload me-1'></i>Attachment
                                                </a>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className='uil uil-edit me-1'></i>Edit
                                                </a>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className='uil uil-file-copy-alt me-1'></i>Mark as Duplicate
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" className="dropdown-item text-danger">
                                                    <i className='uil uil-trash-alt me-1'></i>Delete
                                                </a>
                                            </div>
                                             {/* <!-- end dropdown menu--> */}
                                        </div> 
                                        {/* <!-- end dropdown--> */}
                                        
                                        <div className="form-check float-start">
                                            <input type="checkbox" className="form-check-input" id="completedCheck"/>
                                            <label className="form-check-label" >
                                                Mark as completed
                                            </label>
                                        </div> 
                                        {/* <!-- end form-check--> */}
                                        
                                        <div className="clearfix"></div>

                                        <h3 className="mt-3">Draft the new contract document for sales team</h3>

                                        <div className="row">
                                            <div className="col-6">
                                                {/* <!-- assignee --> */}
                                                <p className="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">Assigned To</p>
                                                <div className="d-flex">
                                                    <img src={Arya} alt="Arya S" className="rounded-circle me-2" height="24" />
                                                    <div>
                                                        <h5 className="mt-1 font-14">
                                                            Arya Stark
                                                        </h5>
                                                    </div>
                                                </div>
                                                {/* <!-- end assignee --> */}
                                            </div> 
                                            {/* <!-- end col --> */}

                                            <div className="col-6">
                                                {/* <!-- start due date --> */}
                                                <p className="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">Due Date</p>
                                                <div className="d-flex">
                                                    <i className='uil uil-schedule font-18 text-success me-1'></i>
                                                    <div>
                                                        <h5 className="mt-1 font-14">
                                                            Today 10am
                                                        </h5>
                                                    </div>
                                                </div>
                                                {/* <!-- end due date --> */}
                                            </div> 
                                            {/* <!-- end col --> */}
                                        </div> 
                                        {/* <!-- end row --> */}


                                        <h5 className="mt-3">Overview:</h5>

                                        <p className="text-muted mb-4">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                                        </p>

                                        {/* <!-- start sub tasks/checklists --> */}
                                        <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>
                                        <div className="form-check mt-1">
                                            <input type="checkbox" className="form-check-input" id="checklist1"/>
                                            <label className="form-check-label strikethrough" >
                                                Find out the old contract documents
                                            </label>
                                        </div>
                                        
                                        <div className="form-check mt-1">
                                            <input type="checkbox" className="form-check-input" id="checklist2"/>
                                            <label className="form-check-label strikethrough" >
                                                Organize meeting sales associates to understand need in detail
                                            </label>
                                        </div>
                                        
                                        <div className="form-check mt-1">
                                            <input type="checkbox" className="form-check-input" id="checklist3"/>
                                            <label className="form-check-label strikethrough">
                                                Make sure to cover every small details
                                            </label>
                                        </div>
                                        {/* <!-- end sub tasks/checklists --> */}

                                    </div> 
                                    {/* <!-- end card-body--> */}
                                    
                                </div> 
                                {/* <!-- end card--> */}

                                <div className="card" >
                                    <div className="card-header">
                                        <h4 className="my-1">Comments (51)</h4>
                                    </div>
                                    <div className="card-body">
                                        
                                        <div className="d-flex">
                                            <img className="me-2 rounded-circle" src="assets/images/users/avatar-3.jpg"
                                                alt="Generic placeholder image" height="32"/>
                                            <div className="w-100">
                                                <h5 className="mt-0">Jeremy Tomlinson <small className="text-muted float-end">5 hours ago</small></h5>
                                                Nice work, makes me think of The Money Pit.

                                                <br/>
                                                <a href="javascript: void(0);" className="text-muted font-13 d-inline-block mt-2"><i
                                                    className="mdi mdi-reply"></i> Reply</a>

                                                <div className="d-flex mt-3">
                                                    <a className="pe-2" href="#">
                                                        <img src="assets/images/users/avatar-4.jpg" className="rounded-circle"
                                                            alt="Generic placeholder image" height="32"/>
                                                    </a>
                                                    <div className="w-100">
                                                        <h5 className="mt-0">Thelma Fridley <small className="text-muted float-end">3 hours ago</small></h5>
                                                        i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.

                                                        <br/>
                                                        <a href="javascript: void(0);" className="text-muted font-13 d-inline-block mt-2">
                                                            <i className="mdi mdi-reply"></i> Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex mt-3">
                                            <img className="me-2 rounded-circle" src="assets/images/users/avatar-5.jpg"
                                                alt="Generic placeholder image" height="32"/>
                                            <div className="w-100">
                                                <h5 className="mt-0">Kevin Martinez <small className="text-muted float-end">1 day ago</small></h5>
                                                It would be very nice to have.

                                                <br/>
                                                <a href="javascript: void(0);" className="text-muted font-13 d-inline-block mt-2"><i
                                                    className="mdi mdi-reply"></i> Reply</a>
                                            </div>
                                        </div>

                                        <div className="text-center mt-2">
                                            <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1"></i> Load more </a>
                                        </div>

                                        <div className="border rounded mt-4">
                                            <form action="#" className="comment-area-box">
                                                <textarea className="form-control border-0 resize-none" placeholder="Your comment..."></textarea>
                                                <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <a href="#" className="btn btn-sm px-1 btn-light"><i className='mdi mdi-upload'></i></a>
                                                        <a href="#" className="btn btn-sm px-1 btn-light"><i className='mdi mdi-at'></i></a>
                                                    </div>
                                                    <button type="submit" className="btn btn-sm btn-success"><i className='uil uil-message me-1'></i>Submit</button>
                                                </div>
                                            </form>
                                        </div> 
                                        {/* <!-- end .border--> */}

                                    </div> 
                                    {/* <!-- end card-body--> */}
                                </div>
                                {/* <!-- end card--> */}
                            </div>
                             {/* <!-- end col --> */}

                            <div className="col-xxl-4 col-xl-5" >

                                <div className="card" >
                                    <div className="card-body" >
                                        <h5 className="card-title mb-3">Attachments</h5>

                                        <form action="/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
                                            data-upload-preview-template="#uploadPreviewTemplate" >
                                            <div className="fallback">
                                                <input name="file" type="file" />
                                            </div>

                                            <div className="dz-message needsclick">
                                                <i className="h3 text-muted dripicons-cloud-upload"></i>
                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                        </form>

                                        {/* <!-- Preview --> */}
                                        <div className="dropzone-previews mt-3" id="file-previews"></div>

                                        {/* <!-- file preview template --> */}
                                        <div className="d-none" id="uploadPreviewTemplate">
                                            <div className="card mt-1 mb-0 shadow-none border">
                                                <div className="p-2">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt=""/>
                                                        </div>
                                                        <div className="col ps-0">
                                                            <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name></a>
                                                            <p className="mb-0" data-dz-size></p>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* <!-- Button --> */}
                                                            <a href="" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                <i className="dripicons-cross"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end file preview template --> */}


                                        <div className="card my-1 shadow-none border" >
                                            <div className="p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded">
                                                                .ZIP
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-0">
                                                        <a href="javascript:void(0);" className="text-muted fw-bold">Hyper-admin-design.zip</a>
                                                        <p className="mb-0">2.3 MB</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* <!-- Button --> */}
                                                        <a href="javascript:void(0);" className="btn btn-link btn-lg text-muted">
                                                            <i className="dripicons-download"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-1 shadow-none border" >
                                            <div className="p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <img src="assets/images/projects/project-1.jpg" className="avatar-sm rounded" alt="file-image" />
                                                    </div>
                                                    <div className="col ps-0">
                                                        <a href="javascript:void(0);" className="text-muted fw-bold">Dashboard-design.jpg</a>
                                                        <p className="mb-0">3.25 MB</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* <!-- Button --> */}
                                                        <a href="javascript:void(0);" className="btn btn-link btn-lg text-muted">
                                                            <i className="dripicons-download"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-0 shadow-none border">
                                            <div className="p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title bg-secondary text-light rounded">
                                                                .MP4
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-0">
                                                        <a href="javascript:void(0);" className="text-muted fw-bold">Admin-bug-report.mp4</a>
                                                        <p className="mb-0">7.05 MB</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* <!-- Button --> */}
                                                        <a href="javascript:void(0);" className="btn btn-link btn-lg text-muted">
                                                            <i className="dripicons-download"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                        
                    </div>
                     {/* <!-- End Content --> */}

                    {/* <!-- Footer Start --> */}
                  
                    {/* <!-- end Footer --> */}

                </div>
            </div>
    );
  }
}
