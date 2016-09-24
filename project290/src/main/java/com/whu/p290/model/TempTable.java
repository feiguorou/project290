package com.whu.p290.model;

import java.util.Date;

public class TempTable extends TempTableKey {
    private String saveData;

    private Date timeSign;

    public String getSaveData() {
        return saveData;
    }

    public void setSaveData(String saveData) {
        this.saveData = saveData == null ? null : saveData.trim();
    }

    public Date getTimeSign() {
        return timeSign;
    }

    public void setTimeSign(Date timeSign) {
        this.timeSign = timeSign;
    }
}