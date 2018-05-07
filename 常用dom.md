### 常用的dom对象方法:

  方法 | 描述 |
----------|------------
getElementById() | 返回带有指定ID的元素.
getElementsByTagName() | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
gitElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。
appendChild() | 把新的子节点添加到指定节点。
removeChild() | 删除子节点.
replaceChild() | 替换子节点.
insertBefore() | 在指定的子节点前面插入新的子节点。
createElement() | 创建元素节点。
createTextNode() | 创建文本节点.
getAttribute() | 返回指定的属性值.
setAttribute() | 把指定属性设置或修改为指定的值.
* 在html dom (文档对象模型)中，每隔部分都是节点：
* 文档本身是文档节点
* 所有HTML元素是元素节点
* 所有HTML属性是属性节点。
* HTML元素内的文本是文本节点
* 注释是注释节点
* 在html dom中， element对象表示html元素， 下面这些属性和方法可用于所有HTML元素上。
  属性/方法 | 描述
  ------|------
  element.accesskey | 设置或返回元素的快捷键
  element.appendChild() | 向元素添加新的子节点，作为最后一个子节点。
  element.attributes | 返回元素属性的NamedNodeMap.
  element.childNodes | 返回元素子节点的NodeList.
  element.className | 设置或返回元素的class属性。
  element.clientHeight | 返回元素的可见高度。
  element.clientWidth | 返回元素的可见宽度。
  element.cloneNode() | 克隆元素。
  element.compareDocumentPosition() | 比较两个元素的文档位置。
  element.contentEditable | 设置或返回元素的文本方向
  element.dir | 设置或返回元素的文本方向。
  element.firstChild | 返回元素的首个字。
  element.getAttribute() | 返回元素节点的指定属性值.
  element.getAttributeNode() | 返回指定的属性节点。
  element.getElementsByTagName() | 返回拥有指定标签名的所有子元素的集合。
  element.getFeature() | 返回实现了指定特性的APi的某个对象。
  element.getUserData() | 返回关联元素上键的对象。
  element.hasAttribute() | 如果元素拥有指定属性，则返回true, 否则返回false。
  element.hasAttributes() | 如果元素拥有属性，则返回true, 否则返回false。
  element.hasChildNodes() | 如果元素拥有子节点，则返回true,否则false.
  element.id | 设置或返回元素的id.
  element.innerHTML | 设置或返回元素的内容.
  element.insertBefore() | 在指定的已有的子节点之前插入新节点。
  element.isContentEditable | 设置或返回元素的内容。
  element.isDefaultNamespace() | 如果指定的namespaceURI是默认的，则返回true, 否则返回false.
  element.isEqualNode() | 检查两个元素是否相等。
  element.isSameNode() | 检查两个元素是否是相同的节点。
  element.isSupported() | 如果元素支持指定特性， 则返回true.
  element.lang | 设置或返回元素的语言代码。
  element.lastChild | 返回元素的最后一个子元素。
  element.namespaceURi | 返回元素的namespace URI
  element.nextSibling | 返回位于相同节点数层级的下一个节点。
  element.nodeName | 返回元素的名称。
