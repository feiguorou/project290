package com.whu.p290.dao;

import com.whu.p290.model.IrrBRWaterLevelAlarm;
import com.whu.p290.model.IrrBRWaterLevelAlarmKey;

public interface IrrBRWaterLevelAlarmMapper {
    int deleteByPrimaryKey(IrrBRWaterLevelAlarmKey key);

    int insert(IrrBRWaterLevelAlarm record);

    int insertSelective(IrrBRWaterLevelAlarm record);

    IrrBRWaterLevelAlarm selectByPrimaryKey(IrrBRWaterLevelAlarmKey key);

    int updateByPrimaryKeySelective(IrrBRWaterLevelAlarm record);

    int updateByPrimaryKey(IrrBRWaterLevelAlarm record);
}