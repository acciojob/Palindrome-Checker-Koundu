// complete the given function

function palindrome(str){
	let rev = str.split("").reverse().join("");
	if(str == rev){
		return true;
	}
	return false;
}
module.exports = palindrome
