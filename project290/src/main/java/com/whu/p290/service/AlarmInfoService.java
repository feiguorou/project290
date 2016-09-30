package com.whu.p290.service;

import java.util.ArrayList;

import com.whu.p290.mapper.param.AlarmQueryParam;
import com.whu.p290.mapper.result.AlarmQueryResult;

/*
 *@author lyx
 *@version 2016-9-28 下午7:38:47
 *the service matches the AlarmQueryDao
 */
public interface AlarmInfoService {
	ArrayList<AlarmQueryResult> getAlarmInfomation(AlarmQueryParam params);
	ArrayList<AlarmQueryResult> getAlarmInfomationByOnlyTime(AlarmQueryParam params);
	ArrayList<AlarmQueryResult> getAllAlarmInfomation();
	ArrayList<AlarmQueryResult> getAlarmInfoByCode(String stadiaCode);
}
