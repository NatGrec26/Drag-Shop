USE [DragShop]
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (1, N'Boa', N'Elegante boa de plumas', 1500, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (2, N'Pechos', N'Suaves y reales pechos de silicona', 24000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (3, N'Brochas', N'Modernas brochas para maquillaje de fibra natural', 3000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', N'https://www.youtube.com/embed/DHDdyytuY8I', CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (4, N'Contorno', N'Vivaz y seductor contorno facial', 4500, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 2000)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (5, N'Crema facial', N'Suave e hidratante crema facial para despues del maquillado', 2500, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (6, N'Pestañas', N'Pestañas de fibra natural', 2000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (7, N'Body sensual', N'Seductor body de seda', 4000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (8, N'Pintura de uñas', N'Pintura de uñas con tratamiento para la cúticula', 1750, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (9, N'Uñas', N'Uñas postizas de acrilíco', 900, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (10, N'Collar de jade', N'Elegante collar de jade hecho a mano', 7500, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (11, N'Perfume', N'Fragancia femenina ', 6000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (12, N'Sombras', N'Paleta de sombras noche sensual', 5000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', N'https://www.youtube.com/embed/iyakwdjEav8', CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (13, N'Tacones', N'Zapatos de tacón red velvet', 4800, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (14, N'Esponjas para caderas', N'Suaves esponjas para aumentar caderas', 3440, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (15, N'Peluca de fibra', N'Sedosa peluca de fibra real', 8000, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[Product] ([ProductID], [Name], [Description], [LastPrice], [DiscontinuationDate], [State], [Tutorial], [Tax], [SendingCost]) VALUES (16, N'Tacones de aguja', N'Tacones con estampado original.', 3500, CAST(N'2019-12-12T00:00:00.000' AS DateTime), N'Activo', NULL, CAST(0.05 AS Decimal(3, 2)), 500)
INSERT [dbo].[SystemImageType] ([SystemImageTypeID], [SystemImageTypeValue]) VALUES (1, N'ProductHome')
INSERT [dbo].[SystemImageType] ([SystemImageTypeID], [SystemImageTypeValue]) VALUES (2, N'ProductDescription')
INSERT [dbo].[SystemImageType] ([SystemImageTypeID], [SystemImageTypeValue]) VALUES (3, N'ProductShoppingCart')
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (1, N'Boa', N'assets/products/Boa/Boa.png', 1, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (2, N'Boa1', N'assets/products/Boa/Boa1.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (3, N'Boa2', N'assets/products/Boa/Boa2.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (4, N'Boa3', N'assets/products/Boa/Boa3.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (5, N'Boa4', N'assets/products/Boa/Boa4.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (6, N'Boa5', N'assets/products/Boa/Boa5.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (7, N'Boa6', N'assets/products/Boa/Boa6.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (8, N'Boa7', N'assets/products/Boa/Boa7.jpg', 2, 1)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (9, N'Pechos', N'assets/products/Breast/Breast.png', 1, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (10, N'Pechos1', N'assets/products/Breast/Breast1.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (11, N'Pechos2', N'assets/products/Breast/Breast2.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (12, N'Pechos3', N'assets/products/Breast/Breast3.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (13, N'Pechos4', N'assets/products/Breast/Breast4.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (14, N'Pechos5', N'assets/products/Breast/Breast5.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (15, N'Pechos6', N'assets/products/Breast/Breast6.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (16, N'Pechos7', N'assets/products/Breast/Breast7.jpg', 2, 2)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (17, N'Brochas', N'assets/products/Brush/Brush.png', 1, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (18, N'Brochas1', N'assets/products/Brush/Brush1.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (19, N'Brochas2', N'assets/products/Brush/Brush2.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (20, N'Brochas3', N'assets/products/Brush/Brush3.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (21, N'Brochas4', N'assets/products/Brush/Brush4.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (22, N'Brochas5', N'assets/products/Brush/Brush5.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (23, N'Brochas6', N'assets/products/Brush/Brush6.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (24, N'Brochas7', N'assets/products/Brush/Brush7.jpg', 2, 3)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (25, N'Contorno', N'assets/products/Contour/Contour.png', 1, 4)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (26, N'Contorno1', N'assets/products/Contour/Contour1.jpg', 2, 4)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (27, N'Contorno2', N'assets/products/Contour/Contour2.jpg', 2, 4)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (28, N'Cream', N'assets/products/Cream/Cream.png', 1, 5)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (29, N'Crema1', N'assets/products/Cream/Cream1.jpg', 2, 5)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (30, N'Crema2', N'assets/products/Cream/Cream2.jpg', 2, 5)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (31, N'Crema3', N'assets/products/Cream/Cream3.jpg', 2, 5)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (32, N'Crema4', N'assets/products/Cream/Cream4.jpg', 2, 5)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (33, N'Pestañas', N'assets/products/Eyelashes/Eyelashes.png', 1, 6)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (34, N'Pestañas1', N'assets/products/Eyelashes/Eyelashes1.jpg', 2, 6)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (35, N'Pestañas2', N'assets/products/Eyelashes/Eyelashes2.jpg', 2, 6)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (36, N'Pestañas3', N'assets/products/Eyelashes/Eyelashes3.jpg', 2, 6)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (37, N'Body', N'assets/products/Leothard/Leothard.png', 1, 7)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (38, N'Body1', N'assets/products/Leothard/Leothard1.jpg', 2, 7)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (39, N'Body2', N'assets/products/Leothard/Leothard2.jpg', 2, 7)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (40, N'Body3', N'assets/products/Leothard/Leothard3.jpg', 2, 7)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (41, N'Nailpolish', N'assets/products/Nailpolish/Nailpolish.png', 1, 8)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (42, N'Nailpolish1', N'assets/products/Nailpolish/Nailpolish1.jpg', 2, 8)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (43, N'Nailpolish2', N'assets/products/Nailpolish/Nailpolish2.jpg', 2, 8)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (44, N'Nailpolish3', N'assets/products/Nailpolish/Nailpolish3.jpg', 2, 8)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (45, N'Nailpolish4', N'assets/products/Nailpolish/Nailpolish4.jpg', 2, 8)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (46, N'Uñas', N'assets/products/Nails/Nails.png', 1, 9)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (47, N'Uñas1', N'assets/products/Nails/Nails1.jpg', 2, 9)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (48, N'Collar', N'assets/products/Necklacke/Necklacke.png', 1, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (49, N'Collar1', N'assets/products/Necklacke/Necklacke1.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (50, N'Collar2', N'assets/products/Necklacke/Necklacke2.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (51, N'Collar3', N'assets/products/Necklacke/Necklacke3.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (52, N'Collar4', N'assets/products/Necklacke/Necklacke4.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (53, N'Collar5', N'assets/products/Necklacke/Necklacke5.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (54, N'Collar6', N'assets/products/Necklacke/Necklacke6.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (55, N'Collar7', N'assets/products/Necklacke/Necklacke7.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (56, N'Collar8', N'assets/products/Necklacke/Necklacke8.jpg', 2, 10)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (57, N'Perfume', N'assets/products/Perfum/Perfum.png', 1, 11)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (58, N'Perfume1', N'assets/products/Perfum/Perfum1.jpg', 2, 11)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (59, N'Sombras', N'assets/products/Shadows/Shadows.png', 1, 12)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (60, N'Sombras1', N'assets/products/Shadows/Shadows1.jpg', 2, 12)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (61, N'Sombras2', N'assets/products/Shadows/Shadows2.jpg', 2, 12)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (62, N'Sombras3', N'assets/products/Shadows/Shadows3.jpg', 2, 12)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (63, N'Tacon', N'assets/products/Shoes/Shoes.png', 1, 13)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (64, N'Tacon1', N'assets/products/Shoes/Shoes1.jpg', 2, 13)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (65, N'Tacon2', N'assets/products/Shoes/Shoes2.jpg', 2, 13)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (66, N'Tacon3', N'assets/products/Shoes/Shoes3.jpg', 2, 13)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (67, N'Esponja', N'assets/products/Sponge/Sponge.png', 1, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (68, N'Esponja1', N'assets/products/Sponge/Sponge1.jpg', 2, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (69, N'Esponja2', N'assets/products/Sponge/Sponge2.jpg', 2, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (70, N'Esponja3', N'assets/products/Sponge/Sponge3.jpg', 2, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (71, N'Esponja4', N'assets/products/Sponge/Sponge4.jpg', 2, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (72, N'Esponja5', N'assets/products/Sponge/Sponge5.jpg', 2, 14)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (73, N'Peluca', N'assets/products/Wig/Wig.png', 1, 15)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (74, N'Peluca1', N'assets/products/Wig/Wig1.jpg', 2, 15)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (75, N'Peluca2', N'assets/products/Wig/Wig2.jpg', 2, 15)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (76, N'Peluca3', N'assets/products/Wig/Wig3.jpg', 2, 15)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (77, N'Heel', N'assets/products/Heel/Heel.png', 1, 16)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (78, N'Heel1', N'assets/products/Heel/Heel1.jpg', 2, 16)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (79, N'Heel2', N'assets/products/Heel/Heel2.jpg', 2, 16)
INSERT [dbo].[SystemImage] ([SystemImageID], [SystemImageName], [SystemImageUrl], [SystemImageTypeID], [SystemImageType]) VALUES (80, N'Heel3', N'assets/products/Heel/Heel3.jpg', 2, 16)
INSERT [dbo].[CompanyInformation] ([CompanyInformarionID], [CompanyInformationDescription], [TypeCompanyInformationID]) VALUES (1, N' Drag&Shop es una tienda que nace como acto rebelde ante los estereotipos sociales y discriminatorios, desde que tenemos uso de razón, las personas son juzgadas sin importar sus emociones o deseos, que si una mujer compra una peluca se está quedando calva, que algunas tiendas de zapatos no permiten a un hombre probarselos, que te miran mal si vas a comprar maquillaje y sos varón. Sin embargo, con el tiempo se crearon tiendas físicas que respetan la diversidad, pero aún existe el peligro latente de ser atacado o juzgado si te ven en ellas
Así pues, Drag&Shop surge de los deseos más grandes de este grupo de personas y pretende crear un entorno donde todos puedan acceder a los diversos productos que tanto añoran mientras disfrutan de contenido de calidad desde la comodidad de sus hogares; Drag&Shop es por y para los clientes, buscando siempre crecer y encontrar la manera de hacer felices a sus visitantes.', 1)
INSERT [dbo].[CompanyInformation] ([CompanyInformarionID], [CompanyInformationDescription], [TypeCompanyInformationID]) VALUES (2, N'Ofrecer al cliente el mejor servicio, variedad y calidad de productos Drag en Costa Rica. Donde el valor del producto sea de satisfacción para el cliente. ', 2)
INSERT [dbo].[CompanyInformation] ([CompanyInformarionID], [CompanyInformationDescription], [TypeCompanyInformationID]) VALUES (3, N'En cinco años nos vemos siendo la marca Drag número uno en Costa Rica que elimina barreras, promoviendo la inclusión social y ofreciendo productos de calidad. ', 3)
INSERT [dbo].[TypeCompanyInformation] ([TypeCompanyInformationID], [TypeCompanyInformationName]) VALUES (1, N'Historia')
INSERT [dbo].[TypeCompanyInformation] ([TypeCompanyInformationID], [TypeCompanyInformationName]) VALUES (2, N'Misión')
INSERT [dbo].[TypeCompanyInformation] ([TypeCompanyInformationID], [TypeCompanyInformationName]) VALUES (3, N'Visión')
