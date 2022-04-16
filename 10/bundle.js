/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./src/mock/event.js":
/*!***************************!*\
  !*** ./src/mock/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "generateCostServise": () => (/* binding */ generateCostServise),
/* harmony export */   "generateEvent": () => (/* binding */ generateEvent)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateOrderType = () => {
  const titles = [
    'taxi',
    'flight',
    'drive',
    'check-in',
    'sightseeing'];
  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};


const generateTitle = (key) => {
  const titles =
    {
      'taxi':'Taxi Amsterdam',
      'flight':'Flight Chamonix',
      'drive':'Drive Chamonix',
      'check-in':'Check-in Chamonix',
      'sightseeing':'Sightseeing Chamonix'
    };
  //   if (titles.hasOwnProperty(key))
  if (key in titles)
  {
    return titles[key];
  }
  else
  {
    return titles['taxi'];
  }
};

const generateIcon = (key) => {
  const iconArray = {
    'taxi':'img/icons/taxi.png',
    'flight':'img/icons/flight.png',
    'drive':'img/icons/drive.png',
    'check-in':'img/icons/check-in.png',
    'sightseeing':'img/icons/sightseeing.png'
  };

  return iconArray[key];
};


const generateCost = () =>{
  const randomNumber = getRandomInteger(1, 60);
  const cost = randomNumber * 5;
  return (cost);
};

const getFavoriteEvent = () => {
  const bollearnArray = [false, true];
  const randomIndex = getRandomInteger(0,1);

  return bollearnArray[randomIndex];
};

const getDate = () =>{
  const randomNumber = getRandomInteger(0, 180);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(randomNumber, 'day').format('MMM DD');
};

const getWaitingTime = () =>
{
  const randomNumber = getRandomInteger(1, 24);
  return randomNumber * 5;
};

const getTimePeriod = (waitingTime) =>
{
  const randomHour = getRandomInteger(9, 23);
  const startRandomMinute = getRandomInteger(0, 11) * 5;
  const startPeriod = new Date();
  startPeriod.setHours(randomHour, startRandomMinute);
  const endPeriod = new Date();
  endPeriod.setHours(startPeriod.getHours());
  endPeriod.setMinutes(startPeriod.getMinutes() + waitingTime);
  return [`${startPeriod.getHours()}:${startPeriod.getMinutes()}`, `${endPeriod.getHours()}:${endPeriod.getMinutes()}`];
};

const generateServises = (key) =>{
  const servises = {
    'taxi':'Order Uber',
    'flight':'Add luggage',
    'drive':'Rent a car',
    'check-in':'Add breakfast',
    'sightseeing':'Book tickets'
  };
  return servises[key];
};

const generateCostServise = (key) =>
{
  const serviseCost = {
    'taxi':'€  20',
    'flight':'€  50',
    'drive':'€  200',
    'check-in':'€  50',
    'sightseeing':'€  40'
  };
  return serviseCost[key];
};

const getRandomImages = () => {
  const imagesIndexes = [];
  for(let i = 0; i < 5; i++){
    imagesIndexes.push(`http://picsum.photos/248/152?r=${Math.random() * 20}`);
  }
  return imagesIndexes;
};

const generateEvent = () => {
  const orderType = generateOrderType();
  const waitingTime = getWaitingTime();
  return {
    data : getDate(),
    eventIcon : generateIcon(orderType),
    eventTitle : generateTitle(orderType),
    periodTime : getTimePeriod(waitingTime),
    waitingTime : `${waitingTime}M`,
    eventCost : generateCost(),
    eventServises : generateServises(orderType),
    serviseCost : generateCostServise(orderType),
    id : (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
    isFavorite : getFavoriteEvent(),
    imgIndexes : getRandomImages(),
  };
};



/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_site_edit_events_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-edit-events-view */ "./src/view/site-edit-events-view.js");
/* harmony import */ var _view_site_events_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-events-view */ "./src/view/site-events-view.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

class PointPresenter{
    #tripEventContainer = null;
    #tripEditComponent = null;
    #tripEventComponent = null;
    #changeData = null;
    #mode = Mode.DEFAULT;

    #event = null
    constructor(taskEventComponent, dataChange){
      this.#tripEventContainer = taskEventComponent;
      this.#changeData = dataChange;
    }

