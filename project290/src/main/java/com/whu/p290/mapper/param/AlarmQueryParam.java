package com.whu.p290.mapper.param;
/*
 * @author lyx
 * @date 2016.09.28
 * the query params of AlarmQueryMapper-getAlarmInformation()
 */
public class AlarmQueryParam {
	private String stadiaCode;
	private String beginTime;
	private String endTime;

	public String getStadiaCode() {
		return stadiaCode;
	}

	public void setStadiaCode(String stadiaCode) {
		this.stadiaCode = stadiaCode;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

}
