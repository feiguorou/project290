package com.whu.p290.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whu.p290.mapper.param.AlarmQueryParam;
import com.whu.p290.mapper.result.AlarmQueryResult;
import com.whu.p290.model.IrrBRStadia;
import com.whu.p290.model.IrrBTCanalDetail;
import com.whu.p290.service.AlarmInfoService;
import com.whu.p290.service.TreeInitService;

/*
 *@author lyx
 *@version 2016-9-28 下午8:02:28
 *simple description 
 */
@Controller
@RequestMapping("AlarmInfoController")
public class AlarmInfoController {
	@Resource
	private TreeInitService treeInitService;
	private List<Map<String, Object>> canalListMaps = new ArrayList<>();

	@Resource
	private AlarmInfoService alarmInfoService;

	@RequestMapping(value = "TreeInit", method = { RequestMethod.GET,
			RequestMethod.POST })
	@ResponseBody
	public String TreeInit() {

		ArrayList<IrrBTCanalDetail> parentCanals = treeInitService
				.getParentCanalInfo();
		if (!parentCanals.isEmpty()) {
			// add branches and leaves
			for (IrrBTCanalDetail parentCanal : parentCanals) {
				Map<String, Object> parentCanalMap = new HashMap<>();
				ArrayList<IrrBTCanalDetail> sonCanals = treeInitService
						.getSonCanalInfo(parentCanal);
				if (!sonCanals.isEmpty()) {
					List<Map<String, Object>> sonCanalListMaps = new ArrayList<>();
					for (IrrBTCanalDetail sonCanal : sonCanals) {
						if (sonCanal.getCanalCode().equals(
								parentCanal.getCanalCode())) {
							ArrayList<IrrBRStadia> sonStadias = new ArrayList<>();
							sonStadias = treeInitService
									.getMultiStadiaByCanal(sonCanal);
							for (IrrBRStadia sonStadia : sonStadias) {
								Map<String, Object> sonCanalMap = new HashMap<>();
								sonCanalMap.put("test",
										sonStadia.getStadiaName());
								sonCanalMap.put("codeOfStadia",
										sonStadia.getStadiacode());
								sonCanalListMaps.add(sonCanalMap);
							}
						} else {
							IrrBRStadia sonStadia = new IrrBRStadia();
							sonStadia = treeInitService
									.getStadiaByCanal(sonCanal);
							Map<String, Object> sonCanalMap = new HashMap<>();
							sonCanalMap.put("test", sonStadia.getStadiaName());
							sonCanalMap.put("codeOfStadia",
									sonStadia.getStadiacode());
							ArrayList<IrrBTCanalDetail> branchCanals = treeInitService
									.getSonCanalInfo(sonCanal);
							if (!branchCanals.isEmpty()) {
								List<Map<String, Object>> branchCanalListMaps = new ArrayList<>();
								for (IrrBTCanalDetail branchCanal : branchCanals) {
									IrrBRStadia branchStadia = new IrrBRStadia();
									branchStadia = treeInitService
											.getStadiaByCanal(branchCanal);
									if (branchStadia != null) {
										Map<String, Object> branchCanalMap = new HashMap<>();
										branchCanalMap.put("test",
												branchStadia.getStadiaName());
										branchCanalMap.put("codeOfStadia",
												branchStadia.getStadiacode());
										branchCanalListMaps.add(branchCanalMap);
									}
								}
								sonCanalMap.put("nodes", branchCanalListMaps);
							}
							sonCanalListMaps.add(sonCanalMap);
						}
					}
					parentCanalMap.put("nodes", sonCanalListMaps);
				}
				canalListMaps.add(parentCanalMap);
			}
		}
		return "success";
	}
	
	@ResponseBody
	@RequestMapping(value ="getAlarmInfo" , method= {RequestMethod.GET,RequestMethod.POST })
	public Object getAlarmInfoByTimeAndCode(String stadiaCode, String beginTime, String endTime){
		AlarmQueryParam params = new AlarmQueryParam();
		params.setStadiaCode(stadiaCode);
		params.setBeginTime(beginTime);
		params.setEndTime(endTime);
		ArrayList<AlarmQueryResult> list = alarmInfoService.getAlarmInfomation(params);
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value ="getAllAlarmInfo" , method= {RequestMethod.GET,RequestMethod.POST })
	public Object getAllAlarmInfo(){
		ArrayList<AlarmQueryResult> list = alarmInfoService.getAllAlarmInfomation();
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value ="getAlarmInfoByCode" , method= {RequestMethod.GET,RequestMethod.POST })
	public Object getAllAlarmInfo(String stadiaCode){
		ArrayList<AlarmQueryResult> list = alarmInfoService.getAlarmInfoByCode(stadiaCode);
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value ="getAlarmInfoByOnlyTime" , method= {RequestMethod.GET,RequestMethod.POST })
	public Object getAllAlarmInfo(String beginTime, String endTime){
		AlarmQueryParam params = new AlarmQueryParam();
		params.setBeginTime(beginTime);
		params.setEndTime(endTime);
		ArrayList<AlarmQueryResult> list = alarmInfoService.getAlarmInfomationByOnlyTime(params);
		return list;
	}
}
