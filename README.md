注释1 :模板页面
<script type="text/javascript" src="<%=
    htmlWebpackPlugin.files.chunks.main.entry %>"> 
    </script>
  <script type="text/javascript" src="<%=
    htmlWebpackPlugin.files.chunks.a.entry %>">   
    </script> 
    可以这么引入文件


注释2 ：  模板页面  htmlWebpackPlugin 的使用方法
 <!-- <%= htmlWebpackPlugin.options.date %>> -->
    <!-- <% for(let key in htmlWebpackPlugin.files) {%>
      <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>
      <% } %>
      <%= htmlWebpackPlugin.options.date %>>
    <% for(let key in htmlWebpackPlugin.options) {%>
      <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.options[key]) %>
      <% } %> -->  