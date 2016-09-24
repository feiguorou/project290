package com.whu.p290.model;

public class IrrBRWaterLevelAlarm extends IrrBRWaterLevelAlarmKey {
    private String stadiaName;

    private String ctt;

    private String status;

    public String getStadiaName() {
        return stadiaName;
    }

    public void setStadiaName(String stadiaName) {
        this.stadiaName = stadiaName == null ? null : stadiaName.trim();
    }

    public String getCtt() {
        return ctt;
    }

    public void setCtt(String ctt) {
        this.ctt = ctt == null ? null : ctt.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }
}