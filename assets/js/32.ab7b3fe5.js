(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{308:function(a,t,r){"use strict";r.r(t);var s=r(13),v=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("x\n设计模式\n")]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"创建型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式"}},[a._v("#")]),a._v(" 创建型模式")]),a._v(" "),t("h3",{attrs:{id:"工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[a._v("#")]),a._v(" 工厂模式")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"抽象工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象工厂模式"}},[a._v("#")]),a._v(" 抽象工厂模式")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"单例模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[a._v("#")]),a._v(" 单例模式")]),a._v(" "),t("p",[a._v("**概述：**当前类只能有一个实例。")]),a._v(" "),t("p",[a._v("**特点：**构造方法私有，对象有自己创建，向外部提供一个公共的静态方法，创建本类的成员变量实例，用final修饰")]),a._v(" "),t("h3",{attrs:{id:"建造者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建造者模式"}},[a._v("#")]),a._v(" 建造者模式")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"原型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[a._v("#")]),a._v(" 原型模式")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("p",[a._v("是用于创建重复的对象，同时又能保证性能。")]),a._v(" "),t("p",[t("strong",[a._v("关键代码：")]),a._v(" 1、实现克隆操作，在 JAVA 实现 Cloneable 接口，重写 clone()，")]),a._v(" "),t("p",[t("strong",[a._v("优点：")]),a._v(" 1、性能提高。 2、逃避构造函数的约束。")]),a._v(" "),t("p",[t("strong",[a._v("缺点：")]),a._v(" 1、配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。 2、必须实现 Cloneable 接口。")]),a._v(" "),t("p",[t("strong",[a._v("使用场景：")]),a._v(" 1、资源优化场景。 2、类初始化需要消化非常多的资源，这个资源包括数据、硬件资源等。 3、性能和安全要求的场景。 4、通过 new 产生一个对象需要非常繁琐的数据准备或访问权限，则可以使用原型模式。 5、一个对象多个修改者的场景。 6、一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时，可以考虑使用原型模式拷贝多个对象供调用者使用。 7、在实际项目中，原型模式很少单独出现，一般是和工厂方法模式一起出现，通过 clone 的方法创建一个对象，然后由工厂方法提供给调用者。原型模式已经与 Java 融为浑然一体，大家可以随手拿来使用。")]),a._v(" "),t("p",[a._v("**注意事项：**与通过对一个类进行实例化来构造新对象不同的是，原型模式是通过拷贝一个现有对象生成新对象的。浅拷贝实现 Cloneable，重写，深拷贝是通过实现 Serializable 读取二进制流。")]),a._v(" "),t("h2",{attrs:{id:"结构型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构型模式"}},[a._v("#")]),a._v(" 结构型模式")]),a._v(" "),t("h3",{attrs:{id:"适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[a._v("#")]),a._v(" 适配器模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"桥接模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式"}},[a._v("#")]),a._v(" 桥接模式：")]),a._v(" "),t("p",[a._v("**概述：**用于把抽象化与实现化解耦，使得二者可以独立变化。它通过提供抽象化和实现化之间的桥接结构，来实现二者的解耦。")]),a._v(" "),t("h3",{attrs:{id:"过滤器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤器模式"}},[a._v("#")]),a._v(" 过滤器模式：")]),a._v(" "),t("p",[a._v("**概述：**过滤器模式（Filter Pattern）或标准模式（Criteria Pattern）是一种设计模式，这种模式允许开发人员使用不同的标准来过滤一组对象，通过逻辑运算以解耦的方式把它们连接起来。它结合多个标准来获得单一标准。")]),a._v(" "),t("h3",{attrs:{id:"组合模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[a._v("#")]),a._v(" 组合模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"装饰器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式"}},[a._v("#")]),a._v(" 装饰器模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"外观模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外观模式"}},[a._v("#")]),a._v(" 外观模式：")]),a._v(" "),t("p",[a._v("**概述：**隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口。这种类型的设计模式属于结构型模式，它向现有的系统添加一个接口，来隐藏系统的复杂性。")]),a._v(" "),t("h3",{attrs:{id:"亨元模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#亨元模式"}},[a._v("#")]),a._v(" 亨元模式：")]),a._v(" "),t("p",[a._v("**概述：**主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。")]),a._v(" "),t("h3",{attrs:{id:"代理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[a._v("#")]),a._v(" 代理模式：")]),a._v(" "),t("p",[a._v("**概述：**一个类代表另一个类的功能。")]),a._v(" "),t("p",[a._v("**使用场景：**按职责来划分，通常有以下使用场景： 1、远程代理。 2、虚拟代理。 3、Copy-on-Write 代理。 4、保护（Protect or Access）代理。 5、Cache代理。 6、防火墙（Firewall）代理。 7、同步化（Synchronization）代理。 8、智能引用（Smart Reference）代理。")]),a._v(" "),t("h2",{attrs:{id:"行为型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为型模式"}},[a._v("#")]),a._v(" 行为型模式")]),a._v(" "),t("h3",{attrs:{id:"责任链模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式"}},[a._v("#")]),a._v(" 责任链模式：")]),a._v(" "),t("p",[a._v("**概述：**为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦。这种类型的设计模式属于行为型模式。")]),a._v(" "),t("p",[a._v("在这种模式中，通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推。")]),a._v(" "),t("h3",{attrs:{id:"命令模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[a._v("#")]),a._v(" 命令模式：")]),a._v(" "),t("p",[a._v("**概述：**是一种数据驱动的设计模式。请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。")]),a._v(" "),t("h3",{attrs:{id:"迭代器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[a._v("#")]),a._v(" 迭代器模式：")]),a._v(" "),t("p",[a._v("**概述：**用于顺序访问集合对象的元素，不需要知道集合对象的底层表示。")]),a._v(" "),t("h3",{attrs:{id:"中介者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式"}},[a._v("#")]),a._v(" 中介者模式：")]),a._v(" "),t("p",[a._v("**概述：**用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。中介者模式属于行为型模式。")]),a._v(" "),t("h3",{attrs:{id:"备忘录模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式"}},[a._v("#")]),a._v(" 备忘录模式：")]),a._v(" "),t("p",[a._v("**概述：**保存一个对象的某个状态，以便在适当的时候恢复对象。备忘录模式属于行为型模式。")]),a._v(" "),t("h3",{attrs:{id:"观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[a._v("#")]),a._v(" 观察者模式：")]),a._v(" "),t("p",[a._v("**概述：**当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知依赖它的对象。观察者模式属于行为型模式。")]),a._v(" "),t("h3",{attrs:{id:"状态模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态模式"}},[a._v("#")]),a._v(" 状态模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"空对象模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空对象模式"}},[a._v("#")]),a._v(" 空对象模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])]),a._v(" "),t("h3",{attrs:{id:"模板模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板模式"}},[a._v("#")]),a._v(" 模板模式：")]),a._v(" "),t("p",[a._v("**概述：**实现公共的方法，提供抽象的方法，子类继承父类，主要是基于子类对父类方法的实现。")]),a._v(" "),t("h3",{attrs:{id:"策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[a._v("#")]),a._v(" 策略模式：")]),a._v(" "),t("p",[a._v("**概述：**一个类的行为或其算法可以在运行时更改。这种类型的设计模式属于行为型模式。在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。")]),a._v(" "),t("h3",{attrs:{id:"访问者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式"}},[a._v("#")]),a._v(" 访问者模式：")]),a._v(" "),t("p",[t("strong",[a._v("概述：")])])])}),[],!1,null,null,null);t.default=v.exports}}]);