import { Message } from 'element-ui';

export default function ({ $axios, redirect }) {
  const { $get, $post, $patch, $put, $delete } = $axios;
  // 基本配置
  $axios.defaults.timeout = 10000;
  $axios.defaults.headers.post['Content-Type'] = 'application/json';

  // 请求回调
  $axios.onRequest(config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  });

  // 返回回调
  $axios.onResponse(res => {
    if (![200, 204].includes(res.data.status)) {
      Message.error({
        message: res.msg
      });
      Promise.reject(res);
    }
    return res;
  });

  // 错误回调
  $axios.onError(error => {
    const { status, data } = error.response;
    // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    Message.error({
      message: data && data.msg
    });
    switch (status) {
      case 401:
        redirect('/');
        break;
      case 404:
        Message.error({
          message: '接口不存在'
        });
        break;
      case 500:
      case 502:
        Message.error({
          message: '服务器开小差，请稍后再试'
        });
        break;
      default:
        Message.error({
          message: '服务器出错了'
        });
        break;
    }
    // 返回 response 里的错误信息
    return Promise.reject(error);
  });

  $axios.$get = (path, data, config = {}) =>
    $get(path, { params: data, ...config });

  $axios.$post = (path, data, config = {}) => $post(path, data, config);

  $axios.$patch = (path, data, config = {}) => $patch(path, data, config);

  $axios.$put = (path, data, config = {}) => $put(path, data, config);

  $axios.$delete = (path, data, config = {}) =>
    $delete(path, { params: data, ...config });
}
