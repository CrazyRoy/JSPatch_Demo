
defineClass("ViewController", {
            
            // 更新代码(热更新)
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            cell.textLabel().setText("jspatch-js"); // 修改显示文字(热更新)
            var redColor = require('UIColor').redColor();
            cell.setBackgroundColor(redColor);
            return cell
            },
            
            // 修复bug(热修复）
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var row = indexPath.row()
            if (self.dataSource().length > row) {  // 加上判断越界的逻辑，如果有数据才取出
            var content = self.dataArr()[row];
            }
            }
            }, {});
