package com.whu.p290.mapper.result;

/*
 * @author lyx
 * @date 2016.09.28
 * the query result properties of AlarmQueryMapper-getAlarmInformation()
 */
public class AlarmQueryResult {
	private String stadiaCode;
	private String stadiaName;
	private String meaTime;
	private String ctt;
	private String status;

	public String getStadiaCode() {
		return stadiaCode;
	}

	public void setStadiaCode(String stadiaCode) {
		this.stadiaCode = stadiaCode;
	}

	
	public String getStadiaName() {
		return stadiaName;
	}

	public void setStadiaName(String stadiaName) {
		this.stadiaName = stadiaName;
	}

	public String getMeaTime() {
		return meaTime;
	}

	public void setMeaTime(String meaTime) {
		this.meaTime = meaTime;
	}

	public String getCtt() {
		return ctt;
	}

	public void setCtt(String ctt) {
		this.ctt = ctt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
