/**
 * Request地址请求设置
 * 
 * @module {Object} host
 * @vars {String} localUrl 前端本地地址
 * @vars {String} localPort 前端本地端口
 * @vars {String} dir 接口前缀,和后端接口一致
 * @vars {String} localHost 前端请求域，端口和后端NodeJs一致
 * @attr {String} baseHost 导出模块的属性--前端请求域
 * @attr {} mine 
 * @attr {} login
 * @attr {} loginCellPhone
 * @attr {} loginRefresh 登录信息刷新
 * @attr {} banner 
 * @attr {} playListCatList 歌单类型列表
 * @attr {} playListHot 歌单类型列表-热门类型
 * @attr {} personal 推荐歌单
 * @attr {} personalNew 推荐新音乐
 * @attr {} personalMv 推荐mv
 * @attr {} personalPri 独家放送
 * @attr {} personalDj 推荐dj
 * @attr {} recommendSongs 每日推荐歌曲
 * @attr {} recommendDisLike 取消推荐
 * @attr {} recommendResource 每日推荐歌单
 * @attr {} playListTracks 收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
 * @attr {} search 搜索
 * @attr {} searchMult 搜索 multimatch
 * @attr {} searchHot 搜索 hot
 * @attr {} searchSuggest 搜索 suggest
 * @attr {} fm fm
 * @attr {} lyric 歌词
 * @attr {} topArtist 热门歌手
 * @attr {} topSong 新歌上架 ,type ALL, ZH,EA,KR,JP
 * @attr {} topAlbum 新碟上架 ,type ALL, ZH,EA,KR,JP
 * @attr {} topMv mv 排行,type ALL, ZH,EA,KR,JP
 * @attr {} topMvFirst  mv 最新mv,type ALL, ZH,EA,KR,JP
 * @attr {} topPlayList  分类歌单
 * @attr {} topPlayListHigh 精品歌单
 * @attr {} semiPlayList simi相似歌单
 * @attr {} simiSong simi歌曲
 * @attr {} simiUser simi关注的用户
 * @attr {} comments 评论
 * @attr {} artist 艺术家
 * @attr {} artistSub 关注歌手
 * @attr {} artistAlum 艺术家-专辑
 * @attr {} artistMv 艺术家-mv
 * @attr {} artistDesc 艺术家 信息
 * @attr {} artistSimi 艺术家 ,相似歌手
 * @attr {} userSubcount 个人信息，歌单，收藏，mv,dj数量
 * @attr {} userCloud  云盘数据
 * @attr {} userCloudSerch 云盘数据搜索
 * @attr {} mv mv detail
 * @attr {} mvSimi simi mv
 * @attr {} mvUrl mv播放地址
 * @attr {} musicDetail 单曲详情
 * @attr {} albumDetail 专辑详情
 * @attr {} musicUrl 单曲播放地址
 * @attr {} userDetail 用户详情
 * @attr {} userPlayList 用户歌单
 * @attr {} userRadio 用户电台
 * @attr {} userFollows 用户关注列表
 * @attr {} follow 关注,取消关注，用户
 * @attr {} userFolloweds 用户粉丝列表
 * @attr {} playListDetail 歌单详情
 * @attr {} palyListImg 歌单详情-旧，获取封面
 * @attr {} signin 签到
 * @attr {} record 听歌记录 uid,type 0所以，1 week，
 * @attr {} likeList 红心歌曲
 * @attr {} programLike program-like
 * @attr {} djradioCatlist 电台类型列表
 * @attr {} programRecommend 推荐节目
 * @attr {} djRadioRecommend 精选电台
 * @attr {} djRadioRecommendType 精选电台-分类电台
 * @attr {} djRadioHot 分类电台
 * @attr {} djProgram dj主播 radio
 * @attr {} djProgramDetail dj单期节目program-detail
 * @attr {} djDetail djradio detail
 * @attr {} eventGet 用户动态
 * @attr {} djSub  dj 订阅
 * @attr {} resourceLike program like act
 * @attr {} commentLike comment like act
 * @attr {} songTracks 歌曲喜欢和删除 op=like or trash,songid
 * @attr {} userDj 用户电台
 * @attr {} logWeb
 * @attr {String} id2Url
 * @attr {String} topList toplist
 * @attr {String} playListAll playlistall
 * @attr {String} topListDetail 排行榜详细
 * @attr {String} topListArtist 艺术家分类
 */

