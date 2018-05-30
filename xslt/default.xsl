<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet 
	xmlns:fox="http://xml.apache.org/fop/extensions"
	xmlns:NS1="http://www.greco.eu/schemas/2014/GOSPOS"
	xmlns:fo="http://www.w3.org/1999/XSL/Format" version="1.1"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:saxon="http://icl.com/saxon" extension-element-prefixes="saxon">


<xsl:template match="*">
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
<fo:layout-master-set>
<fo:simple-page-master master-name="pagemaster1" page-height="845.0pt" page-width="598.0pt" margin-top="10.0pt" margin-left="10.0pt" margin-bottom="10.0pt" margin-right="10.0pt">
<xsl:variable name="backgroundImageRepeat">no-repeat</xsl:variable><xsl:variable name="pageBackgroundColor">#ffffff</xsl:variable>
<xsl:variable name="uriBackgroundImage"></xsl:variable><xsl:variable name="uriLeftBackgroundImage"></xsl:variable><xsl:variable name="uriRightBackgroundImage"></xsl:variable><xsl:variable name="uriBottomBackgroundImage"></xsl:variable><xsl:variable name="uriTopBackgroundImage"></xsl:variable><fo:region-body margin-left="28.0pt" margin-top="28.0pt" margin-bottom="28.0pt" margin-right="28.0pt" background-image="url({$uriBackgroundImage})" background-repeat="{$backgroundImageRepeat}"   background-position-horizontal="left" background-position-vertical="top" />
<fo:region-before extent="28.0pt" precedence="true" background-image="url({$uriTopBackgroundImage})" background-repeat="no-repeat"  />
<fo:region-after extent="28.0pt" precedence="true" background-image="url({$uriBottomBackgroundImage})" background-repeat="no-repeat"  />
<fo:region-start extent="28.0pt" background-image="url({$uriLeftBackgroundImage})" background-repeat="no-repeat"  />
<fo:region-end extent="28.0pt" background-image="url({$uriRightBackgroundImage})" background-repeat="no-repeat"  />
</fo:simple-page-master>
</fo:layout-master-set>
 <fo:bookmark-tree>
</fo:bookmark-tree>
<fo:page-sequence master-reference="pagemaster1">
<xsl:attribute name="force-page-count">no-force</xsl:attribute>
<fo:static-content flow-name="xsl-region-before">
  <fo:block/>
</fo:static-content>
<fo:static-content flow-name="xsl-region-after">
  <fo:block/>
</fo:static-content>
<fo:static-content flow-name="xsl-region-start">
  <fo:block/>
</fo:static-content>
<fo:static-content flow-name="xsl-region-end">
  <fo:block/>
</fo:static-content>
<fo:flow flow-name="xsl-region-body">
<fo:block/>
<xsl:variable name="backgroundColorVariable5">#ffffff</xsl:variable>
<fo:block-container display-align="before" reference-orientation="0">
<fo:block position="relative" text-align="start" color="#000000" font-family="Arial" font-weight="bold" font-size="14.0pt" line-height="14.5pt" white-space-collapse="false"  linefeed-treatment="preserve" white-space-treatment="ignore-if-surrounding-linefeed"  hyphenate="true" language="en"  padding-bottom="0.0pt" start-indent="0.0pt" end-indent="0.0pt" padding-top="28.45pt" width="518.0pt"  height="30.0pt" >
   <xsl:text>HERE IS THE DATA:</xsl:text>
</fo:block>
</fo:block-container>
<fo:block-container display-align="before" reference-orientation="0">
<xsl:for-each select="NS1:item">
   <xsl:if test="@NS1:name">
<fo:block position="relative" text-align="start" color="#000000" font-family="Arial" font-size="11.0pt" line-height="14.5pt" white-space-collapse="false"  linefeed-treatment="preserve" white-space-treatment="ignore-if-surrounding-linefeed"  hyphenate="true" language="en"  padding-bottom="0.0pt" start-indent="0.0pt" end-indent="0.0pt" padding-top="28.45pt" width="518.0pt"  height="30.0pt" >
      <xsl:value-of select="concat(@NS1:name,': ')" />
      <xsl:value-of select="@NS1:value"/>
      <xsl:text>&#xa;</xsl:text>
</fo:block>
   </xsl:if>
</xsl:for-each>
<xsl:for-each select="property">
<fo:block position="relative" text-align="start" color="#000000" font-family="Arial" font-size="11.0pt" line-height="14.5pt" white-space-collapse="false"  linefeed-treatment="preserve" white-space-treatment="ignore-if-surrounding-linefeed"  hyphenate="true" language="en"  padding-bottom="0.0pt" start-indent="0.0pt" end-indent="0.0pt" padding-top="28.45pt" width="518.0pt"  height="30.0pt" >
   <xsl:value-of select="concat(@name,': ')" />
   <xsl:value-of select="@value"/>
   <xsl:text>&#xa;</xsl:text>
</fo:block>
</xsl:for-each>
</fo:block-container>
<xsl:if test='position()=last()'>
  <fo:block id="lastPage"/>
</xsl:if>
</fo:flow>
</fo:page-sequence>
</fo:root>
</xsl:template>
<xsl:template match="include-xsl-fo">
    <xsl:copy-of select="@*"/>
</xsl:template>
</xsl:stylesheet>