    init = (event) =>{
      this.#event = event;

      const prevEventComponent = this.#tripEventComponent;
      const prevEditEventComponent = this.#tripEditComponent;

      this.#tripEventComponent= new _view_site_events_view__WEBPACK_IMPORTED_MODULE_1__["default"](event);
      this.#tripEditComponent = new _view_site_edit_events_view__WEBPACK_IMPORTED_MODULE_0__["default"](event);

      this.#tripEventComponent.setEditCardToFormClickHandler(this.#handleEditForm);
      this.#tripEventComponent.setFavoriteClickHandler(this.#handleFavoriteClick);

      this.#tripEditComponent.setEditFormToCardClickHandler(() => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(this.#tripEventComponent, this.#tripEditComponent);
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      });

      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#tripEventContainer, this.#tripEventComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
      if(this.#mode === Mode.DEFAULT && prevEventComponent)
      {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(this.#tripEventComponent, prevEventComponent);
      }

      if(this.#mode === Mode.EDITING && prevEditEventComponent)
      {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(this.#tripEditComponent, prevEditEventComponent);
      }
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEditEventComponent);
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEventComponent);
    }

    destroy = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(this.TripEditEventView);
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(this.#tripEventComponent);
    };

    #handleFormSubmit = (event) =>{
      this.#changeData(event);
      this.#replaceFormToCard();


    }

    #handleFavoriteClick = () =>{
      this.#changeData({...this.#event, isFavorite: !this.#event.isFavorite});
    }

    #handleArchiveClick = () =>{
      this.#changeData({...this.#event, isArchive: !this.#event.isArchive});
    }

    #handleEditForm = () => {
      this.#replaceCardToForm();
    }

    #replaceFormToCard = () => {
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(this.#tripEventComponent, this.#tripEditComponent);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
      this.#mode = Mode.DEFAULT;
    }

    #replaceCardToForm =()=>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(this.#tripEditComponent, this.#tripEventComponent);
      document.addEventListener('keydown', this.#escKeyDownHandler);
      this.#mode = Mode.EDITING;
    }

    #escKeyDownHandler = (evt) =>{
      if(evt.key === 'Escape' || evt.key === 'Esc'){
        evt.preventDefault();

        this.#replaceFormToCard();
      }
    }
}


/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_no_events_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/no-events-view */ "./src/view/no-events-view.js");
/* harmony import */ var _view_site_event_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-event-container */ "./src/view/site-event-container.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_trip_controls_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/trip-controls-template */ "./src/view/trip-controls-template.js");
/* harmony import */ var _view_sort_ticket_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/sort-ticket-view */ "./src/view/sort-ticket-view.js");
/* harmony import */ var _view_site_filter_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/site-filter-view */ "./src/view/site-filter-view.js");
/* harmony import */ var _point_presenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point-presenter */ "./src/presenter/point-presenter.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");









class TripPresenter {
    #tripComponent = null;
    #tripControlsComponent = null;
    #tripFiltersComponent = null;

    #noTripComponent = new _view_no_events_view__WEBPACK_IMPORTED_MODULE_0__["default"]();
    #controlsTemplate = new _view_trip_controls_template__WEBPACK_IMPORTED_MODULE_3__["default"]();
    #sortTicketTemplate = new _view_sort_ticket_view__WEBPACK_IMPORTED_MODULE_4__["default"]();
    #siteFiltersTemplate = new _view_site_filter_view__WEBPACK_IMPORTED_MODULE_5__["default"]();
    #firstTicketTemplate = null;

    #pointPresenter = new Map();
    #events = [];

    constructor(tripComponent, tripControlsComponent, tripFiltersComponent){
      this.#tripComponent = tripComponent;
      this.#tripControlsComponent = tripControlsComponent;
      this.#tripFiltersComponent = tripFiltersComponent;
    }

    init = (events) =>{
      this.#events = [...events];
      this.#firstTicketTemplate = new _view_site_event_container__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.#renderTrip();
    }

