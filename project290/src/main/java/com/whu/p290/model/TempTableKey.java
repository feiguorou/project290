package com.whu.p290.model;

public class TempTableKey {
    private String personCode;

    private String modal;

    public String getPersonCode() {
        return personCode;
    }

    public void setPersonCode(String personCode) {
        this.personCode = personCode == null ? null : personCode.trim();
    }

    public String getModal() {
        return modal;
    }

    public void setModal(String modal) {
        this.modal = modal == null ? null : modal.trim();
    }
}