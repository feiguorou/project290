package com.whu.p290.model;

import java.util.Date;

public class IrrBRWaterLevelAlarmKey {
    private String stadiaCode;

    private Date meaTime;

    public String getStadiaCode() {
        return stadiaCode;
    }

    public void setStadiaCode(String stadiaCode) {
        this.stadiaCode = stadiaCode == null ? null : stadiaCode.trim();
    }

    public Date getMeaTime() {
        return meaTime;
    }

    public void setMeaTime(Date meaTime) {
        this.meaTime = meaTime;
    }
}