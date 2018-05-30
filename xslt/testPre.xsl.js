var xsltPreObj = '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> \n   <xsl:output omit-xml-declaration="yes" indent="yes" encoding="UTF-8"/> \n   <xsl:template match="data"> \n      <NS1:form xmlns:NS1="http://www.greco.eu/schemas/2014/GOSPOS"> \n         <xsl:if test="property[@name=\'submission_at\']"> \n            <xsl:attribute name="NS1:at"> \n               <xsl:value-of select="property[@name=\'submission_at\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_button\']"> \n            <xsl:attribute name="NS1:button"> \n               <xsl:value-of select="property[@name=\'submission_button\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_by\']"> \n            <xsl:attribute name="NS1:by"> \n               <xsl:value-of select="property[@name=\'submission_by\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_gosposversion\']"> \n            <xsl:attribute name="NS1:gosposversion"> \n               <xsl:value-of select="property[@name=\'submission_gosposversion\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_host\']"> \n            <xsl:attribute name="NS1:host"> \n               <xsl:value-of select="property[@name=\'submission_host\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_form_number\']"> \n            <xsl:attribute name="NS1:number"> \n               <xsl:value-of select="property[@name=\'submission_form_number\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_useragent\']"> \n            <xsl:attribute name="NS1:useragent"> \n               <xsl:value-of select="property[@name=\'submission_useragent\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n         <xsl:if test="property[@name=\'submission_form_version\']"> \n            <xsl:attribute name="NS1:version"> \n               <xsl:value-of select="property[@name=\'submission_form_version\']/@value" /> \n            </xsl:attribute> \n         </xsl:if> \n          \n         <xsl:for-each select="property"> \n            <xsl:if test="@name!=\'submission_form_namepsace\' and @name!=\'submission_at\' and @name!=\'submission_button\' and @name!=\'submission_by\' and @name!=\'submission_gosposversion\' and @name!=\'submission_host\' and @name!=\'submission_form_number\' and @name!=\'submission_useragent\' and @name!=\'submission_form_version\'"> \n               <NS1:item NS1:name="{@name}" NS1:value="{@value}"/> \n            </xsl:if> \n         </xsl:for-each> \n         <xsl:for-each select="array[@name=\'attachments\']"> \n            <xsl:for-each select="complexobject[@name=\'attachments\']"> \n               <NS1:attachment>             \n                  <xsl:if test="property[@name=\'name\']"> \n                     <xsl:attribute name="NS1:name"> \n                        <xsl:value-of select="property[@name=\'name\']/@value" /> \n                     </xsl:attribute> \n                  </xsl:if> \n                  <xsl:if test="property[@name=\'description\']"> \n                     <xsl:attribute name="NS1:description"> \n                        <xsl:value-of select="property[@name=\'description\']/@value" /> \n                     </xsl:attribute> \n                  </xsl:if> \n                  <xsl:if test="property[@name=\'type\']"> \n                     <xsl:attribute name="NS1:type"> \n                        <xsl:value-of select="property[@name=\'type\']/@value" /> \n                     </xsl:attribute> \n                  </xsl:if> \n                  <xsl:if test="property[@name=\'content_base64\']"> \n                     <xsl:attribute name="NS1:content"> \n                        <xsl:value-of select="property[@name=\'content_base64\']/@value" /> \n                     </xsl:attribute> \n                  </xsl:if> \n               </NS1:attachment> \n            </xsl:for-each>  \n         </xsl:for-each>  \n          \n      </NS1:form> \n   </xsl:template> \n</xsl:stylesheet>';
