/*
Navicat MySQL Data Transfer

Source Server         : localhost-3360
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2017-06-16 13:02:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for daka_time
-- ----------------------------
DROP TABLE IF EXISTS `daka_time`;
CREATE TABLE `daka_time` (
  `number` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `idcar` varchar(255) default NULL,
  `s_daka_1` varchar(255) default NULL,
  `x_daka_1` varchar(255) default NULL,
  `s_daka_2` varchar(255) default NULL,
  `x_daka_2` varchar(255) default NULL,
  `s_daka_3` varchar(255) default NULL,
  `x_daka_3` varchar(255) default NULL,
  `s_daka_4` varchar(255) default NULL,
  `x_daka_4` varchar(255) default NULL,
  `s_daka_5` varchar(255) default NULL,
  `x_daka_5` varchar(255) default NULL,
  PRIMARY KEY  (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of daka_time
-- ----------------------------
INSERT INTO `daka_time` VALUES ('2', '发在', '510503177812144893', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `daka_time` VALUES ('3', '干饭', '530510124510143690', null, null, null, null, null, null, null, null, '2017/06/16 11：25：07', '2017/06/16 11：25：07');
INSERT INTO `daka_time` VALUES ('4', '如同', '510503145612127890', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `daka_time` VALUES ('5', '地方', '510503178902257893', null, null, null, null, null, null, null, null, null, null);
