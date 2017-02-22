require 'spec_helper'
require 'day_1'

describe PathFinder do
  describe "#prep" do
    it 'turns coords into an array' do
      input = 'R2, L3'
      path = PathFinder.new(input)
      expect(path.prep).to eq(['R2', 'L3'])
    end
  end

  describe "#get_x2" do
    it "returns the value of x2" do
      input = 'R2, L3'
      path = PathFinder.new(input)
      expect(path.get_x2).to eq(2)
    end
  end
end


# |y1 – y2| + |x1 – x2|

# moves ping pong from x to y
# first move is always x
