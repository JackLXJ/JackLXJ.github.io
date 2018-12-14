const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Butter-Fly",
        artist: '和田光司',
        url: 'http://cube-1252774894.cosgz.myqcloud.com/music/source/和田光司 - Butter-Fly (ピアノヴァージョン).mp3',
        cover: 'http://cube-1252774894.cosgz.myqcloud.com/music/image/和田光司 - Butter-Fly (ピアノヴァージョン).jpg',
      },


      {
        name: "思念是一种病",
        artist: '张震岳;蔡健雅',
        url: 'http://www.ytmp3.cn/down/33644.mp3',
        cover: 'http://img.ytmp3.cn/image/91.jpg',
      },

      {
        name: "再见",
        artist: '张震岳',
        url: 'http://www.ytmp3.cn/down/52597.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1160507874,2254484419&fm=58&bpow=400&bpoh=600',
      },

      {
        name: "一直很安静",
        artist: '阿桑',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n1/77/11/3555673158.mp3',
        cover: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2296410578,3535043621&fm=85&s=B9E0C91749564FCE00C9D5D30100E0B1',
      },

      {
        name: "莫失莫忘",
        artist: '仙剑奇侠传',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n1/61/35/2205285863.mp3',
        cover: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3449701003,2937896730&fm=58&bpow=1024&bpoh=1024',
      },      

      {
        name: "太多",
        artist: '陈冠蒲',
        url: 'http://other.web.rc01.sycdn.kuwo.cn/resource/n1/44/39/1967700312.mp3',
        cover: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=442147624,3641144126&fm=58&bpow=1080&bpoh=1505',
      },

      {
        name: "天亮以后",
        artist: '胡歌',
        url: 'http://www.ytmp3.cn/down/44304.mp3',
        cover: 'http://img.ytmp3.cn/image/90.jpg',
      },
      
      {
        name: '我的心太乱',
        artist: '周传雄',
        url: 'http://www.ytmp3.cn/down/48418.mp3',
        cover: 'http://img.ytmp3.cn/image/12.jpg',
      },

      {
        name: "黄昏",
        artist: '周传雄',
        url: 'http://www.ytmp3.cn/down/33941.mp3',
        cover: 'http://img.ytmp3.cn/image/29.jpg',
      },

       {
        name: "日落大道",
        artist: '梁博 ',
        url: 'http://www.ytmp3.cn/down/42631.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2056984611,2592659515&fm=58&bpow=580&bpoh=819',
      },

      {
        name: "男孩",
        artist: '梁博',
        url: 'http://www.ytmp3.cn/down/43366.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2056984611,2592659515&fm=58&bpow=580&bpoh=819',
      },

      {
        name: "B再飞行",
        artist: '逃跑计划',
        url: 'http://www.ytmp3.cn/down/48037.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1913055255,3554545434&fm=58',
      },

      {
        name: "Waiting In The Wings",
        artist: 'Shayne Ward',
        url: 'http://www.ytmp3.cn/down/54004.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=507081678,4248484065&fm=58&w=121&h=140&img.JPEG',
      },

      {
        name: "Apologize",
        artist: 'OneRepublic',
        url: 'http://www.ytmp3.cn/down/55044.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=920017221,1532534424&fm=58&w=121&h=140&img.JPEG',
      }
      
    ]
});