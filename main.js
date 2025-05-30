
const channels = [
  
      { 
        name: 'T Sports HD', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/200px-T_Sports_logo.svg.png', 
        url: 'https://live.tsports.com/mobile_hls/tsports_live_2/playlist.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },
      { 
        name: 'T Sports HD', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/200px-T_Sports_logo.svg.png', 
        url: 'https://tv.mymoviebazar.net/stream/stream56.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },
      { 
        name: 'T Sports HD', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/200px-T_Sports_logo.svg.png', 
        url: 'https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },

      { 
        name: 'T Sports HD', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/200px-T_Sports_logo.svg.png', 
        url: 'https://www.tbn24.com/api/video/4031_0.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },

      { 
        name: 'TOFFEE LIVE',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_of_Toffee.svg/250px-Logo_of_Toffee.svg.png', 
        url: 'https://tv.bdixtv24.com/toffee/live.php?id=9b4b3941986a&e=.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },

      { 
        name: 'Star Sports 1',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Star_Sports_1_HD.png/2560px-Star_Sports_1_HD.png', 
        url: 'https://www.tbn24.com/api/video/4028_0.m3u8', 
        category: ['Sport', 'Bangla','Bangladeshi'] 
      },
      { 
        name: 'History Channel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png', 
        url: 'https://tvs2.aynaott.com/historyen/tracks-v1a1/mono.m3u8', 
        category: ['History', 'English','Documentary'] 
      },
      { 
        name: 'PBS Kids',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/PBS_Kids_logo_%282022%29.svg/250px-PBS_Kids_logo_%282022%29.svg.png', 
        url: 'https://tvs2.aynaott.com/pbskids/tracks-v1a1/mono.m3u8', 
        category: ['English', 'Kids','Education'] 
      },
      { 
        name: 'ABP Ananda',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ABP_Ananda_logo.svg/250px-ABP_Ananda_logo.svg.png', 
        url: 'https://abplivetv.akamaized.net/hls/live/2043012/ananda//master.m3u8', 
        category: ['News','Bangla', 'Indian'] 
      },
      { 
        name: 'CBS News', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Logo_of_GTV_%28Bangladesh%29.svg/250px-Logo_of_GTV_%28Bangladesh%29.svg.png', 
        url: 'https://www.tbn24.com/api/video/4027_0.m3u8', 
        category: ['News','English', 'International'] 
      },
      // { 
      //   name: 'A SPORTS HD PSL-2025', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/A_Sports_Logo.png/250px-A_Sports_Logo.png', 
      //   url: 'http://125.209.88.166:45793/BRN/ArySports.stream/playlist.m3u8', 
      //   category: ['Sport', 'Pakistani', 'Urdu'] 
      // },

      // { 
      //   name: 'Ten Sports HD', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Ten_Sports_Logo.png/250px-Ten_Sports_Logo.png', 
      //   url: 'http://125.209.88.166:45793/BRN/TenSports.stream/playlist.m3u8', 
      //   category: ['Sport', 'Urdu','Pakistani'] 
      // },

      // { 
      //   name: 'DD Sports', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/bn/thumb/1/1e/%E0%A6%A1%E0%A6%BF%E0%A6%A1%E0%A6%BF_%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A6%B8.jpeg/250px-%E0%A6%A1%E0%A6%BF%E0%A6%A1%E0%A6%BF_%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A6%B8.jpeg', 
      //   url: 'http://38.96.178.201/live/DDSports/index.m3u8', 
      //   category: ['Sport', 'English','Hindi', 'Indian'] 
      // },

      // { 
      //   name: 'PTV Sports', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/PTV_Sports.png/250px-PTV_Sports.png', 
      //   url: 'http://38.96.178.201/live/PTVSports/index.m3u8', 
      //   category: ['Sport', 'English', 'pakistani', 'Urdu'] 
      // },

      // { 
      //   name: 'Gazi TV', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Logo_of_GTV_%28Bangladesh%29.svg/250px-Logo_of_GTV_%28Bangladesh%29.svg.png', 
      //   url: 'http://38.96.178.201/live/GaziTV/index.m3u8', 
      //   category: ['Sport', 'Bangla','Bangladeshi','Entertainment'] 
      // },

      // { 
      //   name: 'Sangeet Bangla', 
      //   logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Sangeet_Bangla.png', 
      //   url: 'http://38.96.178.201/live/SangeetBangla/index.m3u8', 
      //   category: ['Music', 'Bangla','Indian'] 
      // },

      // { 
      //   name: 'Jalsha Movies HD', 
      //   logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Jalsa_Movies_HD.png', 
      //   url: 'http://38.96.178.201/live/JalshaMovies/index.m3u8', 
      //   category: ['Indian', 'Bangla','Movies'] 
      // },

      // { 
      //   name: 'Star Jalsha HD', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Star_Jalsha_logo_2023.png/250px-Star_Jalsha_logo_2023.png', 
      //   url: 'http://38.96.178.201/live/STARJALSHA/index.m3u8', 
      //   category: ['Indian', 'Bangla','Entertainment'] 
      // },

      // { 
      //   name: 'Akash AATH', 
      //   logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Aakaash_bangla.png', 
      //   url: 'http://38.96.178.201/live/AkashAath/index.m3u8', 
      //   category: ['Indian', 'Bangla','Entertainment', 'Movies'] 
      // },

      // { 
      //   name: 'National Geographic Wild', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Geographic_Wild_logo.svg/250px-National_Geographic_Wild_logo.svg.png', 
      //   url: 'http://88.212.15.29/live/test_ngw/playlist.m3u8', 
      //   category: ['English', 'Animals','Documentary','Nature'] 
      // },

      // { 
      //   name: 'Sony AATH', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Sony_Aath_new.png/250px-Sony_Aath_new.png', 
      //   url: 'http://38.96.178.201/live/SonyAath/index.m3u8', 
      //   category: ['Indian', 'Bangla','Entertainment', 'Drama'] 
      // },

      { 
        name: 'Boishakhi TV', 
        logo: 'https://en.wikipedia-on-ipfs.org/I/Boishakhi_TV_logo.svg.png.webp', 
        url: 'https://boishakhi.sonarbanglatv.com/boishakhi/boishakhitv/index.m3u8', 
        category: ['Bangla','Entertainment', 'Movies','Bangladeshi'] 
      },

      { 
        name: 'Movie Bangla', 
        logo: 'https://moviebangla.tv/wp-content/uploads/2024/06/moviebanglatv-logo-2.png', 
        url: 'http://alvetv.com/moviebanglatv/8080/index.m3u8', 
        category: ['Bangla','Entertainment', 'Movies','Bangladeshi'] 
      },

      { 
        name: 'Mastiii Music', 
        logo: 'https://a.jsrdn.com/hls/22973/mastiii/logo_20231219_215430_68.png', 
        url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/mastiii/master.m3u8', 
        category: ['Music', 'Hindi','Indian'] 
      },

      // { 
      //   name: 'Shemaroo', 
      //   logo: 'https://www.thefilmcatalogue.com/assets/company-logos/337388/ShemarooLogoPnG.png', 
      //   url: 'http://45.148.145.57/IN_StarGold2/index.m3u8', 
      //   category: ['Music', 'Hindi','Indian', 'Movies', 'Entertainment'] 
      // },

      { 
        name: 'Womens Sports', 
        logo: 'https://womenssports.com/wp-content/uploads/2024/07/smallWSNShortLogoFuego-1.png', 
        url: 'https://csm-e-eb.csm.tubi.video/csm/extlive/tubiprd01,Fast-Studios-Womens-Sports.m3u8', 
        category: ['Sport', 'Urdu','Pakistani'] 
      },

      { 
        name: 'wild Earth', 
        logo: 'https://i0.wp.com/wildearth.tv/wp-content/uploads/2021/12/wildearth8729.jpg?fit=300%2C300&ssl=1',
        url: 'https://wildearth-plex.amagi.tv/master.m3u8', 
        category: ['Sport', 'Animals','English'] 
      },

      { 
        name: 'Redbull TV', 
        logo: 'https://img.redbull.com/images/w_250/q_auto,f_auto/redbullcom/2021/3/8/v1viztxjab9e9a6of4by/redbulltv-logo.png',
        url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8', 
        category: ['Sport', 'Music','Lifestyle','English', 'Documentary', 'Travel','Education','Entertainment'] 
      },

      // { 
      //   name: 'Sony MAX HD', 
      //   logo: 'http://kst.moonplex.net/iptv/img/logo/Sony_Max.png', 
      //   url: 'http://kst.moonplex.net:8080/CH1/index.m3u8', 
      //   category: ['Movies', 'Hindi','Indian'] 
      // },

      { 
        name: 'Enter 10 Bangla', 
        logo: 'https://yt3.googleusercontent.com/ytc/AIdro_kUVgsElgaFpQZNYILWQ0HLa-MAmbEjWNRBRqKms5qML2Q=s160-c-k-c0x00ffffff-no-rj', 
        url: 'https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8', 
        category: ['Entertainment', 'Drama','Indian','Bangla'] 
      },

      { 
        name: 'Colors Bangla HD', 
        logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Colors_Bengali_HD.png', 
        url: 'https://www.tbn24.com/api/video/4041_0.m3u8', 
        category: ['Entertainment', 'Bangla','Indian', 'Drama'] 
      },

      { 
        name: 'Jamuna TV', 
        logo: 'https://s3.aynaott.com/storage/7cf2b06797fbf033a81f5d253fd6adcb',
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1701/output/1701.m3u8', 
        category: ['Bangladeshi','News', 'Bangla'] 
      },

      { 
        name: 'Channel 24', 
        logo: 'https://play-lh.googleusercontent.com/8cCl5EUWV51m3G8aG9CNgri7WCO0X0dIhUrDCyxtJfaqwtvq3N5RYCdfeyyV7s63iUo=w240-h480-rw',
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1703/output/master.m3u8', 
        category: ['Bangladeshi','News', 'Bangla'] 
      },

      { 
        name: 'Somoy TV', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/SOMOY_TV_Logo.svg/250px-SOMOY_TV_Logo.svg.png',
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1702/output/master.m3u8', 
        category: ['Bangladeshi','News', 'Bangla'] 
      },

      { 
        name: 'Eakttor TV HD', 
        logo: 'https://cdn.ekattor.online/contents/themes/public/style/images/logo.png', 
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1705/output/master.m3u8', 
        category: ['News', 'Bangla','Bangladeshi']
      },
      { 
        name: 'Travel XP English', 
        logo: 'https://travelxptv.b-cdn.net/wp-content/uploads/2022/11/Group-1093.png', 
        url: 'https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8', 
        category: ['Travel', 'History','Animals','Documentary','English','Nature']
      },
      { 
        name: 'Love Nature 4K', 
        logo: 'https://www.mncvision.id/userfiles/image/channel/channel_204.png', 
        url: 'https://d18dyiwu97wm6q.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/LoveNature4K2-prod/playlist.m3u8', 
        category: ['Travel', 'History','Animals','Documentary','English']
      },
      { 
        name: 'Joo Music', 
        logo: 'https://www.joomusic.info/assets/images/logo.png', 
        url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8', 
        category: ['Hindi', 'Music','Indian', 'Movies']
      },
      { 
        name: 'BBC News', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1024px-BBC_News_2022_%28Alt%29.svg.png', 
        url: 'https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8', 
        category: ['News','English', 'International']
      },
      { 
        name: 'DW English', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_Logo.svg/1024px-Deutsche_Welle_Logo.svg.png', 
        url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8', 
        category: ['News','English', 'International']
      },
      { 
        name: 'RT News (Enternational)', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/250px-Russia-today-logo.svg.png', 
        url: 'https://rt-glb.rttv.com/live/rtnews/playlist.m3u8', 
        category: ['News','English', 'International']
      },
      { 
        name: 'RTNEWS GLOBAL', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/250px-Russia-today-logo.svg.png', 
        url: 'https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8', 
        category: ['News','English']
      },
      { 
        name: 'CGTN News (Enternational)', 
        logo: 'https://ui.cgtn.com/static/ng/resource/images/header_icon/cgtn2020_logo.png', 
        url: 'https://news.cgtn.com/resource/live/english/cgtn-news.m3u8', 
        category: ['News','English', 'International']
      },

      // { 
      //   name: 'Channel I', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Channel-i.svg/192px-Channel-i.svg.png', 
      //   url: 'http://38.96.178.201/live/ChannelI/index.m3u8', 
      //   category: ['Bangladeshi','Bangla', 'Entertainment']
      // },

      // { 
      //   name: 'Disney Channel',
      //   logo: 'https://www.disneyinternational.com/img/toplogo.png',
      //   url: 'http://38.96.178.201/live/Disney/index.m3u8', 
      //   category: ['Kids', 'English','Education']
      // },

      // { 
      //   name: 'Sony Entertainment Television HD',
      //   logo: 'https://www.sonypicturesnetworks.com/images/logos/SET-LOGO-HD.png',
      //   url: 'http://38.96.178.201/live/SonyHD/index.m3u8', 
      //   category: ['Entertainment', 'Indian','Hindi']
      // },

      { 
        name: 'Independent TV', 
        logo: 'https://cdn.itvbd.net/contents/themes/public/style/images/logo.png', 
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1704/output/1704.m3u8', 
        category: ['News','Bangladeshi', 'Bangla'] 
      },

      // { 
      //   name: 'SATV', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/1/15/SA_TV_Logo.png', 
      //   url: 'http://38.96.178.201/live/SATV/index.m3u8', 
      //   category: ['Bangladeshi', 'Bangla', 'Entertainment'] 
      // },
      
      // { 
      //   name: 'Ekhon TV', 
      //   logo: 'https://ekhon.tv/logo.png', 
      //   url: 'http://38.96.178.201/live/EkhonTV/index.m3u8', 
      //   category: ['Bangladeshi', 'Bangla', 'Entertainment'] 
      // },

      // { 
      //   name: 'Channel S', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Channel_S_Bangladesh_Logo.png/250px-Channel_S_Bangladesh_Logo.png', 
      //   url: 'http://38.96.178.201/live/ChannelS/index.m3u8', 
      //   category: ['Bangladeshi', 'Bangla', 'Entertainment'] 
      // },

      // { 
      //   name: 'Channel 9', 
      //   logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Channel9_bd.svg/250px-Channel9_bd.svg.png', 
      //   url: 'http://38.96.178.201/live/Channel9/index.m3u8', 
      //   category: ['Bangladeshi', 'Bangla', 'Entertainment'] 
      // },

      { 
        name: 'BTV', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Bangladesh_Television_Logo.svg/250px-Bangladesh_Television_Logo.svg.png', 
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1709/output/index.m3u8', 
        category: ['Bangladeshi', 'Bangla'] 
      },
      { 
        name: 'Deshi TV', 
        logo: 'https://www.deshitv.com/images//bangla_logo/DeshTV24-BanglaLogo.png', 
        url: 'https://deshitv.deshitv24.net/live/myStream/playlist.m3u8', 
        category: ['Bangladeshi', 'Bangla'] 
      },
      { 
        name: 'Ekushey TV', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Ekushey_Television_Logo.svg/200px-Ekushey_Television_Logo.svg.png', 
        url: 'https://ekusheyserver.com/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8', 
        category: ['Bangladeshi', 'Bangla'] 
      },
      { 
        name: 'Ananda TV', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Logo_of_Ananda_TV.svg/250px-Logo_of_Ananda_TV.svg.png', 
        url: 'https://bdixtv24.com/ayna/watch.m3u8?id=a108c4e9-ccfa-42f2-8f8f-169ded28cca2&format=.m3u8', 
        category: ['Bangla','Movies'] 
      },
      { 
        name: 'Sananda TV', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Sananda_TV_Logo.jpg', 
        url: 'https://live.sanonda.tv/sanonda/index.m3u8', 
        category: ['Indian', 'Bangla','Movies'] 
      },
      
      // { 
      //   name: 'Bijoy TV', 
      //   logo: 'https://bijoy.tv/wp-content/uploads/2024/01/logo.gif', 
      //   url: 'http://38.96.178.201/live/BijoyTV/index.m3u8', 
      //   category: ['Bangladeshi', 'Bangla','Entertainment '] 
      // },

      { 
        name: 'Sony KAL HINDI', 
        logo: 'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/272825498_122916800248762_6540541318560007338_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tS5MnBSN0FoQ7kNvwE-man8&_nc_oc=Adm8HQvE5nvFSrOls1qSV0Pxhe4mDBSudodEOWnweJgpowFIv65o-aIcP7hIQAHmZu8&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=Xj-Rq3FcTuLxdOSGkH4dTw&oh=00_AfGHChy0uOuXRqI4THArI5zJlO3fEgaQFYluDgP6uivBog&oe=680EAFFF', 
        url: 'https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8', 
        category: ['Entertainment', 'Hindi','Indian'] 
      },

      { 
        name: 'ATN News', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ATN_News_logo.svg/120px-ATN_News_logo.svg.png', 
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1706/output/1706.m3u8', 
        category: ['Bangladeshi', 'Bangla','News'] 
      },

      { 
        name: 'ATN Bangla', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_of_ATN_Bangla.svg/180px-Logo_of_ATN_Bangla.svg.png', 
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1722/output/1722.m3u8', 
        category: ['Bangladeshi', 'Bangla','Entertainment'] 
      },

      // { 
      //   name: 'Enterr10 Bangla',
      //   logo: 'https://upload.wikimedia.org/wikipedia/bn/c/c9/%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%A7%E0%A7%A6_%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE_%E0%A6%9F%E0%A7%87%E0%A6%B2%E0%A6%BF%E0%A6%AD%E0%A6%BF%E0%A6%B6%E0%A6%A8_%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.jpeg', 
      //   url: 'http://kst.moonplex.net:8080/CH11/index.m3u8', 
      //   category: ['Entertainment', 'Indian', 'Drama','Bangla']
      // },

      { 
        name: 'Deepto TV', 
        logo: 'https://jcwsw2vt33.gpcdn.net/uploads/images/2022/07/25/logos_1384ea456744d5914ba331fa72df78c8_goplay_deepto_logo_final_white.svg',
        url: 'https://byphdgllyk.gpcdn.net/hls/DeeptoTV/index.m3u8', 
        category: ['Entertainment', 'Bangla','Bangladeshi', 'Drama'] 
      },

      // { 
      //   name: 'Duronto TV HD', 
      //   logo: 'http://kst.moonplex.net/iptv/img/logo/duronto-tv.jpg', 
      //   url: 'http://kst.moonplex.net:8080/CH12/index.m3u8', 
      //   category: ['Kids', 'Bangla','Bangladeshi']
      // },

      // { 
      //   name: '9XM',
      //   logo: 'https://logos-download.com/wp-content/uploads/2020/06/9XM_Logo-700x406.png', 
      //   url: 'http://kst.moonplex.net:8080/CH13/index.m3u8', 
      //   category: ['Music', 'Hindi','Indian'] 
      // },

      { 
        name: 'Al Jazeera English', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/250px-Aljazeera_eng.svg.png', 
        url: 'https://live-hls-web-aje.getaj.net/AJE/01.m3u8', 
        category: ['News','English', 'International']
      },
      
      { 
        name: '96.4 Spice FM',
        logo: 'https://i.ibb.co/4mjS8hB/download-1.png', 
        url: 'https://stream.spicefmbd.com/stream.m3u8', 
        category:  ['FM Radio', 'Bangladeshi','Bangla']
      },

      { 
        name: 'Banglavision', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Banglavision.svg/120px-Banglavision.svg.png',
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1715/output/1715.m3u8', 
        category: ['Bangladeshi','Bangla'] 
      },

      { 
        name: 'NTV', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/NTV_%28Bangladesh%29_logo.svg/200px-NTV_%28Bangladesh%29_logo.svg.png',
        url: 'https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1716/output/1716.m3u8', 
        category: ['Bangladeshi','Bangla'] 
      },

      { 
        name: 'CBS News', 
        logo: 'https://assets1.cbsnewsstatic.com/hub/i/r/2024/04/16/0fb75ad2-a909-44bb-87dc-86b9d51cbeb2/thumbnail/1200x630/3c2876feb4b25922288eaeb0a1d6b8f0/247-key-channelthumbnail-1920x1080.jpg?v=edaea84d9f9990d3a4d8ddf0e6fb4e98', 
        url: 'https://dai.google.com/linear/hls/pb/event/Sid4xiTQTkCT1SLu6rjUSQ/stream/a95b01e7-7e37-4a5d-ac66-660a45b93c84:SIN/variant/c5978f1497cc006085b1a374230e90d9/bandwidth/1696996.m3u8', 
        category: ['News','English', 'International'] 
      },


  // Add more channels like this:
  // { name: 'Channel Name', logo: 'LOGO_URL', url: 'STREAM_URL', category: 'CATEGORY' },
];

const categoryIcons = {
  'Sport': 'fa-futbol',
  'Entertainment': 'fa-tv',
  'Drama': 'fa-theater-masks',
  'Movies': 'fa-film',
  'Music': 'fa-music',
  'News': 'fa-newspaper',
  'FM Radio': 'fa-headphones-alt',
  'Documentary': 'fa-book',
  'Kids': 'fa-child',
  'Religious': 'fa-mosque',
  'Science': 'fa-atom',
  'Technology': 'fa-laptop',
  'Lifestyle': 'fa-heart',
  'Travel': 'fa-plane',
  'Food': 'fa-utensils',
  'Fashion': 'fa-tshirt',
  'History': 'fa-history',
  'Culture': 'fa-globe',
  'Education': 'fa-graduation-cap',
  'Nature': 'fa-tree',
  'Animals': 'fa-paw',
  'Gaming': 'fa-gamepad',
  'International': 'fa-globe',
  'Bangla': 'fa-language',
  'Bangladeshi': 'fa-flag',
  'Hindi': 'fa-language',
  'Indian': 'fa-flag',
  'Pakistani': 'fa-flag',
  'Urdu': 'fa-language',
  'English': 'fa-language',
};

const categories = ['Sport', 'Entertainment', 'Movies', 'Drama', 'Music', 'News', 'FM Radio', 'Documentary', 'Kids','Religious', 'Science', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Fashion', 'History', 'Culture', 'Education', 'Nature', 'Animals', 'Gaming', 'International', 'Bangla','Bangladeshi', 'Hindi','Indian','Pakistani','Urdu', 'English'];

const tabContainer = document.getElementById('categoryTabs');
    let isDown = false;
    let startX;
    let scrollLeft;

    tabContainer.addEventListener('mousedown', e => {
      isDown = true;
      tabContainer.classList.add('active');
      startX = e.pageX - tabContainer.offsetLeft;
      scrollLeft = tabContainer.scrollLeft;
    });
    tabContainer.addEventListener('mouseleave', () => {
      isDown = false;
    });
    tabContainer.addEventListener('mouseup', () => {
      isDown = false;
    });
    tabContainer.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tabContainer.offsetLeft;
      const walk = (x - startX) * 2;
      tabContainer.scrollLeft = scrollLeft - walk;
    });

function generateTabs() {
  const tabContainer = document.getElementById('categoryTabs');
  tabContainer.innerHTML = '';

  const allTab = document.createElement('div');
  allTab.className = 'category-tab active';
  allTab.innerHTML = `<i class="fas fa-th"></i> All`;
  allTab.onclick = () => {
    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    allTab.classList.add('active');
    showCategory('All');
  };
  tabContainer.appendChild(allTab);

  categories.forEach(cat => {
    const tab = document.createElement('div');
    tab.className = 'category-tab';
    tab.innerHTML = `<i class="fas ${categoryIcons[cat]}"></i> ${cat}`;
    tab.onclick = () => {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showCategory(cat);
    };
    tabContainer.appendChild(tab);
  });

  showCategory('All');
}

function showCategory(category) {
  const main = document.getElementById('mainContent');
  main.innerHTML = '';

  const section = document.createElement('section');
  section.className = 'category-section';

  const row = document.createElement('div');
  row.className = 'channel-row';

  const filtered = category === 'All' ? channels : channels.filter(c => Array.isArray(c.category)
  ? c.category.includes(category)
  : c.category === category);
  filtered.forEach(channel => {
    const div = document.createElement('div');
    div.className = 'channel';
    div.innerHTML = `
      <img src="${channel.logo}" alt="${channel.name}" />
      <p>${channel.name}</p>
    `;
    div.onclick = () => playChannel(channel.name, channel.url);
    row.appendChild(div);
  });

  section.appendChild(row);
  main.appendChild(section);
}

function showSuggestions(query) {
  const suggestionBox = document.getElementById('suggestions');
  suggestionBox.innerHTML = '';
  if (!query) return;

  const matched = channels.filter(ch => ch.name.toLowerCase().includes(query.toLowerCase()));
  matched.forEach(ch => {
    const div = document.createElement('div');
    div.innerText = ch.name;
    div.onclick = () => {
      document.getElementById('search').value = ch.name;
      playChannel(ch.name, ch.url);
      suggestionBox.innerHTML = '';
    };
    suggestionBox.appendChild(div);
  });
}

function playChannel(name, url) {
  const playerContainer = document.getElementById('playerContainer');
  const player = document.getElementById('videoPlayer');
  const title = document.getElementById('channelTitle');

  title.innerText = name;
  playerContainer.style.display = 'block';

 // More precise scroll to top of playerContainer
 const offsetTop = playerContainer.offsetTop;
 window.scrollTo({ top: offsetTop - 220, behavior: 'smooth' }); // Adjust -220 as needed

 // Clear previous sources
 if (window.hls) {
  window.hls.destroy();
  window.hls = null;
}
if (window.dashPlayer) {
  window.dashPlayer.reset();
  window.dashPlayer = null;
}
player.pause();
player.src = '';

// Check stream type
if (url.endsWith('.m3u8') && Hls.isSupported()) {
  window.hls = new Hls();
  window.hls.loadSource(url);
  window.hls.attachMedia(player);
} else if (url.endsWith('.mpd')) {
  window.dashPlayer = dashjs.MediaPlayer().create();
  window.dashPlayer.initialize(player, url, true);
} else if (player.canPlayType('application/vnd.apple.mpegurl')) {
  player.src = url;
} else {
  alert('Your browser does not support this stream format');
}

// ✅ Popunder Adsterra স্ক্রিপ্ট কল
loadPopunderAd();

}

generateTabs();