const localUrl = 'http://192.168.1.15';
const localPort = '3000';
const dir = '/v1';
const localHost = `${localUrl}:${localPort}${dir}`;
export default {
  baseHost: localHost,
  mine: `${localHost}/mine`,
  login: `${localHost}/login`,
  loginCellPhone: `${localHost}/login/cellphone`,
  loginRefresh: `${localHost}/login/refresh`,
  banner: `${localHost}/banner`,
  playListCatList: `${localHost}/playlist/catlist`,
  playListHot: `${localHost}/playlist/hot`,
  personal: `${localHost}/personalized`,
  personalNew: `${localHost}/personalized/newsong`,
  personalMv: `${localHost}/personalized/mv`,
  personalPri: `${localHost}/personalized/privatecontent`,
  personalDj: `${localHost}/personalized/djprogram`,
  recommendSongs: `${localHost}/recommend/songs`,
  recommendDisLike: `${localHost}/recommend/dislike`,
  recommendResource: `${localHost}/recommend/resource`,
  playListTracks: `${localHost}/playlist/tracks`,
  search: `${localHost}/search`,
  searchMult: `${localHost}/search/multimatch`,
  searchHot: `${localHost}/search/hot`,
  searchSuggest: `${localHost}/search/suggest`,
  fm: `${localHost}/fm`,
  lyric: `${localHost}/lyric`,
  topArtist: `${localHost}/top/artist`,
  topSong: `${localHost}/top/songs`,
  topAlbum: `${localHost}/top/album`,
  topMv: `${localHost}/top/mv`,
  topMvFirst: `${localHost}/top/mv/first`,
  topPlayList: `${localHost}/top/playlist`,
  topPlayListHigh: `${localHost}/top/playlist/highquality`,
  simiPlayList: `${localHost}/simi/playlist`,
  simiSong: `${localHost}/simi/song`,
  simiUser: `${localHost}/simi/user`,
  comments: `${localHost}/comments`,
  artist: `${localHost}/artist`,
  artistSub: `${localHost}/sub`,
  artistAlum: `${localHost}/artist/album`,
  artistMv: `${localHost}/artist/mv`,
  artistDesc: `${localHost}/artist/desc`,
  artistSimi: `${localHost}/artist/simi`,
  userSubcount: `${localHost}/user/subcount`,
  userCloud: `${localHost}/user/cloud`,
  userCloudSerch: `${localHost}/user/cloud/search`,
  mv: `${localHost}/mv`,
  mvSimi: `${localHost}/mv/simi`,
  mvUrl: `${localHost}/mv/url`,
  musicDetail: `${localHost}/music/detail`,
  albumDetail: `${localHost}/album/detail`,
  musicUrl: `${localHost}/music/url`,
  userDetail: `${localHost}/user/detail`,
  userPlayList: `${localHost}/user/playlist`,
  userRadio: `${localHost}/user/radio`,
  userFollows: `${localHost}/user/follows`,
  follow: `${localHost}/follow`,
  userFolloweds: `${localHost}/user/followeds`,
  playListDetail: `${localHost}/playlist/detail`,
  palyListImg: `${localHost}/playlist/img`,
  signin: `${localHost}/daily_signin`,
  record: `${localHost}/record`,
  likeList: `${localHost}/likelist`,
  programLike: `${localHost}/program/like`,
  djradioCatlist: `${localHost}/djradio/catelist`,
  programRecommend: `${localHost}/program/recommend`,
  djRadioRecommend: `${localHost}/djradio/recommend`,
  djRadioRecommendType: `${localHost}/djradio/recommend/type`,
  djRadioHot: `${localHost}/djradio/hot`,
  djProgram: `${localHost}/dj/program`,
  djProgramDetail: `${localHost}/program/detail`,
  djDetail: `${localHost}/dj/detail`,
  eventGet: `${localHost}/event/get`,
  djSub: `${localHost}/dj/sub`,
  resourceLike: `${localHost}/resource/like`,
  commentLike: `${localHost}/comment/like`,
  songTracks: `${localHost}/song/tracks`,
  userDj: `${localHost}/user/dj`,
  logWeb: `${localHost}/log/web`,
  id2Url: `${localHost}/id2url`,
  topList: `${localHost}/toplist`,
  playListAll: `${localHost}/playlist/all`,
  topListDetail: `${localHost}/toplist/detail`,
  topListArtist: `${localHost}/toplist/artist`
}



