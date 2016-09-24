package test;

import java.util.ArrayList;

import javax.annotation.Resource;

import com.whu.p290.dao.RealtimeIrrBRWaterStadiaMapper;
import com.whu.p290.dto.RealtimeIrrBRWaterInfo;

public class TestGetNewestWaterInfo {

	/**
	 * @param args
	 */
	@Resource
	private static RealtimeIrrBRWaterStadiaMapper realtimeIrrBRWaterStadiaMapper;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<RealtimeIrrBRWaterInfo> list = realtimeIrrBRWaterStadiaMapper.getNewestWaterInfo();
		System.out.println("数据库中的条目 ： " + list.size());
	}

}
