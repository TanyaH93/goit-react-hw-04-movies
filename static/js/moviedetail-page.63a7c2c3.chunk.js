(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{30:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s}));var a=n(38),r=n.n(a),c="e20119b92c04fa8f0a03b4993a47ca97",i=function(){var e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c);return r.a.get(e)},o=function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false");return r.a.get(t)},u=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US");return r.a.get(t)},l=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c);return r.a.get(t)},s=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1");return r.a.get(t)}},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i}));var a=function(e){var t=e.poster_path,n=e.title,a=e.popularity,r=e.overview,c=e.genres;return{image:t?"https://image.tmdb.org/t/p/w400"+t:t,title:n,userScore:Math.round(a),overview:r,genres:c.map((function(e){return e.name})).join(" ")}},r=function(e){return e.map((function(e){var t=e.id,n=e.profile_path;return{id:t,image:n?"https://image.tmdb.org/t/p/w400"+n:n,name:e.name,character:e.character}}))},c=function(e){return e.map((function(e){return{id:e.id,title:e.title}}))},i=function(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}},39:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},65:function(e,t,n){e.exports={ArticleWrapper:"Article_ArticleWrapper__1hNqR",Button:"Article_Button__2W-ZO",Article:"Article_Article__2kQmX",Description:"Article_Description__Hk5DJ"}},66:function(e,t,n){e.exports={Wrapper:"MovieDetailsPage_Wrapper__1cXlW",H5:"MovieDetailsPage_H5__Yv0nY",Link:"MovieDetailsPage_Link__3sDwV"}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(39),r=n(31),c=n(32),i=n(35),o=n(34),u=n(0),l=n.n(u),s=n(8),p=n(1),m=n(65),f=n.n(m),v=function(e){var t=e.movieData,n=e.onGoback,a=t.title,r=t.image,c=t.userScore,i=t.overview,o=t.genres;return l.a.createElement("div",{className:f.a.ArticleWrapper},l.a.createElement("button",{type:"button",className:f.a.Button,onClick:n},"Go back"),l.a.createElement("article",{className:f.a.Article},l.a.createElement("img",{src:r,alt:"",width:"200px"}),l.a.createElement("div",{className:f.a.Description},l.a.createElement("h2",null,a),l.a.createElement("span",null,"User Score: ",c),l.a.createElement("h3",null,"Overview"),l.a.createElement("p",null,i),l.a.createElement("h4",null,"Genres"),l.a.createElement("p",null,o))),l.a.createElement("div",{className:f.a.Addition}))},d=n(66),h=n.n(d),b=n(33),g=n(30),E=Object(u.lazy)((function(){return n.e(1).then(n.bind(null,75))})),y=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,77))})),_=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movieData:{},locationFrom:null},e.handleGoback=function(){var t=e.props.history,n=e.state.locationFrom;n?t.push(Object(a.a)({},n)):t.push("/")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.location,r=n.params.movieId;g.b(r).then((function(t){var n=t.data;return e.setState({movieData:Object(b.b)(n)})})).catch((function(e){Error({text:e})})),a.state&&a.state.from&&this.setState({locationFrom:a.state.from})}},{key:"componentWillUnmount",value:function(){this.setState({movieData:{}})}},{key:"render",value:function(){var e=this.state.movieData,t=this.props.match,n=t.params.movieId;return l.a.createElement("div",null,e&&l.a.createElement(v,{movieData:e,onGoback:this.handleGoback}),l.a.createElement("div",{className:h.a.Wrapper},l.a.createElement("h5",{className:h.a.H5},"Additional information"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.c,{to:"".concat(t.url,"/cast"),className:h.a.Link},"Cast")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"".concat(t.url,"/reviews"),className:h.a.Link},"Reviews")))),l.a.createElement(u.Suspense,{fallback:l.a.createElement("p",null,"Loading...")},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"".concat(t.url,"/cast"),render:function(){return l.a.createElement(E,{id:n})},id:n}),l.a.createElement(p.a,{path:"".concat(t.url,"/reviews"),render:function(){return l.a.createElement(y,{id:n})},id:n}))))}}]),n}(u.Component)}}]);
//# sourceMappingURL=moviedetail-page.63a7c2c3.chunk.js.map