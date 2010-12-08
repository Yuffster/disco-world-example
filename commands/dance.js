new Class({

	Extends: Command,

	execute: function(content) {
		this.emit("%You dance%s the night away.");
		return true;
	}

});
