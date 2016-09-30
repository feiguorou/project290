package com.whu.p290.dao;

import java.util.ArrayList;

import com.whu.p290.mapper.param.AlarmQueryParam;
import com.whu.p290.mapper.result.AlarmQueryResult;

/*
 * @author lyx
 * @date: 2016.09.28
 * the dao of AlarmQueryMapper
 */
public interface AlarmQueryDao {
	ArrayList<AlarmQueryResult> selectAlarmInfo(AlarmQueryParam params);
	ArrayList<AlarmQueryResult> selectAlarmInfoByOnlyTime(AlarmQueryParam params);
	ArrayList<AlarmQueryResult> selectAllAlarmInfo();
	ArrayList<AlarmQueryResult> selectAlarmInfoByCode(String stadiaCode);
	
}
