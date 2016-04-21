module Jekyll
	module Sorts
		def sort_by_index(xs, key, order)
			xs.sort_by.with_index { |x, i| 
				[order.index { |y| x.data[key].start_with? y }, i]
			}
		end
	end
end

Liquid::Template.register_filter(Jekyll::Sorts)
