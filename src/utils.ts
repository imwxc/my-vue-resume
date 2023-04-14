function save (e:any, callback=()=>{}) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      // 执行save方法
      callback();
      // 阻止默认事件
      e.preventDefault()
  }
}