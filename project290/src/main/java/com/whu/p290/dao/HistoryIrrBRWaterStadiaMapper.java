package com.whu.p290.dao;

import java.util.ArrayList;

import com.whu.p290.dto.HistoryIrrBRWaterInfo;
import com.whu.p290.dto.HistoryQueryParam;
import com.whu.p290.model.HistoryIrrBRWaterStadia;
import com.whu.p290.model.HistoryIrrBRWaterStadiaKey;

public interface HistoryIrrBRWaterStadiaMapper {
    int deleteByPrimaryKey(HistoryIrrBRWaterStadiaKey key);

    int insert(HistoryIrrBRWaterStadia record);

    int insertSelective(HistoryIrrBRWaterStadia record);

    HistoryIrrBRWaterStadia selectByPrimaryKey(HistoryIrrBRWaterStadiaKey key);

    int updateByPrimaryKeySelective(HistoryIrrBRWaterStadia record);

    int updateByPrimaryKey(HistoryIrrBRWaterStadia record);
    
    ArrayList<HistoryIrrBRWaterInfo> getHistoryWaterInfo(HistoryQueryParam record);
}