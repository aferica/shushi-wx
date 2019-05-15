export default {
  host: 'https://www.aferica.wang',

  noEncode: '/api/getNoEncode/byurl?url=',
  encode: '/api/getWithEncode/byurl?mainurl=',

  category: {
    // 带书籍数量的父分类
    categoryWithBookCount: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
    // 带子分类的父分类
    categoryWithSubCategories: 'http://api.zhuishushenqi.com/cats/lv2',
    // 分类详情: 带着书籍
    categoryInfo: 'http://api.zhuishushenqi.com/book/by-categories'
  },
  book: {
    // 更新
    bookUpdated: 'http://api.zhuishushenqi.com/book/updated', // post {"id": "id1,id2,id3"}
    // 书籍详情
    bookInfo: 'http://api.zhuishushenqi.com/book', // id 书籍id
    // 相关推荐
    relatedRecommendedBooks: 'http://api.zhuishushenqi.com/book/', // http://api.zhuishushenqi.com/book/56d0b60dfb51235c3a7a2739/recommend
    // 作者名下的书籍
    authorBooks: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
    // 书源
    bookSources: 'http://api.zhuishushenqi.com/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
    // 根据书源获取对应的章节信息
    bookChapters: 'http://api.zhuishushenqi.com/btoc', // http://api.zhuishushenqi.com/btoc/5881e82e3e3357fa266f6a3e?view=chapters
    // 章节内容:id 单章id
    chapterContent: 'http://chapter2.zhuishushenqi.com/chapter/', //id: chapter id
    // 书籍搜索 可以搜索作者但是不精确
    bookSearch: 'http://api.zhuishushenqi.com/book/fuzzy-search', //query ?query=凡人修仙传
    // 书籍搜索自动推荐
    bookSuggest: 'http://api.zhuishushenqi.com/book/auto-suggest', //query ?query=凡人修仙传

    chaptersUrl: 'http://api.zhuishushenqi.com/mix-atoc/',
  },
  rank: {
    // 排名分类
    rankCategory: 'http://api.zhuishushenqi.com/ranking/gender',
    // 排名详情
    rankInfo: 'http://api.zhuishushenqi.com/ranking' // id: rank id
  },
  comment: {
    // 讨论
    discussions: 'http://api.zhuishushenqi.com/post/by-book',
    // 短评
    shortReviews: 'http://api.zhuishushenqi.com/post/short-review',
    //长评
    bookReviews: 'http://api.zhuishushenqi.com/post/review/by-book',
    // 精彩长评
    bestReviews: 'http://api.zhuishushenqi.com/post/review/best-by-book', // ?book=55eef8b27445ad27755670b9
  },
  bookList: {
    lists: 'http://api.zhuishushenqi.com/book-list',
    detail: 'http://api.zhuishushenqi.com/book-list', // bookId
    // 相关推荐
    relatedRecommendedBookLists: 'http://api.zhuishushenqi.com/book-list/',
    // http://api.zhuishushenqi.com/book-list/56d0b60dfb51235c3a7a2739/recommend
  }

}
