package com.ScrumTool.BacklogItems;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class BacklogItemsController {

	@Autowired
	private BacklogItemsRepository backlogItemRepository;
	
	
	//returns data from backlogItem table
	public List<BacklogItems> getAllBacklogItem() {
		return backlogItemRepository.findAll();
	}
	
}
