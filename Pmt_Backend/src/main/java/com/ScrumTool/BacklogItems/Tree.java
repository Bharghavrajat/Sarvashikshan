package com.ScrumTool.BacklogItems;

import java.util.List;
import java.util.ArrayList;

public class Tree {
	 private long id;
	 private String type;
	 private List<Tree> children;
	
	 public Tree(long id,String type) {
	        this.id = id;
	        this.type = type;
	        this.children = new ArrayList<>();
	    }
	
	 public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getId() {
	        return id;
	    }

	    public void setId(long id) {
	        this.id = id;
	    }

	    public List<Tree> getChildren() {
	        return children;
	    }

	    public void setChildren(List<Tree> children) {
	        this.children = children;
	    }
}
