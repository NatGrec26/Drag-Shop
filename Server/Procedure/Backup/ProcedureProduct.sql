CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProduct] 
	@ProductID INT
AS 
BEGIN 
SELECT  P.[ProductID]
       ,P.[Name]
	   ,P.[Description]
	   ,P.[LastPrice]
	   ,P.[State]
	   ,P.[Tutorial]
FROM [dbo].[Product] AS P
WHERE P.[ProductID] = @ProductID

END
GO

CREATE OR ALTER  PROCEDURE [dbo].[SP_GetProduct]  
   AS BEGIN  SELECT  P.[ProductID]
	        ,P.[Name]
	 	   ,P.[LastPrice] 	 
		   ,S.SystemImageUrl
		   FROM [dbo].[Product] AS P 
		   INNER JOIN [dbo].[SystemImage] AS S
		   ON (P.ProductID = S.SystemImageType)
		   WHERE S.SystemImageTypeID= 1;
 END
GO