    #renderNoTrip = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#tripComponent, this.#noTripComponent.element, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
    }

    #renderTripEvent = (event) =>{
      const pointPresenter = new _point_presenter__WEBPACK_IMPORTED_MODULE_6__["default"](this.#firstTicketTemplate, this.#handleEventChange);
      pointPresenter.init(event);
      this.#pointPresenter.set(event.id, pointPresenter);
    }

    #renderTripEvents = () =>{
      this.#events
        .forEach((event) => this.#renderTripEvent(event));
    }

    #renderTicketTemplate = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#sortTicketTemplate.element, this.#firstTicketTemplate.element, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
    }

    #renderControlsTemplate = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#tripControlsComponent, this.#controlsTemplate.element, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
    }

    #renderSortTemplate = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#tripComponent, this.#sortTicketTemplate.element, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREBEGIN);
    }

    #renderFilters = () =>{
      ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(this.#tripFiltersComponent, this.#siteFiltersTemplate.element, _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
    }

    #renderTopNavbar = ()=>{
      this.#renderControlsTemplate();
      this.#renderFilters();
      this.#renderSortTemplate();
    }

    #renderTrip = () =>{
      if((this.#events.every((event) => event.isArchive))){
        this.#renderNoTrip();
        return;
      }

      this.#renderTopNavbar();
      this.#renderTicketTemplate();
      this.#renderTripEvents();

    }

    #handleEventChange = (updatedEvent) => {
      this.#events = (0,_utils_common__WEBPACK_IMPORTED_MODULE_7__.updateItem)(this.#events, updatedEvent);
      this.#pointPresenter.get(updatedEvent.id).init(updatedEvent);
    }

    #clearEventsList = () =>{
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();
    }
}



/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const updateItem = (items, update) =>{
  const index = items.findIndex((item) => item.id === update.id);
  if(index === -1){
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];

};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-class */ "./src/view/abstract-class.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin' ,
  AFTERBEGIN: 'afterbegin' ,
  BEFOREEND : 'beforeend' ,
  AFTEREND : 'afterend' ,
};

const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch(place){
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;
    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newElement, oldElement) =>
{
  if(newElement === null || oldElement === null){
    throw('Нельзя добавить несуществующие элементы');
  }

  const newChild = newElement instanceof _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;

  const parent = oldChild.parentElement;
  if(parent === null){
    throw('Не существует родительский элемент');
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if(component === null){
    return;
  }

  if(!(component instanceof _view_abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"])){
    throw('Cant remove only components');
  }

  component.element.remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract-class.js":
/*!************************************!*\
  !*** ./src/view/abstract-class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractClass)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class AbstractClass {
    #element = null;
    _callback = {};

    get element(){
      if(!this.#element){
        this.#element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template);
      }

      return this.#element;
    }

    get template(){
      throw('метод tempalte не реализован у наследника');
    }

    removeElement(){
      this.#element = null;
    }
}


/***/ }),

/***/ "./src/view/no-events-view.js":
/*!************************************!*\
  !*** ./src/view/no-events-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoTripEventElement)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createNoTripEventTemplate = () => (
  `<p class="trip-events__msg">
        Click New Event to create your first point
    </p>`
);
class NoTripEventElement extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]{
  get template(){
    return createNoTripEventTemplate();
  }
}


/***/ }),

/***/ "./src/view/site-edit-events-view.js":
/*!*******************************************!*\
  !*** ./src/view/site-edit-events-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripEditEventView)
/* harmony export */ });
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/event */ "./src/mock/event.js");
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const eventData = _mock_event__WEBPACK_IMPORTED_MODULE_0__.generateEvent;

const createEventsTemplate = (event) => {
  const { eventIcon,
    eventTitle} = event;
  const imgIndexes = event.imgIndexes;
  return `<section class="trip-events">
  <h2 class="visually-hidden">Trip events</h2>
  

  <ul class="trip-events__list">
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="${eventIcon}" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                <div class="event__type-item">
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${eventTitle}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                <label class="event__offer-label" for="event-offer-luggage-1">
                  <span class="event__offer-title">Add luggage</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
                <label class="event__offer-label" for="event-offer-comfort-1">
                  <span class="event__offer-title">Switch to comfort class</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">100</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
                <label class="event__offer-label" for="event-offer-meal-1">
                  <span class="event__offer-title">Add meal</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">15</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
                <label class="event__offer-label" for="event-offer-seats-1">
                  <span class="event__offer-title">Choose seats</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">5</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
                <label class="event__offer-label" for="event-offer-train-1">
                  <span class="event__offer-title">Travel by train</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">40</span>
                </label>
              </div>
            </div>
          </section>
        </section>
        
        <section class="event__details">
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        <img class="event__photo" src=${imgIndexes[0]} alt="Event photo">
                        <img class="event__photo" src=${imgIndexes[1]} alt="Event photo">
                        <img class="event__photo" src=${imgIndexes[2]} alt="Event photo">
                        <img class="event__photo" src=${imgIndexes[3]} alt="Event photo">
                        <img class="event__photo" src=${imgIndexes[4]} alt="Event photo">                        
                      </div>
                    </div>
                  </section>
        </section>
      </form>
    </li>
    </ul>
    </section>     
  `;
};

