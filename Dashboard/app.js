/*Container for App grid*/ 
class App extends React.Component {
  render () {
    return(
    <div id="main">
    <Sidebar />
    <Comparables />
    <WebVisitors />
    </div>
    )}
};

/*Style/Images for sidebar*/ 
class Sidebar extends React.Component {
  render () {
      return(
  <div id="sidebar"> 
   <div class="stext">
    <h1>Dashboard</h1>
    <h2>Widget</h2>
    <h2>Reviews</h2>
    <h2>Customers</h2>
    <h2>Online Analysis</h2>
    <h2>Settings</h2>
  <img id="growth" src="images/growth.png"/>
   </div> 
  </div>
    )}
};

/*Container/Images for top 3 gridboxes*/
class Comparables extends React.Component {
  render () {
      return(
    <div id="comparables">
        <div id="comps">
          <div class="comptext">
            <h3>Reviews</h3>
            <h4>1,281</h4>
          </div>
          <div class="images">
            <img id="reviews" src="/images/review.png"/>
          </div> 
        </div>
        <div id="comps">
          <div class="comptext">
            <h3>Average Rating</h3>
            <h4>4.6</h4>
          </div> 
          <div class="images">
            <img id="rate" src="images/ratings.png"/>
          </div>    
        </div>
        <div id="comps">
          <div class="comptext">
            <h3>Sentiment Analysis</h3>
            <h4>960</h4>
            <h4>122</h4>
            <h4>321</h4>
          </div> 
          <div class="images">
            <img id="pie" src="images/piechart1.png"/> 
          </div>  
          </div>        
        </div>
    )}
};

/*Style/Images for WebVisitors*/
class WebVisitors extends React.Component  {
  render () {
      return(
    <div id="webvisitors">
      <div id="wvtext">
        <h3>Website Visitors</h3>
        <h4>821</h4>
      </div>
       <img id="graph" src="images/graph.png"/>
    </div>
    )}
};

/*Displays App on Live Server*/
ReactDOM.render(
<App />, document.querySelector('.main')
);


