module Jekyll
	module Else
		def default(a, b)
			if (a and !a.empty?) then a else b end
		end
	end
end

Liquid::Template.register_filter(Jekyll::Else)
