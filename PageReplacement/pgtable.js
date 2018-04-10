var phy_size, log_size, size_pg,no_frames,no_pages;
var pg_array = [], la;
function SetLAS($las)
{
	log_size = $las;
	if(log_size<=0)
		alert("Invalid Inputs");
}
function SetPAS($pas)
{
	phy_size = $pas;
	if(phy_size<=0)
		alert("Invalid Inputs");
}

function Setla($add)
{
	la = $add;
	if(la<=0)
		alert("Invalid Inputs");
}

function SetPg($pg)
{
	size_pg = $pg;
	no_frames = phy_size/size_pg;
	no_pages = log_size/size_pg;
	var $container = document.getElementById('PgFields');
	$container.innerHTML = '';
	var $i,$field,$item;
	for ($i = 0; $i < no_pages; $i++) 
	{
		$field = document.createElement('input');
		$field.name = 'Table[' + $i + ']';
		$field.type = 'text';
        $field.setAttribute("class","form-control");
        $field.setAttribute("size","30");
		$container.appendChild($field);
	}
}

function checkentry()
{
	var pg_entry = document.pg_entries
	for(var i = 1;i <= no_pages; i++)
	{
		pg_array[i-1] = Number(pg_entry[i].value);
		var page_table = {pg_no: "", frame: ""};
		page_table.pg_no = i-1;
		page_table.frame = pg_array[i-1];
		pg_array[i-1] = page_table;
	}
	console.log(la);
	console.log(pg_array);

	if(la<0)
		alert("Invalid Inputs");
	else
	{
		p_pgno = Math.floor(la/size_pg);
		p_offset = la%size_pg;
		console.log(p_pgno);
		p_frame = pg_array[p_pgno].frame;
		p_pa = p_frame*size_pg + p_offset;

		if(p_frame == -1)
		{
			alert("No such Logical Address exists\nPage Fault");
		}
		else
		{
			var newl = "\r\n";
			var msg = "Page No: " + p_pgno;
			msg += newl;
			msg += "Page Offset: " + p_offset;
			msg += newl;
			msg += "Page Frame: " + p_frame;
			msg += newl;
			msg += "Physical Address: " + p_pa;
			alert(msg);
		}
		console.log(p_pgno);
		console.log(p_offset);
		console.log(p_frame);
		console.log(p_pa);
		
	}
}