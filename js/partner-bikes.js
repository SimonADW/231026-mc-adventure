const filterButtons = document.querySelectorAll(".partner__accordion-content__button");
const cardContainer = document.querySelector(".partner__card-container");






const allCards = [
	{make: "Harley Davidson",
	model: "Road Ultra Glide",
	cylinders: 2,
	engine: 1600,
	type: "custom",
	imageUrl: "assets/images/bikes/harley-davidson-road-glide.jpeg"
	},	

	{
		make: "Yamaha",
		model: "YZF R1",
		cylinders: 4,
		engine: 1000,
		type: "sport",
		imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFBcVFBUYGBcYGhsaHBsYHBsaGx4iGh4bGh0cGx4dISwkGyApHhwbJTYmKS4wNDMzGiI5Pj40QCwyMzABCwsLDg4QHBISGjIpICkwMD0yMjM5MjIzMjA9MjY9MDsyMDIyMjQ9MjUyMDIwPTsyMjI9NTIwMjIwMDIwMDIyPv/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABHEAACAQIEAwUEBgcFBgcAAAABAhEAAwQSITEFQVEGEyJhcQcygZEUI0KhsdFScoKSweHwFTNDYvE0U2NzssIWFyVUk6Oz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAgIDAQAAAAAAAAAAAQIRITESQQRRcQP/2gAMAwEAAhEDEQA/AOzUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpVfiOK200BzN0XX5nYem/lQWFecw2nWqE8SZj4jA6KSPmdz93pXt76ojNAgAnQCfUec0F7SoGCxeYAEyTseR/nU+gUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpWje0HimOwyi7ho7mIdgoZlJkSQRpuIbaRBG0hvNK/PyccxZMnGX9f+I4Hwgx8qlHtJibQBbF3dTAzOzCd+ZNB3elcK/8AMDHWiC13Mp2FxEIPyAf763jsR2/XGv3V1Ut3SJQqfC8bgAmVbnEmdelBvtKUoFKUoFKj4nFJbEu4X1Op9BufhVFd7YWROVbjAcyuQR18cffFBstK1Je3uEgE98Adj3Vxp5SMoMjodjuK9W+3+AJg3WXze3cUD1JXSg89ueJpaS3auBsl4uCUdrbeEAwGHMyTBkHKa5pY42LRf6Kb15AQEd8iLpOZTGY3YMDOIGhjrXTOP4HB8Ww4tLibbQwdWtOjkEAqdAdQVZgR5+Vcv412Nx2BbIne4iwIKPbDkgc0dEJZY6jSI1GwC/4X2ztuIvJ3TdVJdfU6Ar6QfWttwGLW4sqyup0kQR6H8q5A1+yVV3W7bnQki4wkdGmG/lUjD4m/Ym9hy5RILzEBYklljNl5ZiCo6gxQdJx+JOCIuSzYd3hl3NsnZkO+XQyDtpFbZwviC3VBVgdNxzHX1rn3Du1uGxdprd/6slfEOR5yu8GdRvy9KxcNvWsKwFrFFh9kG3cGm8BgCJ6aeWxoOsUrVuF9q7ZcWsQVts2ttyYt3VO0ExlePsn4dBX9rO3FpLd21hnL3irKrIJRCdM2YkBo192dRQfeI+0G3avtb7suitkNwOBLD3gqkQQNpLCfkTs3CeLWsSme0+aNxsynow5fgeVcHTheJuXEtvZvASAT3Nw5Z5kR6fCuvdiOzf0S2WcfWvpqZKruFMaSSJMeXSg2ylKUClKUClKUClKUClKUClKUClKUCsdxAwKsAQQQQRIIOhBHMVkrSOP9uHwl1kfAYg2wY7wRkInQqYy69CwPLSg0Ltr2fXDYtksNCui3FTkoYspXzEoY8iOlavjA4RkuCFMAztvpHQ8/hWx+0btTaxbI1ixcS7bAAvMwRoJJNsqshl5glpBJjczqj8Tu3bYS5EZhlcrzAYBSw0PPz09aCrt4m5bdWzMchBUyTlgzp5TU5LhuMYXUy5jSeZKjeZ101002qfhuHK1sSfHzH5VGu4aND99BtnAPahiMLlS9OItDTxH6wDQStz7ca6OJOmorsHZ7tBYxtoXcPczD7QOjof0XXdT9x3EivzY2Fnbn1qdwHiN7BX1vWQQRowE5XWdVccwfu3FB+na0P2l9tjw9Et2gDeuyQTBCKIBaDuxJhQdNCTMQbTs12zw2Ls95nW06/wB5buMFKHrJjMp5N84IIHEPaXx1cZj3uW9baKtq236QQsSw8i7NHlFBZYftqzSTmzHdmJZj6t/Dlyq04JxNMS5a65KoCVWdJ3zEHSdNNNN+dc9w66V5iWa5sBoI0PQAVR0zGOr2O8+lWwxXN3b5ZBich8U550kDz2307F8Uu/ZuZQPslVYfeJqitYW5dYKiliTAHOTyHU+Q1qxHAEt/7RcyESCijxgjkcwkHyy/KoJeExd1nGa3bcTJhAjR5HYH4H41c4ntHiLSRbuXBbeUym45GxlSrMSNRHhA+WhrMJw5riH6PbW1bU+K7cbLryzMZ11nKJPQVlNvAC7nxVy9efQkW17u2SABoYzsPOUOw5UEfGWw1s2xdu5AC5XMEVmK5g3dgsTlMrHkuomT97P8SZRDuQyAujglWWIBAaZI8Q36kaivnHOJNdVTZtrZsOWVMiogJXQhgpMHYctDtqSY3BeEd4jXJnLmQAgZQSsEwdtG05g67waksvpbLPabbT6W7Ph0CXkOiKMqXdd05W7hG6CFY+7lJynwnEWdcr5lI03hgRoQeYIPKrfCW0VBkEAgH+vOpnEOHfTAXt/7Yiyy/wDuFUb/APOUD9sDqK0jUMdxG6ba2y2YI5dCZJE+8onkd49etb37HrWHvXrjOG763DojEG3B0a4o/SDadBIOpOnP7q5hW0dmcf3Zt37Yy3LTRcC7lDo2nPTUeYFQfoClV3CeIC8mYRmUlXA5MOn+U6EHmCKsaBSlKBSlKBSlKBSlKBSlKBSlKBWK7OU5YzRpMgTymNYmstQ+J49LFp71wkIgzMQCT8AN6DlHFu1ePwtxreJxlrMCQRZRGCGAYIa3MQdNzprWt3+JX+JXreGtXnuXLjNHesVtjKrMSP0dFOy6187X4hMfjT9AW7cNwB2ATOwYeAwqTlSApljoSdhFR/Z7xazgMcbmKDnwPbGVJZXZkEld9gw667UHQ+EdirmEtozYHC4u8PeZr79dMqXLWTTroa3rDWWu2imKw9pVOndhu9Qr0Moo+EGrOlBwz2k9nRgbgu2AVtXB4V1ZVcHxKCTKgyCNeZ5CtRbiUD6xD8pB9CP4xXbfagbbYLu3MM9xCmkkZWDOR08GZZ/zxzrlWP7KYk4dMWlotYjwZZLhR/iMkTlbcEToJMDWgq7OOtHdSPP/AFiraxbQiVMeo/oVryYkqdVkNpmn5AjlWZ7SxAlR+juh9VmPwpwTMXluGPC6KesAny0Mx18/KomNsC5EwI0AUQB98mpCYmBDAKIgEar8/s7c9POvTMu8CgrvonLlHLQ/I/nVfct3Z7uPOARz5mDpVk98uYTQdfy6/hWfDYMjZY8z+J5mgx8HwjWnW4bjBlMgIY5Rvud/KrVbJuXO9dc5LAtJjNESCeUgRNfLNiNzrXjHYs2wCp0+0QSD6Ax+FBmx+I8QW4cqpoibIik/Z9ebbk6mqXiRlhlUkRuBpX27xrOIk6zJIDbgAzE7gAa9BXi09kjXKT6AUEnht8LZu2bgGV2DIQQSGG5McjCfu+dZ8DxAWFKowysxYhgIk9CII0AHPasFvhllxpcZf3SPvFP/AAtm93EJ+0CPwNTOZm2z7aurZJfp9fisMSjQCZK6MsnUxoDv51NwHF3LKbZUupBXI4VwRqCA8CfRjUJew907XbXwJpe7JNbEviba+oJ/AmtMrbtRiLF2L6nusQxi/ZZWSW/3tvMIIb7QB3111JqeEYzuroJ9x/C3TyNQMTauW81q6zGNBIMDWAQZ01GxA51Wo3nUH6M7F5RcuZWmbdoMo5FM6gnkDkNsRvpNbnXBewPapsDYu3O5a6sq1w5oIGYiVJ0OrkxzIrvVApSlApSlApSlApSlApSlApSlArG6AgggEEQQdQQeRrJSg479L+h8Rx1jAYdRdvizZw+XKqIwQG4xEbDMzn/l6+W59luw2GwltTcRL+IzZ2vXFDPn3lC0lAD01O51qfwnsvZw9+5iFLvduFiWuEGMxzNlCqAJ084061Z3sUMxRWAYbzqBz1E0E2qjiF76OzX2ZjbIAdYmANmUKJ01Jn/TRfaBx/H2WyW7lu1aMDNbGa4SerNoo/VAI67VoSXbrEscRddirKS1x2MMIOpOkig2XtF2ltYrGBril7FuAEBAzKNfEdYDNqfIAaHUb3w/t3g3Chi1onSHXwj9pZUDlrFcMuYUKQvun7JE6/zr6mIuoYOooOs9pvZ1Zvhr+EKqzAsUBm286+GPcJ8tPTeuXthriCblu4ieCHYaHvAWTxAlTIBgg65SNwRVjwbtVicM04ZgUJ1tt7jECTAJjmNRlPnWzWe01vGg9zYVcTq1yxd1tETme4jRBBcJmRxBMNGYZiHN8TibltvcDDlBIJ3Oo16Gs30Usx8UIfsrp668pqfi8Gwdu8FvXxBVGYIWObKpIkQAB1gxURsRkGUCXJhR66STyUTqaD6+OS0QAgnLEbc959BHzqJd43cPugL8Jrx9CZ1ZnYtc3AHuwNx5biPjUJV/o6Hr+FBKXFu3vOak3Hu5RNwqCNAAMx9TGlQAk7VZcb1cIOiqP2v5UFNhRNzM5Lop1JO/kJ3P8KvTwdLqB7du+oacpyMytG+WJLR/l2qht2/Eei7DlrV1g+L4lGLLdcygtkMS4yDZQGnKByiCOUTQUl+w1tyjSpHWVPyMH7qzWu8H2yK2K72lui3cthbee6QXuHO9yAIy5rjvlEdAIqhtqWMD5/lUtknVk7eRmXE3B/iMPSvOHxWZpdmddjJOnmBzivV6AAY0y7D74/rUg1WW2CEiZHlWfl2djXxmdc0n8R4g9y4M4IFsZVWZIEltTpJJM18wqPduLbtIXuMYVQgcsd9tfX4a1HxF8PlMEELB21I1B+8/IV0T2cdqOH4JfrLN0X30e/lV1A3yIFOZU22BJOp2AGp3nlNc74bD2c7B4h1UYtbdm2SC6Kcz3ADOVgvhQGNfE+hIEHxV1Wq7hfFrGJXPYurcHPKdR5Mp1U+RAqxqslKUoFKUoFKUoFKUoFKUoFKUoFKUoIXE8eli1cvXWypbUsx8h0HM8gOZNc3/APEhuL3qSO9OcDmgYyRPUe7T2x8YP1WDU6H6655gErbU+RYM37C1zfh3Ge7fKx+rJj9Un7Xp1H9EOsr3eKtG3cgkjSuXcb4bdw19bYVjnbLbIk5iTAX9Y8utbdw/FlGGtXfFsSj20uiBdR1KNAMMDIMHpE0HM8W5Baxi7bW7ib5xBEcz+II0I++ssYR9VDkAn3jJIA5AHr5/62WMS/exNzvmzXVQtmuMcpRSSMk7e9t1kkySaio7AwykefL4HY0Eh7aKFKuzNI1I28yABtUzBPcsXpLG2ScjHKqnKSMw1HQgz6VH4VaNy5kRczwGEkhQAYMmQsaxryPlUF8W125ce39VJmEGVADLCR9mNp9OlBP4xiXDO1oFwXMTqcpJgmPKNtNai2EJGcnW54vRfsj0A19SakINIDBtAMyzBlQTE9CSPUGvNq5KLBiAOU/CgwYxyCqoCHmCwIIImeWp0Gg8zUK7aIu3A5lpVV1zDRdpE7LA8tKm6tcUA6SN9BsQT5DUVgTDm24LQ0ZtVko0tqysdztofKqPmFSbirzzqCPiP4VH4+7LeZdnDHY6gjQfHemNxfjLLuphI3BGpb4Go9vMzm5cOZjr8epqCVhsNlUDnz9azXrgQab1iN+oTOWNBmWWP4mpjgWyrr7ujL00Oqn0Ij/WsKKFETQW2vK6KJKkMNQACdGkk8wB+7Wdc559NZlt8e152v4Yotrdte4crCP0LgBB+By/v1rOB4e11giDMx5AfeTso8zW0Nxf/wBPW0qS6FUuFhbKrJchSIlgVQbjQruTFRBinNsjNCx7qhUX4hQAa5fjTUzZr6t5/HT/AH1NXs/SsxGGS34RDtMAzppufSpeE4PccSLoGmygD4SIqpxjlGXmcoPzmp/D+JEEBhkPI7A+o/iK9Di3vsdiW4e+d1S+j7sQe9TTXu2JiIk5dJ6iux8O4hbv21uWmDo2xH3gjcEcwa4bg+I5gA24In4f1vVvwLjrYK+LiybF3+8QaxsM6j9ITPmAR0gO0UrFauBlDKQVYAgjUEHUEeUVlqBSlKBSlKBSlKBSlKBSlKBSlKD88+0HGm5jsW8yFfu18hbUIR+8HPxrRVOvi1E61tPaXW7jCd/pF/8A/d613A21a7bVphnRTHRmAP3Gg23hWKysLUgqFVpBkJm1FszrPly29LDiuLZUTXZ/4GoXGHNxTdLBHuLmELltrEMQfCSy5D7wJ8UjkRThV5L/ANRcaJHhbrzWCeY09aD1xKymItE+6yKWDyAF8jrJB6AGInlVNwWybttzduJbtrlE3ASGLTIUjXMAJ0G066VJxlo27j2c3eAykruZ0211rDibqZe6Ch7STlOgeTqXzLzJ68goO1B4x2AS1BFxbi3AMpWRsZ0keIGIn/NWG/ba4kKuXWcu0/z9arDhrgkoM4GunvD1A1qdwTiqAtbxAd7ba+AIHVhGUi42qrvImPI0FrwZO7ZBeCL4FI7xDcTV1glUBJBRXAPImfMQMU0E5FkG7cyqNWyhmIkctM2v+WrLEWkILWHW4luEuFQxK6kKztsQToGmCdt6qU4i1ouLLQznMLilldMwZXVSDBVgdfTSNaCVh0zFjpocpBPi0jl0kr8j0NSbN5UY51VreU51YgCACRJOkggFQZ1jrVHhluKZVT8QY+NS8TLoF7tw27bZfeJ0MztHLeaCECCSxA1BgDwwSDl6yAeXPrzr1btzXz6Kw3qywtod2CepFBVYzwiOtRUSSOm5nnUnio8Y9KiWG1aglaCT4fgf5VY8DxItrccjQlQFnXQOSZ58h+15VVt/W9WfDMEbpt2U1uXGhQdATqTJ6ZZ+VTWZrPL6azq5vZ7T+BWme/ctMvhxVuBqIFyBctT6sAn7ZqI1ogEE6LmBG0yPCdNeYPwrNewxwuJa2y5LtthqmokZbinXf7JFZOJObl0u0Asc4ygAAzmEDp+VWM1L7LYKzexFu3eRWW4uQSQGkhoyk7NzEdK+dqOyL4I97mN2wSFVyCGUsCcrAiNzvsSdgZFUmI8SKWOuYifM6/DWusdnbqY3BnDX7hus1vLcJys8Swtu2mc5CyS55oraSSQ5bYxfiO2viAEaBjJWATAUzAOuWDpIFWlrFjxBuY/CfzqPw3s4zWcVdZvrMO5UAMDm7oFrqnnrbllI3Fu55VBvPEff/GqO2ey3ipuYdrDGWsnwz+g0wP2TI8gVFb3XEvZdxDJjQk6XFK/Nc3/Ug+ddtqBSlKBSlKBSlKBSlKBSlKBSlKD88dssJkxeNt/8V3/+SLw/660pGIII3BBBHkZrr/tX4YUxNvEAeG8uRume3JHxZD/9ZrlOMsZGPTcUG9YHhlzEYS0bV1fr3cMoyogQ5i9ucrNmBOx00PKCdLuWWkGTDe4oGhgwT+roR6zUns/xx8K3hlrTMDctmcrgb5dfC4GzDmBvFbUMKmOxNzDcJsoLShWfE3O8zAjzYkIpMgKFknORAkgNMxWGuIxC7oBManNuQu+oOm+6mKxYW+1wnqPv/rWuj+ypEe7i+H420O9lWCuII7uVdQRsRmBEHUM3KtTxuDtW8TfGHOa0Lj5D/lnQDqByPMa86oi2H7tg31bFkImCcucFTIIEOu+k8t6kl7NxSWQC5EZgIn1qJjiNxvWyYbsktxFuW8QCrCRNs/f4tDUGuWcCDbuEIGcZSo/aAP3an0rxh7Jhg2U5okkSRE6DXbXWZ2rcLXZJgCovITIM5GDCJ28Xn+FY7/YxsrMbltmAkDLv8+fnQax/ZyTIZlbqDFTLDOmhfMPMQfmN68X8JkAOW4BAljmVc2sgFTBG3z8prFknZ2HoVP4g0GbGXs4g1WXMfaFvJLM2pBVT4Tpoc0a6cpqa2FdvdM+oHIEn7S8hUHHcKuBC4cEDUqNPiKDxxfCOqIzxJUMCpkFWAMg/Kquzuf62rcLtknhtpnBDIxUTuVLNA9Ij5CtPxNhkYoQQRyIg/fWc67G9Z5WViP6/0rZey/djF2Guu1tEzvnUkQQoyyRsJ05dOdU3B8pa4kBhBylpBHIHQjX1msuJzBFZSQRpI8x/KtMJd253uJuvnLqXdg7aEqCQhO0eEDTpUlra3LeZc/2oZRouXXxHlMkDzgc62HsXwa1i8KLpZ+9tuyuEKrqsOkgjUERsRqsRuRTcXQhO7ttFxblxnSLYgsxD5SssBKiAdtY3oNYxZuIrW3Ec9RDAg/DmCK37sKSMb3lvM1rIylhAIBUOAeUsyJp59JrR8Jwy44NxyFUMB9Z70mdlO40++t+7A3HFy80RbSFUAbtvA0Jnu1MwNnUaaUFR2sFyxjMQ4V1V8ru9vOoCuMhLgSINwkDkSImSa1657i+g/Ca3HH8Xu2sRdulWy3kuW0LlWt5T3n0coUnYtnZW8XiWBBmtTdIAHQR8tKotexN8pjsN53ba/vOqn7jX6Qr87dgsLn4hhl6XM5/YDP8A9tfomoFKUoFKUoFKUoFKUoFKUoFK+E18zUFP2p4KuMwz2SQrHxIx+y66q3pOh6gkc64Dj8C0vbuKUu2yVdTuCPxHMHYg1+le8FaV257Jrix31llTEoIDHRXA2R428m1jnI2DgVzD5ZDT5QPx6VvPsw7VfRM6PIts2ZlynLMAZlb7LQAIOhAGxkmgx4e1cNvEWylwbq34jcMPMEg1FGIQbL+A/Cg2/t5xLD4jFpicLnR1QpcfVCxIyjYzohZT1BA2E1qrXgBUS9iyf4DlUcM1xgiKzMxgKoLMT0AGpNBluvmOkkkjbX4RzNdu7M9i3tYK2rHLfaXZWJyjNEJpMEACSOZbyit9nPs9NhlxWMA70a27WhFs/pudi/QDRd9TGXqGYUGkHs5iAZCrPkw/jFejwXEf7uf2k/Ot2mvtBzZ+D4u2cqYcXLbEkqSoIneDMVmw3ZA3NbmFRcskZ2QzM6DIT98V0OlByc9gb5DqqKmpKsXBkEkgFQDttyqsv9g+IDMCltxG6sus6EQSDNdqpU4vXBO2GDv4fD2xftXPdChioyKQI8TKSM3SSJ5Vz+7cVtyPnX66ImsLYVDuiH1UflUzmZ9LrV1fL8qcFcLcYyNutX+P4W9sKlxY7y2l1PNLgzKfgQQR5V+ihgLQ2tJ+6v5VrHtD7PNibAuWlm9ZllA3dT76eZ0BHmI5mtMuIdmONtgrzFhNu4pR1gEjcBwCCCy5m05hmHOupm3h8TZYqtsi7Jz2wBJYhznIALgt+0CTBGtcuxeEW4udN+Y6Vl7N8XvYJmKoLlqZdGjbnE666ba/xDd+D8Aa2WNzKyhsyQCWhIhTKAodvCDMk7xWfiXEUtfUW1z3PeuW1bKFWFL5mQZszAxJ8XiLclqu9nfbG2168vEbyAFVa0XCoi5WbMmgEmGUiZ9061XcM7UWbfEcXivo4uo5cWhAVQJRUYhh4QQg1AJAY6HagpcdhUF03EtiyrahLZJtkgldCSTAKgx110EVFb+v51O4pxG5iLjXbpl25AQqgbIg+yoGgHrOpNQ7CNcdbdtSzuQqqN2J0AH86o3/ANkPCy2IuYgjw20yL+s/T0RTP69dgqk7J8FGDwqWdC3vXGH2nb3j6DRR5KKu6gUpSgUpSgUpSgUpSgV8r7Sg8la8tbBrJSgiXMErc2HoagYjgQba7cX4g/iKuqUGl8V7DC+uW5ezjkLltWjzBkFT5iK1bE+xmTKYvL5G2WH3vP3112lBxu37GXBlsUHHQKU+e9bJwbsM+F/ue5QnQsAxY+RZgWjymK6BSg1pOG4sf4iH4n8q9jD4sfon41sVKCgBxQ3SfQj86yrib43tmrqlBULxC4N7bfI16/tXqjfI1a18oKwcXXmD8jX0cXt1YZB0Hyr4bK/oj5CghDi1vrX3+1rfWpLYRDui/IVjbh9o/YX5UGL+1rX6VfBxi1+lXpuEWT/hrWF+A2D9j5UHP+2vZZLjtisEwF1vFctaAOdy6ToGPNTo2+hnNzi9d8RFxCrDQgiCD5g6g13672YsnYuv6rfnVPxL2e2b3v3HJGxYKWHoywfhNBxTwcgP6+NDdFdLv+x4EymNZfJrQb/vFebHsgAMviO8HTKUH3En76o5ph1uXbgt2ka5cb3VQST+Q6k6DnXZuwHYhcH9ffKviWEAAytsHcKebHYt8BzLTeEdkzhly2VtIDvlzBmj9JiCzfEmrm3gbg3K/M/lUFrmFfahpYfnHz/lWZUNBnpXkTXqgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg//Z"
	  },

	  {
		make: "Ducati",
		model: "Diavel",
		cylinders: 2,
		engine: 1262,
		type: "cruiser",
		imageUrl: "assets/images/bikes/ducati-diavel.jpeg"
	  },

	  {
		make: "Honda",
		model: "Goldwing",
		cylinders: 6,
		engine: 1833,
		type: "touring",
		imageUrl: "assets/images/bikes/honda-goldwing.jpeg"
	  },

	  {
		make: "Kawasaki",
		model: "Ninja ZX-10R",
		cylinders: 4,
		engine: 998,
		type: "sport",
		imageUrl: "assets/images/bikes/kawasaki-ninja-zx-10r.jpeg"
	  },

	  {
		make: "BMW",
		model: "R1250GS",
		cylinders: 2,
		engine: 1254,
		type: "adventure",
		imageUrl: "assets/images/bikes/bmw-r1250gs.jpeg"
	  },

	  {
		make: "Suzuki",
		model: "Boulevard M109R",
		cylinders: 2,
		engine: 1783,
		type: "cruiser",
		imageUrl: "assets/images/bikes/suzuki-boulevard-m109r.jpeg"
	  }, 

	  {
		make: "Triumph",
		model: "Street Triple RS",
		cylinders: 3,
		engine: 765,
		type: "naked",
		imageUrl: "assets/images/bikes/triumph-street-triple-rs.jpeg"
	  },

	  {
		make: "Moto Guzzi",
		model: "V7 III Stone",
		cylinders: 2,
		engine: 744,
		type: "classic",
		imageUrl: "assets/images/bikes/moto-guzzi-v7-iii-stone.jpeg"
	  },

	  {
		make: "Harley Davidson",
		model: "Sportster Iron 883",
		cylinders: 2,
		engine: 883,
		type: "cruiser",
		imageUrl: "assets/images/bikes/harley-davidson-sportster-iron-883.jpeg"
	  },

	  {
		make: "Indian",
		model: "Chief Vintage",
		cylinders: 2,
		engine: 1890,
		type: "cruiser",
		imageUrl: "assets/images/bikes/indian-chief-vintage.jpeg"
	  }, 

	  {
		make: "Ducati",
		model: "Panigale V4",
		cylinders: 4,
		engine: 1103,
		type: "superbike",
		imageUrl: "assets/images/bikes/ducati-panigale-v4.jpeg"
	  },

	  {
		make: "KTM",
		model: "1290 Super Adventure R",
		cylinders: 2,
		engine: 1301,
		type: "adventure",
		imageUrl: "assets/images/bikes/ktm-1290-super-adventure-r.jpeg"
	  }, 

	  {
		make: "Honda",
		model: "CBR600RR",
		cylinders: 4,
		engine: 599,
		type: "sport",
		imageUrl: "assets/images/bikes/honda-cbr600rr.jpeg"
	  },

	  {
		make: "Suzuki",
		model: "Hayabusa",
		cylinders: 4,
		engine: 1340,
		type: "sport-touring",
		imageUrl: "assets/images/bikes/suzuki-hayabusa.jpeg"
	  },

	  {
		make: "Aprilia",
		model: "Tuono V4 1100 Factory",
		cylinders: 4,
		engine: 1077,
		type: "naked",
		imageUrl: "assets/images/bikes/aprilia-tuono-v4-1100-factory.jpeg"
	  },

	  {
		make: "Yamaha",
		model: "MT-09",
		cylinders: 3,
		engine: 847,
		type: "naked",
		imageUrl: "assets/images/bikes/yamaha-mt-09.jpeg"
	  }
];

const createAndRenderCard = (object)=> {
	const newCard = document.createElement("div");
	newCard.className = "partner-card";

	const newImage = document.createElement("img");
	newCard.appendChild(newImage);
	newImage.src = object.imageUrl;
	
	const cardContent = document.createElement("div");
	cardContent.className = "partner-card__content";
	newCard.appendChild(cardContent);

	const cardMake = document.createElement("div");
	cardMake.className = "card-content__make";
	cardContent.appendChild(cardMake);
	cardMake.textContent = object.make;
	
	const cardModel = document.createElement("div");
	cardModel.className = "card-content__model";
	cardContent.appendChild(cardModel);
	cardModel.textContent = object.model;

	const cardCylinders = document.createElement("div");
	cardCylinders.className = "card-content__cylinders";
	cardContent.appendChild(cardCylinders);
	cardCylinders.textContent = "Cylinders: " + object.cylinders;
	
	const cardEngine = document.createElement("div");
	cardEngine.className = "card-content__engine";
	cardContent.appendChild(cardEngine);
	cardEngine.textContent = "Engine: " + object.engine;

	cardContainer.appendChild(newCard);
};


createAndRenderCard(allCards[0]);


