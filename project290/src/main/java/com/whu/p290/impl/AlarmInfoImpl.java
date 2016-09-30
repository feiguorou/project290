package com.whu.p290.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.whu.p290.dao.AlarmQueryDao;
import com.whu.p290.mapper.param.AlarmQueryParam;
import com.whu.p290.mapper.result.AlarmQueryResult;
import com.whu.p290.service.AlarmInfoService;

/*
 *@author lyx
 *@version 2016-9-28 下午7:49:57
 *simple description 
 */
@Service("AlarmInfoService")
public class AlarmInfoImpl implements AlarmInfoService{
	@Resource
	AlarmQueryDao alarmQueryDao;
	
	@Override
	public ArrayList<AlarmQueryResult> getAlarmInfomation(AlarmQueryParam params) {
		ArrayList<AlarmQueryResult> list = alarmQueryDao.selectAlarmInfo(params);
		return list;
	}

	@Override
	public ArrayList<AlarmQueryResult> getAllAlarmInfomation() {
		ArrayList<AlarmQueryResult> list = alarmQueryDao.selectAllAlarmInfo();
		return list;
	}

	@Override
	public ArrayList<AlarmQueryResult> getAlarmInfoByCode(String stadiaCode) {
		ArrayList<AlarmQueryResult> list = alarmQueryDao.selectAlarmInfoByCode(stadiaCode);
		return list;
	}

	@Override
	public ArrayList<AlarmQueryResult> getAlarmInfomationByOnlyTime(
			AlarmQueryParam params) {
		ArrayList<AlarmQueryResult> list = alarmQueryDao.selectAlarmInfoByOnlyTime(params);
		return list;
	}

}
