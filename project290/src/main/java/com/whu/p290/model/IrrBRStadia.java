package com.whu.p290.model;

import java.math.BigDecimal;
import java.util.Date;

public class IrrBRStadia {
    private String stadiacode;

    private String stadiaName;

    private String stadiaType;

    private String locCode;

    private BigDecimal waterdamD;

    private String stbk;

    private String flowDir;

    private String datTp;

    private BigDecimal datElev;

    private BigDecimal modBasVal;

    private BigDecimal modPara;

    private String estStYm;

    private String runCond;

    private String engManCd;

    private Date timeSign;

    private String remark;

    public String getStadiacode() {
        return stadiacode;
    }

    public void setStadiacode(String stadiacode) {
        this.stadiacode = stadiacode == null ? null : stadiacode.trim();
    }

    public String getStadiaName() {
        return stadiaName;
    }

    public void setStadiaName(String stadiaName) {
        this.stadiaName = stadiaName == null ? null : stadiaName.trim();
    }

    public String getStadiaType() {
        return stadiaType;
    }

    public void setStadiaType(String stadiaType) {
        this.stadiaType = stadiaType == null ? null : stadiaType.trim();
    }

    public String getLocCode() {
        return locCode;
    }

    public void setLocCode(String locCode) {
        this.locCode = locCode == null ? null : locCode.trim();
    }

    public BigDecimal getWaterdamD() {
        return waterdamD;
    }

    public void setWaterdamD(BigDecimal waterdamD) {
        this.waterdamD = waterdamD;
    }

    public String getStbk() {
        return stbk;
    }

    public void setStbk(String stbk) {
        this.stbk = stbk == null ? null : stbk.trim();
    }

    public String getFlowDir() {
        return flowDir;
    }

    public void setFlowDir(String flowDir) {
        this.flowDir = flowDir == null ? null : flowDir.trim();
    }

    public String getDatTp() {
        return datTp;
    }

    public void setDatTp(String datTp) {
        this.datTp = datTp == null ? null : datTp.trim();
    }

    public BigDecimal getDatElev() {
        return datElev;
    }

    public void setDatElev(BigDecimal datElev) {
        this.datElev = datElev;
    }

    public BigDecimal getModBasVal() {
        return modBasVal;
    }

    public void setModBasVal(BigDecimal modBasVal) {
        this.modBasVal = modBasVal;
    }

    public BigDecimal getModPara() {
        return modPara;
    }

    public void setModPara(BigDecimal modPara) {
        this.modPara = modPara;
    }

    public String getEstStYm() {
        return estStYm;
    }

    public void setEstStYm(String estStYm) {
        this.estStYm = estStYm == null ? null : estStYm.trim();
    }

    public String getRunCond() {
        return runCond;
    }

    public void setRunCond(String runCond) {
        this.runCond = runCond == null ? null : runCond.trim();
    }

    public String getEngManCd() {
        return engManCd;
    }

    public void setEngManCd(String engManCd) {
        this.engManCd = engManCd == null ? null : engManCd.trim();
    }

    public Date getTimeSign() {
        return timeSign;
    }

    public void setTimeSign(Date timeSign) {
        this.timeSign = timeSign;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}