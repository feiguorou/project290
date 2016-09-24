package com.whu.p290.dao;

import java.util.ArrayList;

import com.whu.p290.dto.RealtimeIrrBRWaterInfo;
import com.whu.p290.model.RealtimeIrrBRWaterStadia;
import com.whu.p290.model.RealtimeIrrBRWaterStadiaKey;

public interface RealtimeIrrBRWaterStadiaMapper {


	int deleteByPrimaryKey(RealtimeIrrBRWaterStadiaKey key);

    int insert(RealtimeIrrBRWaterStadia record);

    int insertSelective(RealtimeIrrBRWaterStadia record);

    RealtimeIrrBRWaterStadia selectByPrimaryKey(RealtimeIrrBRWaterStadiaKey key);

    int updateByPrimaryKeySelective(RealtimeIrrBRWaterStadia record);

    int updateByPrimaryKey(RealtimeIrrBRWaterStadia record);
    
    ArrayList<RealtimeIrrBRWaterInfo> getNewestWaterInfo();
    
    ArrayList<RealtimeIrrBRWaterInfo> getRTWaterInfoByStadiaCode(String StadiaCode);
}