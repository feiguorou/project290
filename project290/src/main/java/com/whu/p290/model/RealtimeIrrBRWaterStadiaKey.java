package com.whu.p290.model;

import java.util.Date;

public class RealtimeIrrBRWaterStadiaKey {
    private String stadiacode;

	private Date meatime;

	public String getStadiacode() {
		return stadiacode;
	}

	public void setStadiacode(String stadiacode) {
		this.stadiacode = stadiacode == null ? null : stadiacode.trim();
	}

	public Date getMeatime() {
		return meatime;
	}

	public void setMeatime(Date meatime) {
		this.meatime = meatime;
	}

	
}