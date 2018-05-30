var xsltFOObj = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http:\/\/www.w3.org\/1999\/XSL\/Transform\" xmlns:NS1=\"http:\/\/www.greco.eu\/schemas\/2014\/GOSPOS\">\r\n  <xsl:output omit-xml-declaration=\"yes\" indent=\"yes\" encoding=\"UTF-8\" \/>\r\n  <xsl:template match=\"*\">\r\n  <sasa>\r\n<xsl:for-each select=\"NS1:item\">\r\n   <xsl:if test=\"@NS1:name\">\r\n      <xsl:value-of select=\"concat(@NS1:name,\': \')\" \/>\r\n      <xsl:value-of select=\"@NS1:value\"\/>\r\n      <xsl:text>&#xa;<\/xsl:text>\r\n   <\/xsl:if>\r\n<\/xsl:for-each>  \r\n  <\/sasa>\r\n<\/xsl:template>\r\n<\/xsl:stylesheet>';