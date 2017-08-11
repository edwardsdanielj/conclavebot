//File to listen for command typed by users

var current_chat_channel;
var current_voice_channel;

function listen()
{
  //Constant listener to a channel
  //Get message
  //Get channel --set to var

  current_chat_channel = ;
  current_voice_channel = ;

  parse(msg);
}

function parse(msg)
{
  //Get the command and parameters
  var delim_cmd;
  return [delim_cmd, api(delim_cmd)];
}

function api(_api)
{
  //Determine which API will be used
  if (_api == "gif")
  {
    return GiphySesh;
  }
  else if (_api == "pic")
  {
    return ImgurSesh;
  }
  else
  {
    return "";
  }
}
