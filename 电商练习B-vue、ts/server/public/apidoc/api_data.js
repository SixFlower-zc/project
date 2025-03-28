define({
  api: [
    {
      type: "get",
      url: "/api/address/list",
      title: "地址列表",
      name: "GetAddressList",
      group: "Address",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '添加地址成功',\n  data\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/Address.js",
      groupTitle: "Address",
    },
    {
      type: "post",
      url: "/api/address/add",
      title: "添加地址",
      name: "PostAddressAdd",
      group: "Address",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "name",
              description: "<p>收货人姓名</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>收货人手机号</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "province",
              description: "<p>省</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "city",
              description: "<p>市</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "county",
              description: "<p>区</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "addressDetail",
              description: "<p>详细地址</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: false,
              field: "isDefault",
              description: "<p>默认地址</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '添加地址成功'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/Address.js",
      groupTitle: "Address",
    },
    {
      type: "post",
      url: "/api/address/delete",
      title: "删除地址",
      name: "PostAddressDelete",
      group: "Address",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "addressid",
              description: "<p>地址id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '删除地址'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/Address.js",
      groupTitle: "Address",
    },
    {
      type: "post",
      url: "/api/address/update",
      title: "更新地址接口",
      name: "PostAddressUpdate",
      group: "Address",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "addressid",
              description: "<p>地址id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "name",
              description: "<p>收货人姓名</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>收货人手机号</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "province",
              description: "<p>省</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "city",
              description: "<p>市</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "county",
              description: "<p>区</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "addressDetail",
              description: "<p>详细地址</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: false,
              field: "isDefault",
              description: "<p>默认地址</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '更新地址接口'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/Address.js",
      groupTitle: "Address",
    },
    {
      type: "post",
      url: "/api/address/defaultAddress",
      title: "查询默认地址",
      name: "defaultAddress",
      group: "Address",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '查询默认地址'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/Address.js",
      groupTitle: "Address",
    },
    {
      type: "get",
      url: "/api/banner/list",
      title: "查看轮播图",
      name: "GetBannerList",
      group: "Banner",
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '查看轮播图',\n  data\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/banner.js",
      groupTitle: "Banner",
    },
    {
      type: "post",
      url: "/api/cart/add",
      title: "加入购物车",
      name: "PostCartAdd",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "proid",
              description: "<p>产品id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "num",
              description: "<p>加入购物车数量</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '加入购物车成功'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/list",
      title: "查看购物车",
      name: "PostCartList",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '购物车列表',\n  data\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/remove",
      title: "删除购物车单条数据",
      name: "PostCartRemove",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "cartid",
              description: "<p>购物车id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '删除购物车单条数据'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/removeall",
      title: "删除当前用户的购物车数据",
      name: "PostCartRemoveall",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '删除当前用户的购物车数据'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/selectall",
      title: "更新所有购物车数据的选中状态",
      name: "PostCartSelectall",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: false,
              field: "type",
              description: "<p>是否全部选中</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '更新所有购物车数据的选中状态'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/selectone",
      title: "更新当前购物车数据的选中状态",
      name: "PostCartSelectone",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "cartid",
              description: "<p>购物车id</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: false,
              field: "flag",
              description: "<p>是否选中</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '更新当前购物车数据的选中状态'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "post",
      url: "/api/cart/updatenum",
      title: "更新购物车数量",
      name: "PostCartUpdatenum",
      group: "Cart",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "cartid",
              description: "<p>购物车id</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "num",
              description: "<p>数量</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '更新购物车数量'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/cart.js",
      groupTitle: "Cart",
    },
    {
      type: "get",
      url: "/api/pro/categorybrandprolist",
      title: "获取某分类下某品牌的产品列表",
      name: "GetCategoryBrandProList",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "count",
              description: "<p>页码,默认值为1</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "limitNum",
              description: "<p>每页显示个数,默认值为10</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "category",
              description: "<p>产品分类</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "brand",
              description: "<p>当前分类下的品牌</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/categorybrandlist",
      title: "产品分类下品牌列表",
      name: "GetProCategoryBrandList",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "category",
              description: "<p>分类</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/categorylist",
      title: "产品的分类列表",
      name: "GetProCategoryList",
      group: "Pro",
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/detail/:proid",
      title: "获取产品的详情数据",
      name: "GetProDetail",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "proid",
              description: "<p>产品唯一值，产品id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '10001',\n  message: '抱歉，没有查找到该商品'\n}\n{\n  code: '200',\n  message: '获取产品的详情数据'\n  data: {}\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/hotword",
      title: "热门搜索",
      name: "GetProHotWord",
      group: "Pro",
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/list",
      title: "获取商品分页列表数据",
      name: "GetProList",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "count",
              description: "<p>页码,默认值为1</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "limitNum",
              description: "<p>每页显示个数,默认值为10</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/recommendlist",
      title: "获取推荐产品列表的数据",
      name: "GetProRecommendList",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "count",
              description: "<p>页码,默认值为1</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "limitNum",
              description: "<p>每页显示个数,默认值为12</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/search",
      title: "搜索列表",
      name: "GetProSearch",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "count",
              description: "<p>页码,默认值为1</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "limitNum",
              description: "<p>每页显示个数,默认值为10</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "keyword",
              description: "<p>搜索的关键词</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/pro/seckilllist",
      title: "获取秒杀产品列表的数据",
      name: "GetProSeckillList",
      group: "Pro",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "count",
              description: "<p>页码,默认值为1</p>",
            },
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "limitNum",
              description: "<p>每页显示个数,默认值为6</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/pro.js",
      groupTitle: "Pro",
    },
    {
      type: "get",
      url: "/api/user/info",
      title: "获取用户信息",
      name: "GetUserInfo",
      group: "User",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '10119',\n  message: 'token无效'\n}\n{\n  code: '200',\n  message: '获取个人信息',\n  data\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/docheckcode",
      title: "验证短信验证码",
      name: "PostDoCheckCode",
      group: "User",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>手机号码</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "telcode",
              description: "<p>验证码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              " {\n   code: '10007',\n   message: '验证码错误'\n }\n{\n   code: '200',\n   message: '继续注册'\n }",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/docheckphone",
      title: "验证手机号码是否被注册过",
      name: "PostDoCheckPhone",
      group: "User",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>手机号码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '继续注册'\n}\n{\n  code: '10005',\n  message: '该用户已被注册'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/dofinishregister",
      title: "注册",
      name: "PostDoFinishRegister",
      group: "User",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>手机号码</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "password",
              description: "<p>密码</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/dosendmsgcode",
      title: "发送短信验证码",
      name: "PostDoSendMsgCode",
      group: "User",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>手机号码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '发送短信验证码成功',\n  data: 12345\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/login",
      title: "账户名/手机号/邮箱 + 密码的登录方式",
      name: "PostUserLogin",
      group: "User",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "loginname",
              description: "<p>账户名/手机号/邮箱</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "password",
              description: "<p>密码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              " {\n   code: '10010',\n   message: '该用户不存在'\n }\n{\n   code: '10011',\n   message: '密码错误'\n }\n {\n   code: '200',\n   message: '登录成功',\n   data: {\n     token,\n     userid\n   }\n }",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/bindusername",
      title: "绑定用户名",
      name: "bindusername",
      group: "User",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "oldpassword",
              description: "<p>旧密码</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "newpassword",
              description: "<p>新密码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: " {\n  code: '200',\n  message: '绑定用户名'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "get",
      url: "/api/user/orderlist",
      title: "查看全部订单",
      name: "orderlist",
      group: "User",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '查看全部订单',\n  data\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "post",
      url: "/api/user/updatePassword",
      title: "修改密码",
      name: "updatePassword",
      group: "User",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "oldpassword",
              description: "<p>旧密码</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "newpassword",
              description: "<p>新密码</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '10030',\n  message: '原始密码错误'\n}\n {\n  code: '200',\n  message: '密码修改成功'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "User",
    },
    {
      type: "get",
      url: "/city/city.json",
      title: "获取城市列表",
      name: "getCity",
      group: "city",
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "city",
    },
    {
      type: "get",
      url: "/city/sortCity.json",
      title: "获取城市按照字母排序列表",
      name: "getSortCity",
      group: "city",
      version: "0.0.0",
      filename: "api/user.js",
      groupTitle: "city",
    },
    {
      type: "post",
      url: "/api/order/addOrder",
      title: "添加订单",
      name: "addOrder",
      group: "order",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '添加订单'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/order.js",
      groupTitle: "order",
    },
    {
      type: "get",
      url: "/api/order/confirmOrder",
      title: "获取确认订单的信息",
      name: "confirmOrder",
      group: "order",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "time",
              description: "<p>创建时间</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '获取确认订单的信息'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/order.js",
      groupTitle: "order",
    },
    {
      type: "get",
      url: "/api/order/deleteCartItem",
      title: "支付时删除购物车选中的数据",
      name: "deleteCartItem",
      group: "order",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content:
              "{\n  code: '200',\n  message: '支付时删除购物车选中的数据'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/order.js",
      groupTitle: "order",
    },
    {
      type: "post",
      url: "/api/order/updateOrderAddress",
      title: "修改订单的地址",
      name: "updateOrderAddress",
      group: "order",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              type: "String",
              optional: false,
              field: "token",
              description: "<p>token</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "userid",
              description: "<p>用户id</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "name",
              description: "<p>收货人姓名</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "tel",
              description: "<p>收货人手机号</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "province",
              description: "<p>省</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "city",
              description: "<p>市</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "county",
              description: "<p>区</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "addressDetail",
              description: "<p>详细地址</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "time",
              description: "<p>创建时间</p>",
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "{\n  code: '200',\n  message: '修改订单的地址'\n}",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "api/order.js",
      groupTitle: "order",
    },
  ],
});
