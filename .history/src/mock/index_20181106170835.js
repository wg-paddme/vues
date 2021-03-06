import Mock from 'mockjs'
const vehicle = Mock.mock('/api/vehicle', 'post', (req, res) => {
  return {
    code: 200,
    data: [
      {
        id: 0,
        title: '牌照1',
        licNumber: '陕A79898',
        color: 1,
        buyTime: '2018-04-01 11:34:34'
      }, {
        id: 1,
        title: '牌照2',
        licNumber: '陕A79898',
        color: 2,
        buyTime: '2018-04-02 17:34:28'
      }
    ],
    message: '查询成功'
  }
})
const menus = Mock.mock('/api/menu', 'get', (req, res) => {
  return {
    code: 200,
    data: [
      {
        'id': '32043797638545408',
        'text': '系统管理',
        'iconCls': 'iconfont icon-shezhi',
        'leaf': false,
        'sort': 1,
        'checked': false,
        'edit': true,
        'state': 'closed',
        'children': [
          {
            'id': '32043797714042880',
            'text': '权限管理',
            'iconCls': 'iconfont icon-171',
            'leaf': false,
            'sort': 1,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32043798229942272',
                'text': '应用管理',
                'iconCls': 'iconfont icon-jichushuju',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/application/list.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798481600512',
                'text': '菜单管理',
                'iconCls': 'iconfont icon-leimupinleifenleileibie',
                'leaf': true,
                'sort': 3,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/menu/menu.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798523543552',
                'text': '角色管理',
                'iconCls': 'iconfont icon-yonghu1',
                'leaf': true,
                'sort': 5,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/role/role.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798599041024',
                'text': '人员管理',
                'iconCls': 'iconfont icon-iconset0203',
                'leaf': true,
                'sort': 6,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/user/user.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043797781151744',
                'text': '功能权限管理',
                'iconCls': 'iconfont icon-thermometer',
                'leaf': true,
                'sort': 9,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/functional_authority/functional_authority.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '32043799144300544',
            'text': '任务管理',
            'iconCls': 'iconfont icon-zhongmingming',
            'leaf': false,
            'sort': 3,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32043799400153088',
                'text': '动态任务管理',
                'iconCls': 'iconfont icon-liucheng1',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/common/dyna_task/dyna_task.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043799651811328',
                'text': '时间任务管理',
                'iconCls': 'iconfont icon-lishi',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/common/time_task/time_task.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '39745781351055360',
                'text': '缓存管理',
                'iconCls': 'iconfont icon-huanqiu',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '\platform\base\common\cache\data_table.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '32043799718920192',
            'text': '字典管理',
            'iconCls': 'iconfont icon-zidian',
            'leaf': true,
            'sort': 5,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/common/dict/dict.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '32043799807000576',
            'text': '安全策略配置',
            'iconCls': 'iconfont icon-anquan',
            'leaf': true,
            'sort': 7,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/auth/security/security_policy.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '32043799848943616',
            'text': '属性管理',
            'iconCls': 'iconfont icon-kuozhanshuxing',
            'leaf': true,
            'sort': 9,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/common/property/property.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '36391850944233472',
            'text': '数据中心',
            'iconCls': 'iconfont icon-qian2',
            'leaf': false,
            'sort': 10,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32045523129073664',
                'text': '数据表配置',
                'iconCls': 'iconfont icon-jinbi1',
                'leaf': true,
                'sort': 7,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/data_table/data_table.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32046655427575808',
                'text': '数据表信息管理',
                'iconCls': 'iconfont icon-qian2',
                'leaf': true,
                'sort': 8,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/data_management/data_management.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32047002711752704',
                'text': '接口管理',
                'iconCls': 'iconfont icon-xinhaoxian',
                'leaf': true,
                'sort': 9,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/interface_management/interface_management.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32047231108382720',
                'text': '接口权限配置',
                'iconCls': 'iconfont icon-qiyechazhao',
                'leaf': true,
                'sort': 10,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '\datacenter\base\interface_permissions\interface_permissions.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }
        ],
        'checkState': 'unchecked'
      }, {
        'id': '39378232012701696',
        'text': '校情系统',
        'iconCls': 'iconfont icon-tongji',
        'leaf': false,
        'sort': 2,
        'checked': false,
        'edit': true,
        'state': 'closed',
        'children': [
          {
            'id': '39718612142915584',
            'text': '指标库管理',
            'iconCls': 'iconfont icon-qian2',
            'leaf': false,
            'sort': 1,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '39718790396641280',
                'text': '指标管理',
                'iconCls': 'iconfont icon-icon-test4',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/cs/index_management/index_management.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '39718860680593408',
                'text': '指标图表配置',
                'iconCls': 'iconfont icon-wenjian2',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '39718967123640320',
            'text': '驾驶舱管理',
            'iconCls': 'iconfont icon-building_',
            'leaf': false,
            'sort': 2,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '39719046400180224',
                'text': '仪表盘配置',
                'iconCls': 'iconfont icon-moban',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '39719449242107904',
            'text': '校情信息管理',
            'iconCls': 'iconfont icon-wendang',
            'leaf': false,
            'sort': 3,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '39719631304261632',
                'text': '校情信息表配置',
                'iconCls': 'iconfont icon-shujuku',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '39719712497598464',
                'text': '校情信息登记',
                'iconCls': 'iconfont icon-daohang',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }
        ],
        'checkState': 'unchecked'
      }
    ],
    message: '查询成功'
  }
})

export default {
  vehicle,
  menus
}
