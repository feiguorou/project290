package com.whu.p290.service;

import java.util.ArrayList;

import com.whu.p290.dto.HistoryIrrBRWaterInfo;
import com.whu.p290.dto.HistoryQueryParam;
import com.whu.p290.dto.RealtimeIrrBRWaterInfo;

public interface WaterInfoService {

	//获取所有测站实时信息
	ArrayList<RealtimeIrrBRWaterInfo> getNewestWaterInfo();
	//获取单个测站实时当日信息
	ArrayList<RealtimeIrrBRWaterInfo> getRTWaterInfoByStadiaCode(String StadiaCode);
	//获取单个测站历史信息
	ArrayList<HistoryIrrBRWaterInfo> getHistoryWaterInfo(HistoryQueryParam param);
	
	
}
