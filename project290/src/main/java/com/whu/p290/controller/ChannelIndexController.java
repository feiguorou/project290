package com.whu.p290.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("channel")
public class ChannelIndexController {

	@RequestMapping(value ="indexCtrl" , method= {RequestMethod.GET,RequestMethod.POST })
	public String index()
	{
		return "channel/index";
	}
}
