package com.whu.p290.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whu.p290.dto.HistoryIrrBRWaterInfo;
import com.whu.p290.dto.HistoryQueryParam;
import com.whu.p290.dto.RealtimeIrrBRWaterInfo;
import com.whu.p290.model.IrrBRStadia;
import com.whu.p290.model.IrrBTCanalDetail;
import com.whu.p290.service.TreeInitService;
import com.whu.p290.service.WaterInfoService;

@Controller
@RequestMapping("WaterInfoController")
public class WaterInfoController {

	@Resource
	private TreeInitService treeInitService;
	private List<Map<String, Object>> canalListMaps=new ArrayList<>();
	
	@Resource
	private WaterInfoService waterInfoService;
	
	/*
	 * 初始化树
	 */
	@RequestMapping(value ="TreeInit" , method= {RequestMethod.GET,RequestMethod.POST })
	@ResponseBody
	public String TreeInit()
	{
		
		ArrayList<IrrBTCanalDetail> parentCanals = treeInitService.getParentCanalInfo();
		if(!parentCanals.isEmpty())
		{
			//对每一个总干渠添加枝叶
			for(IrrBTCanalDetail parentCanal:parentCanals)
			{
				Map<String,Object> parentCanalMap = new HashMap<>();
				ArrayList<IrrBTCanalDetail> sonCanals = treeInitService.getSonCanalInfo(parentCanal);
				if(!sonCanals.isEmpty())
				{
					List<Map<String,Object>> sonCanalListMaps = new ArrayList<>();
					for(IrrBTCanalDetail sonCanal:sonCanals)
					{
						if(sonCanal.getCanalCode().equals(parentCanal.getCanalCode()))
						{
							ArrayList<IrrBRStadia> sonStadias = new ArrayList<>();
							sonStadias = treeInitService.getMultiStadiaByCanal(sonCanal);
							for(IrrBRStadia sonStadia:sonStadias)
							{
								Map<String,Object> sonCanalMap = new HashMap<>();
								sonCanalMap.put("test", sonStadia.getStadiaName());
								sonCanalMap.put("codeOfStadia", sonStadia.getStadiacode());
								sonCanalListMaps.add(sonCanalMap);
							}
						}
						else
						{
							IrrBRStadia sonStadia = new IrrBRStadia();
							sonStadia = treeInitService.getStadiaByCanal(sonCanal);
							Map<String,Object> sonCanalMap = new HashMap<>();
							sonCanalMap.put("test", sonStadia.getStadiaName());
							sonCanalMap.put("codeOfStadia", sonStadia.getStadiacode());
							ArrayList<IrrBTCanalDetail> branchCanals = treeInitService.getSonCanalInfo(sonCanal);
							if(!branchCanals.isEmpty())
							{
								List<Map<String,Object>> branchCanalListMaps = new ArrayList<>();
								for(IrrBTCanalDetail branchCanal:branchCanals)
								{
									IrrBRStadia branchStadia = new IrrBRStadia();
									branchStadia = treeInitService.getStadiaByCanal(branchCanal);
									if(branchStadia != null)
									{
										Map<String,Object> branchCanalMap = new HashMap<>();
										branchCanalMap.put("test", branchStadia.getStadiaName());
										branchCanalMap.put("codeOfStadia", branchStadia.getStadiacode());
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
				//加入到总总数
				canalListMaps.add(parentCanalMap);
			}
		}
		System.out.println("**************获取站点信息**********");
		System.out.println(canalListMaps.get(0).get("text").toString());
		return "success";
	}

	/*
	 * 获取所有水库实时信息
	 */
	@ResponseBody
	@RequestMapping(value ="getNewestWaterInfo" , method= {RequestMethod.GET,RequestMethod.POST })
	public Object getNewestWaterInfo()
	{
		ArrayList<RealtimeIrrBRWaterInfo> list= waterInfoService.getNewestWaterInfo();
		//System.out.println("测站个数 ： " + list.size());
		Iterator<RealtimeIrrBRWaterInfo> iterator = list.iterator();
		//格式化时间
		while(iterator.hasNext())
		{
			RealtimeIrrBRWaterInfo brWaterInfo = iterator.next();
//			System.out.println("测站名称 ： " + brWaterInfo.getStadianame());
//			System.out.println("测站编码 ： " + brWaterInfo.getStadiacode());
//			System.out.println("检测时间 ： " + brWaterInfo.getMeatime());
//			System.out.println("时间格式 ： " + brWaterInfo.getMeatime().getClass());
//			SimpleDateFormat form = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//			String s = form.format(brWaterInfo.getMeatime().toString());
//			brWaterInfo.setMeatime(s);
			brWaterInfo.setMeatime(brWaterInfo.getMeatime().substring(0, 19));
		}
		return list;
	}
	/*
	 * 获取单个水库当天的所有信息
	 */
	@ResponseBody
	@RequestMapping(value ="getWaterInfoByStadiaCode" , method = {RequestMethod.GET,RequestMethod.POST})
	public Object getWaterInfoByStadiaCode(String StadiaCode)
	{
//		System.out.println("后台接受到的数据是 ： " + StadiaCode);
		ArrayList<RealtimeIrrBRWaterInfo> list= waterInfoService.getRTWaterInfoByStadiaCode(StadiaCode);
		Iterator<RealtimeIrrBRWaterInfo> iterator = list.iterator();
		//格式化时间
		while(iterator.hasNext())
		{
			RealtimeIrrBRWaterInfo brWaterInfo = iterator.next();
			brWaterInfo.setMeatime(brWaterInfo.getMeatime().substring(0, 19));
//			System.out.println("所选择的测站名 ： " + brWaterInfo.getStadianame());
//			System.out.println("所选择的测站编码 ： " + brWaterInfo.getStadiacode());
		}
		return list;
	}
	/*
	 *获取单个水库自定义历史信息
	 */
	@ResponseBody
	@RequestMapping(value ="getHistoryWaterInfo" , method = {RequestMethod.GET,RequestMethod.POST})
	public Object getWaterInfoByTime(String StadiaCode, String beginTime, String endTime)
	{
		System.out.println("控制层******************");
		System.out.println("查看历史信息******前台传来的code：" + StadiaCode);
		beginTime = beginTime + " 00:00:00.000";
		endTime = endTime + " 23:59:59.000";
		System.out.println("查看历史记录");
		System.out.println("起始时间 ： " + beginTime);
		System.out.println("结束时间： " + endTime);
		HistoryQueryParam param = new HistoryQueryParam();
		param.setBeginTime(beginTime);
		param.setEndTime(endTime);
		param.setStadiaCode(StadiaCode);
		ArrayList<HistoryIrrBRWaterInfo> list = waterInfoService.getHistoryWaterInfo(param);
		Iterator<HistoryIrrBRWaterInfo> iterator = list.iterator();
		while(iterator.hasNext())
		{
			HistoryIrrBRWaterInfo brWaterInfo = iterator.next();
			brWaterInfo.setMeatime(brWaterInfo.getMeatime().substring(0,19));
//			System.out.println("闸下水位 ： " + brWaterInfo.getHeightdown());
//			System.out.println("***");
		}
		return list;
	}
}
