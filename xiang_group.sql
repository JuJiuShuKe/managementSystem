/*
Navicat MySQL Data Transfer

Source Server         : localhost-3360
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2017-06-16 13:02:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xiang_group
-- ----------------------------
DROP TABLE IF EXISTS `xiang_group`;
CREATE TABLE `xiang_group` (
  `number` bigint(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `age` int(11) default NULL,
  `sex` varchar(255) default NULL,
  `idcar` varchar(255) default NULL,
  `phonum` varchar(11) default NULL,
  `qqnum` varchar(11) default NULL COMMENT '职业\r\n',
  `Occupation` varchar(255) default NULL,
  `Ict_time` varchar(255) default NULL COMMENT '时间',
  `education` varchar(255) default NULL COMMENT '学历',
  PRIMARY KEY  (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiang_group
-- ----------------------------
INSERT INTO `xiang_group` VALUES ('2', '发在', '24', '女', '510503177812144893', '15328469525', '1536874523', '非常', '20140303', '高中');
INSERT INTO `xiang_group` VALUES ('3', '干饭', '36', '男', '530510124510143690', '15325625451', '215212525', '但是', '20160302', '中专');
INSERT INTO `xiang_group` VALUES ('4', '如同', '38', '男', '510503145612127890', '15325524153', '4544542152', '通风', '20160103', '硕士');
INSERT INTO `xiang_group` VALUES ('5', '地方', '36', '男', '510503178902257893', '15325858587', '4563453', '的是', '2017-06-20', '博士后');
