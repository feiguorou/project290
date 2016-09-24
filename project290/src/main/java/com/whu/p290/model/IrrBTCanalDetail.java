package com.whu.p290.model;

import java.math.BigDecimal;
import java.util.Date;

public class IrrBTCanalDetail {
    private String canalCode;

    private String canalNm;

    private String canalG;

    private String materialType;

    private String liningType;

    private String frostHeavingType;

    private String transectType;

    private BigDecimal roughness;

    private BigDecimal gradient;

    private BigDecimal canalDesQ;

    private BigDecimal canalLen;

    private String engManCd;

    private String upperCanalCd;

    private Date timeSign;

    private String remark;

    public String getCanalCode() {
        return canalCode;
    }

    public void setCanalCode(String canalCode) {
        this.canalCode = canalCode == null ? null : canalCode.trim();
    }

    public String getCanalNm() {
        return canalNm;
    }

    public void setCanalNm(String canalNm) {
        this.canalNm = canalNm == null ? null : canalNm.trim();
    }

    public String getCanalG() {
        return canalG;
    }

    public void setCanalG(String canalG) {
        this.canalG = canalG == null ? null : canalG.trim();
    }

    public String getMaterialType() {
        return materialType;
    }

    public void setMaterialType(String materialType) {
        this.materialType = materialType == null ? null : materialType.trim();
    }

    public String getLiningType() {
        return liningType;
    }

    public void setLiningType(String liningType) {
        this.liningType = liningType == null ? null : liningType.trim();
    }

    public String getFrostHeavingType() {
        return frostHeavingType;
    }

    public void setFrostHeavingType(String frostHeavingType) {
        this.frostHeavingType = frostHeavingType == null ? null : frostHeavingType.trim();
    }

    public String getTransectType() {
        return transectType;
    }

    public void setTransectType(String transectType) {
        this.transectType = transectType == null ? null : transectType.trim();
    }

    public BigDecimal getRoughness() {
        return roughness;
    }

    public void setRoughness(BigDecimal roughness) {
        this.roughness = roughness;
    }

    public BigDecimal getGradient() {
        return gradient;
    }

    public void setGradient(BigDecimal gradient) {
        this.gradient = gradient;
    }

    public BigDecimal getCanalDesQ() {
        return canalDesQ;
    }

    public void setCanalDesQ(BigDecimal canalDesQ) {
        this.canalDesQ = canalDesQ;
    }

    public BigDecimal getCanalLen() {
        return canalLen;
    }

    public void setCanalLen(BigDecimal canalLen) {
        this.canalLen = canalLen;
    }

    public String getEngManCd() {
        return engManCd;
    }

    public void setEngManCd(String engManCd) {
        this.engManCd = engManCd == null ? null : engManCd.trim();
    }

    public String getUpperCanalCd() {
        return upperCanalCd;
    }

    public void setUpperCanalCd(String upperCanalCd) {
        this.upperCanalCd = upperCanalCd == null ? null : upperCanalCd.trim();
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