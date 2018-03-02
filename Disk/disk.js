function getBitStreamAndPlot(event, r1, ini, final, alg)

                        var inp=[],r2=r1.split(" "),r3;
                        for(a1=0;a1<r2.length;++a1){
                                if(r2[a1]==""){continue;}
                                r3=parseInt(r2[a1]);
                                inp.push(r3);
                        }
                        console.log(r2);
                        console.log(inp);
                        if(alg=="fcfs"){
                                fcfs(inp, ini, final);
                        }
                        if(alg=="sstf"){
                                sstf(inp, ini, final);
                        }
                        if(alg=="scan"){
                                scan(inp, ini, final);
                        }
                        if(alg=="cscan"){
                                cscan(inp, ini, final);
                        }
                        if(alg=="look"){
                                look(inp, ini, final);
                        }
                        if(alg=="clook"){
                                clook(inp, ini, final);
                        }
function fcfs(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var seek

                        x1.push(ini);
                        y1.push(

                        

                        for(a1=1;a1<=inp.length;++a1){
                                x1.push(inp[a1-1]);
                                y1.push(-1*a1);
                                if(a1==1){
                                        seek=seek+Math.abs(ini-inp[a1-1]);
                                }
                                else{
                                        seek=seek+Math.abs(inp[a1-2]-inp[a1-1]);
                                }
                        }
                
                        var layout = {
                                title: 'FCFS',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter'
                        };
                                
                        var data = [trace1];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "FCFS";
                

function sstf(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var seek=0;
                        var visi

                        var a1,a

                        for(a1=0;a1<inp.length;++a1){
                                visited[a1]=0;
                        }
                        
                        x1.push(ini);
                        y1.push(

                        var hold

                        for(a1=1;a1<=inp.length;++a1){
                                var mn=10000;
                                var idx;
                                for(a2=0;a2<inp.length;++a2){
                                        if(visited[a2]==0){
                                                if(Math.abs(hold-inp[a2])<mn){
                                                        idx=a2;
                                                        mn=Math.abs(hold-inp[a2]);                 
                                                }
                                        }
                                }
                                seek=seek+Math.abs(hold-inp[idx]);
                                visited[idx]=1;
                                hold=inp[idx];
                                x1.push(inp[idx]);
                                y1.push(-1*a1);
                        

                        var layout = {
                                title: 'SSTF',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter'
                        };
                                
                        var data = [trace1];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "SSTF";
                

function scan(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var seek=0;
                        var visi

                        var a1,a

                        for(a1=0;a1<inp.length;++a1){
                                visited[a1]=0;
                        }
                        
                        x1.push(ini);
                        y1.push(

                        inp.sort(function(a, b){return a

                        if(ini<=(final-ini)){
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]<=ini){store=a1;}}
                                var count=1;
                                for(a1=store;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                x1.push(0);
                                y1.push(-1*count);
                                seek=seek+hold;
                                hold=0;
                                ++count;
                                for(a1=store+1;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                        }
                        else{
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]>=ini){store=a1;break}}
                                var count=1;
                                for(a1=store;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                                x1.push(final);
                                y1.push(-1*count);
                                seek=seek+final-hold;
                                hold=final;
                                ++count;
                                for(a1=store-1;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                
                        

                        var layout = {
                                title: 'SCAN',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter'
                        };
                                
                        var data = [trace1];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "SCAN";
                

function cscan(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var x2=[];
                        var y2=[];
                        var x3=[];
                        var y3=[];
                        var seek=0;
                        var visi

                        var a1,a

                        for(a1=0;a1<inp.length;++a1){
                                visited[a1]=0;
                        }
                        
                        x1.push(ini);
                        y1.push(

                        inp.sort(function(a, b){return a

                        if(ini<=(final-ini)){
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]<=ini){store=a1;}}
                                var count=1;
                                for(a1=store;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                x1.push(0);
                                y1.push(-1*count);
                                seek=seek+hold;
                                hold=fin

                                x2.push(0);
                                y2.push(-1*count);
                                x2.push(final);
                                y2.push(-1*count);
                                
                                x3.push(final);
                                y3.push(-1*count);
                                ++count;
                                for(a1=inp.length-1;a1>store;--a1){
                                        x3.push(inp[a1]);
                                        y3.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                        }
                        else{
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]>=ini){store=a1;break;}}
                                var count=1;
                                for(a1=store;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                x1.push(final);
                                y1.push(-1*count);
                                seek=seek+final-hold;
                                

                                x2.push(final);
                                y2.push(-1*count);
                                x2.push(0);
                                y2.push(-1*count);
                                
                                x3.push(0);
                                y3.push(-1*count);
                                ++count;
                                for(a1=0;a1<store;++a1){
                                        x3.push(inp[a1]);
                                        y3.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                                
                        

                        var layout = {
                                title: 'C-SCAN',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter',
                                name: ''
                        };
                        var trace2 = {
                                x: x2, 
                                y: y2, 
                                mode: 'lines',
                                name: '',
                                line: {
                                        dash: 'dashdot',
                                        width: 4
                                }
                        };
                        var trace3 = {
                                x: x3, 
                                y: y3, 
                                type: 'scatter',
                                name: ''
                        };
                                
                        var data = [trace1,trace2,trace3];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "C-SCAN";
                

function look(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var seek=0;
                        var visi

                        var a1,a

                        for(a1=0;a1<inp.length;++a1){
                                visited[a1]=0;
                        }
                        
                        x1.push(ini);
                        y1.push(

                        inp.sort(function(a, b){return a

                        if(ini<=(final-ini)){
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]<=ini){store=a1;}}
                                var count=1;
                                for(a1=store;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                
                                for(a1=store+1;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                        }
                        else{
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]>=ini){store=a1;break}}
                                var count=1;
                                for(a1=store;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                                
                                for(a1=store-1;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                }
                                
                        

                        var layout = {
                                title: 'LOOK',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter'
                        };
                                
                        var data = [trace1];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "LOOK";
                

function clook(inp, ini, final){
                        var x1=[];
                        var y1=[];
                        var x2=[];
                        var y2=[];
                        var x3=[];
                        var y3=[];
                        var seek=0;
                        var visi

                        var a1,a

                        for(a1=0;a1<inp.length;++a1){
                                visited[a1]=0;
                        }
                        
                        x1.push(ini);
                        y1.push(

                        inp.sort(function(a, b){return a

                        if(ini<=(final-ini)){
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]<=ini){store=a1;}}
                                var count=1;
                                for(a1=store;a1>=0;--a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                

                                

                                x2.push(hold);
                                y2.push(-1*(count-1));
                                x2.push(inp[inp.length-1]);
                                y2.push(-1*(count-1));
                                x3.push(inp[inp.length-1]);
                                y3.push(-1*(count-1));
                        
                                hold=inp[inp.len

                                for(a1=inp.length-2;a1>store;--a1){
                                        x3.push(inp[a1]);
                                        y3.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                        }
                        else{
                                var store,hold=ini;
                                for(a1=0;a1<inp.length;++a1){if(inp[a1]>=ini){store=a1;break;}}
                                var count=1;
                                for(a1=store;a1<inp.length;++a1){
                                        x1.push(inp[a1]);
                                        y1.push(-1*count);
                                        ++count;
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];
                                

                                

                                x2.push(hold);
                                y2.push(-1*(count-1));
                                x2.push(inp[0]);
                                y2.push(-1*(count-1));
                                
                                x3.push(inp[0]);
                                y3.push(-1*(count-1));
                        
                                hold=inp

                                for(a1=1;a1<store;++a1){
                                        x3.push(inp[a1]);
                                        y3.push(-1*count);
                                        ++count;      
                                        seek=seek+Math.abs(hold-inp[a1]);
                                        hold=inp[a1];                          
                                }
                                
                        

                        var layout = {
                                title: 'C-LOOK',
                                xaxis: {
                                        autorange: true,
                                        showgrid: true,
                                        zeroline: false,
                                        showline: true,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: true,
                                        title: 'Cylinder Number'
                                },
                                yaxis: {
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                }
                        

                        var trace1 = {
                                x: x1, 
                                y: y1, 
                                type: 'scatter',
                                name: ''
                        };
                        var trace2 = {
                                x: x2, 
                                y: y2, 
                                mode: 'lines',
                                name: '',
                                line: {
                                        dash: 'dashdot',
                                        width: 4
                                }
                        };
                        var trace3 = {
                                x: x3, 
                                y: y3, 
                                type: 'scatter',
                                name: ''
                        };
                                
                        var data = [trace1,trace2,trace3];
                        Plotly.newPlot('graph-area', data, layout);
                        document.getElementById("alg-seek").innerHTML = "Seek: "+seek;
                        document.getElementById("alg-name").innerHTML = "C-LOOK";
                }               