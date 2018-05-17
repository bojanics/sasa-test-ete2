<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:NS1="http://www.greco.eu/schemas/2014/GOSPOS">
  <xsl:output omit-xml-declaration="yes" indent="yes" encoding="UTF-8" />
  <xsl:template match="*">
  <sasa>
<xsl:for-each select="NS1:item">
   <xsl:if test="@NS1:name">
      <xsl:value-of select="concat(@NS1:name,': ')" />
      <xsl:value-of select="@NS1:value"/>
      <xsl:text>&#xa;</xsl:text>
   </xsl:if>
</xsl:for-each>  
  </sasa>
</xsl:template>
</xsl:stylesheet>