CXX = gcc
CFLAGS = -Wall -O3 -std=c++11
SRCROOT = src
SRCDIRS = $(shell find $(SRCROOT) -type d)
SOURCES = $(foreach dir, $(SRCDIRS), $(wildcard $(dir)/*.c))

build: $(SOURCES)
	$(CXX) $^

debug:
	@echo $(SOURCES)