class TripEditEventView extends _abstract_class__WEBPACK_IMPORTED_MODULE_1__["default"]{
  #tripEvent = null;

  constructor(tripEvent = eventData){
    super();
    this.#tripEvent = tripEvent;
  }

  get template() {
    return createEventsTemplate(this.#tripEvent);
  }

  setEditFormToCardClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event--edit').addEventListener('submit', this.#editClickHandler);
    // this.element.querySelector('.event--edit').addEventListener('click', this.#editClickHandler);
    // this.element.querySelector('.event__reset-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }
}



/***/ }),

/***/ "./src/view/site-event-container.js":
/*!******************************************!*\
  !*** ./src/view/site-event-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEventContainer": () => (/* binding */ createEventContainer),
/* harmony export */   "default": () => (/* binding */ EventContainer)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createEventContainer = () => '<div class="trip-events__list"></div>';

class EventContainer extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]
{
  get template() {
    return createEventContainer();
  }
}


/***/ }),

/***/ "./src/view/site-events-view.js":
/*!**************************************!*\
  !*** ./src/view/site-events-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripEventView)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createEventsTemplate = (event) => {
  const {data, eventIcon,
    eventTitle,
    periodTime,
    waitingTime,
    eventCost,
    eventServises,
    isFavorite, serviseCost} = event;

  const favoriteClass = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  return `<li class="trip-events__item">
  <div class="event">
        <time class="event__date" datetime="2019-03-18">${data}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${eventIcon}" alt="Event type icon">
        </div>
        <h3 class="event__title">${eventTitle}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${periodTime[0]}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${periodTime[1]}</time>
          </p>
          <p class="event__duration">${waitingTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${eventCost}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${eventServises}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${serviseCost}</span>
          </li>
        </ul>
        <button class="${favoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div></li>`;
};

class TripEventView extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]{
  #tripEvent = null;

  constructor(tripEvent){
    super();
    this.#tripEvent = tripEvent;
  }

  get template() {
    return createEventsTemplate(this.#tripEvent);
  }

  setEditCardToFormClickHandler = (callback) => {
    this._callback.editCardToFormClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editCardToFormClick();
  }

  setFavoriteClickHandler = (callback) =>{
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #favoriteClickHandler = (evt) =>{
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}


/***/ }),

/***/ "./src/view/site-filter-view.js":
/*!**************************************!*\
  !*** ./src/view/site-filter-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteFiltersView)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createFilterTemlate = () =>(
  `<section>
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form></section>
  `
);
class SiteFiltersView extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]{
  get template(){
    return createFilterTemlate();
  }
}


/***/ }),

/***/ "./src/view/sort-ticket-view.js":
/*!**************************************!*\
  !*** ./src/view/sort-ticket-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortTicketView)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createSortTemplate = () => `<div class="page-body__container"><section class='trip-events'><form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form></section></div>
  
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`;

class SortTicketView extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]{
  get template(){

    return createSortTemplate();
  }
}


/***/ }),

/***/ "./src/view/trip-controls-template.js":
/*!********************************************!*\
  !*** ./src/view/trip-controls-template.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlsTemplate)
/* harmony export */ });
/* harmony import */ var _abstract_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-class */ "./src/view/abstract-class.js");


const createControlsTemplate = () => (`<div class='trip-main__trip-controls'>
<div class="trip-controls__navigation"><h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav></div></div>`);

class ControlsTemplate extends _abstract_class__WEBPACK_IMPORTED_MODULE_0__["default"]{
  get template(){
    return createControlsTemplate();
  }

}


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");
/* harmony import */ var _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/trip-presenter */ "./src/presenter/trip-presenter.js");



const eventCount = 8;
const events = Array.from({length: eventCount}, _mock_event__WEBPACK_IMPORTED_MODULE_0__.generateEvent);
const tripBody = document.querySelector('.page-body');
const tripControls = tripBody.querySelector('.trip-main');
const siteMain = tripBody.querySelector('.page-main');
const tripFilters = tripBody.querySelector('.trip-controls__filters');

const tripPresenterContainer = new _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_1__["default"](siteMain, tripControls, tripFilters);
tripPresenterContainer.init(events);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map