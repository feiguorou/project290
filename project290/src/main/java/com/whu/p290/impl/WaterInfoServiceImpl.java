package com.whu.p290.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.whu.p290.dao.HistoryIrrBRWaterStadiaMapper;
import com.whu.p290.dao.RealtimeIrrBRWaterStadiaMapper;
import com.whu.p290.dto.HistoryIrrBRWaterInfo;
import com.whu.p290.dto.HistoryQueryParam;
import com.whu.p290.dto.RealtimeIrrBRWaterInfo;
import com.whu.p290.service.WaterInfoService;
//获取实时或者历史测站信息
@Service("waterInfoService")
public class WaterInfoServiceImpl implements WaterInfoService{

	@Resource
	private RealtimeIrrBRWaterStadiaMapper realtimeIrrBRWaterStadiaMapper;
	@Resource
	private HistoryIrrBRWaterStadiaMapper historyIrrBRWaterStadiaMapper;
	
	@Override
	public ArrayList<RealtimeIrrBRWaterInfo> getNewestWaterInfo() {
		// TODO Auto-generated method stub
		ArrayList<RealtimeIrrBRWaterInfo> list = realtimeIrrBRWaterStadiaMapper.getNewestWaterInfo();
		return list;
	}

	@Override
	public ArrayList<RealtimeIrrBRWaterInfo> getRTWaterInfoByStadiaCode(
			String StadiaCode) {
		// TODO Auto-generated method stub
		ArrayList<RealtimeIrrBRWaterInfo> list = realtimeIrrBRWaterStadiaMapper.getRTWaterInfoByStadiaCode(StadiaCode);
		//System.out.println("从实现层查找名称 ： " + list.get(0).getStadianame());
		return list;
	}

	@Override
	public ArrayList<HistoryIrrBRWaterInfo> getHistoryWaterInfo(
			HistoryQueryParam param) {
		// TODO Auto-generated method stub
		ArrayList<HistoryIrrBRWaterInfo> list = historyIrrBRWaterStadiaMapper.getHistoryWaterInfo(param);
		return list;
	}
	

}
