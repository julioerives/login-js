import './user.css';
 function User2(){
    return(
        <>
        <header>
        <nav>
  <ul>
    <li><strong>Usuario 2</strong></li>
  </ul>
  <ul>
  <li><a href="https://es.wikipedia.org/wiki/Estado_de_Hidalgo">Hidalgo</a></li>
  <li><a href="https://es.wikipedia.org/wiki/Chihuahua">Chihuahua</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Tijuana" role="button">Tijuana</a></li>
  </ul>
</nav>
        </header>
            <div className="grid">
            <article>
                <h1>Hidalgo</h1>
                <img src="https://www.pachuca.gob.mx/portal/wp-content/uploads/2021/05/plaza-independencia-pachuca.jpg" alt="" />
                <p>Hidalgo es uno de los 32 estados que conforman la República Mexicana. Su capital es Pachuca de Soto. El estado lleva el nombre de Miguel Hidalgo y Costilla, un líder importante en la lucha por la independencia de México. Hidalgo se encuentra en la región central del país y tiene una rica historia, cultura y atractivos turísticos, como el sitio arqueológico de Tula, los Prismas Basálticos y varios pueblos mágicos.</p>
            </article>
            <article>
                <h1>Chihuahua</h1>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGhwdGxoZGyEhHBwgHSIcGhsiISMcIiwjIyMoIx0gJDUkKC0vMjIyHCI4PTgxPCwxMi8BCwsLDw4PHRERHTEoIygxMy8vMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExOv/AABEIALEBHAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABEEAACAQIEAwYEBAMGBAUFAAABAhEDIQAEEjEFQVETIjJhcYEGkaGxQsHR8BQjgkNSYnLh8RUzktIkorLC4gdTY3OT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAgIBBAICAwEAAAAAAAABAhESIQMxQQQiUWETMoGRcaGxQv/aAAwDAQACEQMRAD8AdcOpZqoqZfsuyUUu6SFMGXBgnukE6X0xIIwsfhGbWonaNTqkuO5VpqvfHdCEizAqbDUNQtixUOL0neNau+jvaKhGociLgGxE87kXwfl+JpSASrULAhe65VmUybzIJQRzE7HGHHzKenpjsq5+H6pKAUmpVnck1lRAq3usIAVBGzHc2MgjHo1Kk4pqGMsBc9fkB9hiWnUBEggjryOJVqA46ehCxa7A3tjqpmYtscSZ1gDthdWvtilsAt64Igx64ATMNTa1/wA8Ro52x0yAjph9CG2WqBpZZB6YzMZlwIF8AcKzgCyQbjnYjDegAwnEvTGIlq9+47psR5Gx+mFWW+GquXqhf+Zl2JJ5FTHdJvNrXE+Hlh5naABwzTOKVABEx9RilJrolxTB6WZJtPPcbHE+Yph1I68xEg4CzvDO0ZaiVnokXOiIbfcEb3v1+RB6ZeH1ljGnYbE2vibQwV+GHXSqIQGQFWJG6G5EC0zBB9euJM/wxKyslQa1OwNtJFpUi4Pngvtx1wvqZy+9pwrYUUTi/wAKvQqF1p1KtALMgjWu+4G8b7RGLH8MccpGilNNShCEhiJPQ2tB6DbFgOZMA48/+IEpfxCdi9OmAAYTYtLKwaDaw5Y3UnNYyIxUdos/FgMz/KBGgSHtcSLFTESOnpil5zgWYpIURCyFtwASxHdERNjNgehxbeHUW7NIJLAyWEQ0mYGo7YZ5+g1ULTBVeZP6RhR5HB0uhuORRPhjg/8AEaq9TvhG0rT5MwAPe6KJFuf3u+V4ZTpuGAE35ARPIRy8sTZTIU6KBQFV5ltIgE4xc6JZVKlhy53xM+RyYRikF03gmTv9MK/iNA9GquklSjEkNEQNr2x2mcLC58R7vmImev8AtiDjAIy9XUY7rXInYdMTHsp9EfwpRpimxppAmFa/eBlie9c3J+mGmaqcjyxU/g/jFSoHVmnSIVQICj5RPvyw6rVpvOKmnkKLVEmvpifLAM0nAaNNhhnQTSPPElBbREDoceRiqqgE99gsADl6/QRj1Bq5Bi59P9ceZUXhAESW0tfeI+3v9cC7MuVe029F6hmqxVSRCDc7cht9T6YnQGyoNIDmQN9m3bl9TjkKqy9QywIkA32HpHpbGqtKpVpjSwpKTYCbC83ET6CMWc1AdbNUaDMWJd9THQpsPEIPLnzv5YMylV6tMOV0ktZWB0r3rSDBa1+npjvhvCaSadC6mBMu3hG/sOtvnhhVy694E65Zb7KPDPmf3fADoEkaiL1GIBn8I32gR6bnzwWtOnAl2JgXUW25WP3wNVroGITvkBbDwi7fubnC+hms0RI0gchpm3riktBRWxRam3aI47sggGGExb3m0E4OSkcxWoBHc6VB1RJUybEyDHmeUC2NvWRBTdl16pDaj3pgAGT77zywy+H3Re0YBhYFVKiSJsJMgra8wLfLyJypX5PQZceCcVFGjTSoGiWGsQVUA7EA2AF+exw+XMyAykFTzBkYoGfralYFdQS5DEF0mCCIAk84Me+GvwxUDsWVxrgLDNcgRMBe7ttabcpONvT87lqRJanzOoaWwuZ9JxLVWMC1ROO1AThgcLuMcZpUgaZqaarCFgE6S0hWJgxe/PbbE5Vhig/GLzmlKqH/AOWhG8eLUbbED7YmbpFRVsvHw3V7SiFNVKlVCQ5RgRuSu3lAn7G2HuUzZptDzGPKfg/NH+JpMoKgmohEzIAN78jpBx6elUML4mLtbCSpjDOwwkYUQQffE2azUWHLAbZoNzxaJLFTXUgP78sT5dwy4T8NzMysi/XAXBeKmoruKZpxVqLpmxCtYjyI/XbEsBrmlK4BMG2GL5lX36YVu1zGGARTzMATcYpvxlkKVKqlVEAp1AdQTfXOokzYSJ26HFuRdaRz64A4xwXtMrV7SSVU1FA3lATF+otioSxdkyVoK4OjtSoswuyglTyEEg/b54Z0sr2bM/kI+pM++EnwlmlqUVrU6oqUzINtJEEBZX8LRuJ5jrOHGezvdgYmTtjRBns1cHfCvJZBaVV63aBQ4js4J70zIvzG4AucR5nPIkGo6qu5lgNvLHn/ABXj4mBWLxULd1iBpk6l6kEGL8gfTDukwey9/B/xLl6/aL/aJzaBqWYUrN/UHqMP2cOCJgc/z3x4Bls6lPSR35VGaxN0ZSNvMbYuVX46qVUNP+GJ1bkEgRAkXB3xKa8hYfxDNPSzTGlZJAKqRDRtMeu2N53i9d1ACBIblvPK3scVirxOrMrTpUx53gC0+LrE254HzHEqx7prLF7IovaeSyfUnHV+WCS1ZjjL5ovx+IzSouzgGsohQWAkmYLTEAHDT4R4gamW1VKqvWYs9SCO7LFVECwAACiOm+PH6weC3aVGEGVIJVhEbEx78sMuEcRNCqCE1Ks9xpU6TuJF4mLGRjmck3ZotdnrzudDsqlyOQ59QD1idsULJFnQIndjVqJ3I35bfTFpyvxbl6tFuzqCk4UylTusscxyYDyn2x59xHNFTSoOzQxAvZQswS2kDUdiOQm84iW2hzVoeJmaVMimrdoxYS1tI26fYTicJV7XtHZeyQ91TsWIiSOcE2k9MRcKejpdsuohSAC3jY2NpvF9zHpiZgzSXs2rYGTEAW5DfkDjVI5HpkNfjSdqKUlqhe5Ngtp2teDyHPfBdZSy1BMDbUbaZC3A6jzvjjLZVQTpUKWYajEubiJ5+Vz7YZ6AoeQAwuJ7zeEEQBYewOKF2AZDhi0z3QWEL3qhgW1dfyGGFDLd1e82w2IUfJr++NDNwxYiTAu/K/If64U1crRclnVCx3Lb4AdM4qZXLuig9w7EACWi5aY2bfaxgW5CVar0WpqZsnMRpkxfSOu3UP6xEtCnUXtEJ7OZW46gwAD3Ryi2/oMbzROkiGDKYLW2sFEHcSbc79RjxLbeztGVJ9VRG1kqzFtbC62M26SsQd+ZkYO+HshU7Q1VKgISsAq0CPI7Egch88L8hTUUg7NCAuQBqDM2k3lhJ5WHX0xZT8U0aVOEqK7L4pHiuA0XFzeLmYi+Ovi40vc/8ghrmGsD+5wtqN0+WGdFe1XWgOk7aljy2nGv+HRuMdqkhi5Mxyx5hnqk1u+wLGq+mQO8QTPhA3j649WzOXUKxNoBiTHpc9ceUVwpqhqiMCA5UWkVGYFSfILM+ZGM+RrRpDyEcFzWitQYMG7+kkGR3oUrfaCScei08wMeYcHSmlTLhSTLhn1CIqHcAncSLHzxfna+Hx9MUxi1WZGACSDjm/X3x0qnl8saaIFPxTmnWioQka3AY+QlvqQPlhN8JcXq/wARSRajsjgBkck92HIN5iNJiOgwb8Y1yopU4/vMdxtAFx74rvBKgp1qVQQQCg7sGQSwFrW7xEzv8sYSfuNEvaevAgixMzjh3UYNyq03piB3h+WBczSVgxvYbDc+nnjUgovC+F5h69du0q5akCy0+zOlmOqVaNtIH4Y5wOeHPxX8RPRy6UzU1VXEMVABIAOo6b6QxtJsATuRBqGW+NKtKmabjtaoY3f8K7AsUsY5ny87LqdGpXZ6tUki5ZiYLwjHp3UFhAsBiNCbvoXZbNVUGhKhFMNsFkahYkCIGwvvbBFfiFR/HVqsNgGqEL8iYHphXmHEvqtLEwskRMiPKIvvjhc6gHhPeidrfefpHngsVDHQL9xdzcm/09MRuguYgzFhe8xufrgVc+5uEA3mSd/KIkeVzjGzb81/8sX6y5/08sKwoLbMMBMHumBcCYm+xsB74les5FQaNRBHiLHruFIM4Wpn2BMnf/Go85OlTJ88RtmV3LtI2iqx+6xgseKGtRW1OAFWwiFH+EmC2+209cQvW61ABpAsws1xspkeoEeeF4y6G6zpjYEbc+U/TETKI7ot54LExolMVNADaiJ6mZ2gkCfUxhgqGO6ZHTcgT8xy8sIlYqAZ38ptfp+XTGnzRglXEyLSQfYED6YVsOxnUo6o8hO4B2Gx2Nz74jyzMDMM0W7wkggnl0JMkTjWX4iVtUGoxuRBG0T12G4nBSMjjukG8xsR4NhMj6i2HYqLxkM7SqIOzIJAWUpjSFPMHmL84wTl80p1gbq41BZAHhsWi59JjHnL0iG1KxVpsQYYSOREA+8b4vfwrTIywar32Z9QZ3kASoFr8hsTbFRbMeTjS2OKWo6tExrSQv8ARz3+uJnphRUDMFME6Vu115/L/XA1bPgPo1XZkhRaZ0gbcree2JaxPfAIHduB6Hy+sY0TMqOqVMI86RMGC5mLjYbfXHH8GjyxDkktcbeI4nFRdQIS4Vrt6r5/niJEqNJDVYLN4B3fEdu4fvgsafwI+EIlFO9TLCYEg+ExqKgGZBPrHK9g8zxCCVVV7NhpKhm8MSJIswvIMxsLxIk4JmS1V6T1Kq6iNBvq1aY1K22kkQRttM4nztB1H8wPK6QTqDNuYkEHUJGoDlPXHBHhk4tnU3WjdBgKZXWwS2pS8nuEeEm3Xa0ettDIM8HtEVXUElkAJItpXROufnM+YwNVEEpJZBqOkbdQCW2O+xHhYeWJMvl2ZShJgGabFRBViYI2cd48hBnlcFKEuh2ixcH48UAVoKhRpm1TSAYDE/hB23YwbYtuQ4gKlMOpkHbHlVNWUd+k4B8KgEoRabCGABtsJxY+EcW7Kn2a01Vh/eIA7xuzQLbCwnYD0vinJPGQx78aIv8AB1SyCQFPyZceSNmVSt2UNqIkMLgWmJHkDj0T4l4gamSLMIWoVAKkkG+q1pG3MDljzUD+ZUeVBUIBJILDSwbSIuZK78pxrNbNYP2mJmqbLqp7U2G9jqFx5x749M0alVtiyg+VwDjzatklp0qQUrqqIrt3w0krzG6mZGn9cepcQ00qa1DraVGlUTVLBSwHlYG+K43TYp7SAc2vZ6e9ILqvuxgfXG7gxscV7ivHWfSISnoqJUAZ++wQzBCggE+8fTFj4dmqVZgDK1DJCyDqG+pSLMsQeRvcDGimmycaK38YOWZLEwl/SZ/Y9cU/htPRUpFohVRSfSoGPnEYffGLFc1XJAOm4B5BVED64RUM4SU7hVmUmVPhiZHvBxg3bbNEqSPY0rkK60iBUKnTO2qJXfzxR63xeDQNNdT1ailXLGVTVvYWL8omBck8jcuBZYVMtSao8Hs0cuCNRBUEyTt6/wC+PJc/WpUa1UquoCq/ZpuCuttJZhyIg+cjljZy0YtbOctRVW7SqYXTNze4Mep/dsQ8T4wz6qajs6cCBN2gBb2k2U2At9cK6uaqVCWcyByFrdAOmOGcMZYk7ARb2HQfuMZMaVnBJIN7R3ekffl9MSUxpWSbTe98c0yC2mYkfv8AW0emOK9GTsdKzJ9/ywwrZw1RnNuXQ/nvfBeVSmJUiX5ziJa4pjuqAfPcHqZ59By3xzl30wxiWPM7Dlv88J7LVIMOYRVYlbTtbyxA2W1LrSwbaY0zzW+x6YyuWFmUwSeRv6Wg+2B6VR0YqDYiDOxHKf1wJA2mZDp4kiPKI+UYKo1NcEDnH6Y6o0nO5Okbg309CRuV8xGCKOV0sACBeeoYH8StzHlywWKUXQPmAJAe1trfnH3wNUoLFmM9CI/fzxmf1hySbSQPmbYhoVCT5TgoSqiWnVnuEz0JsR/piNxFue843mCqnSJJ59B5D9cT0k1lSeY5X67C18US2F8MNep3UU1QBJESRG1/fnPlj0bg9MUKYR6lOBo0iO8LyQRJ5225YV8OyLUacIVVWglVJL1I2mAVnreBOHvD8oXEAQfxEopJm+8R5/LpiPybpdmc05BGYelqNRtBdtIQtAY7QFHrPLBI3aW/Dsgn+9adsTZXgdQklkWTszABh6RaPfDZOGASzsqggCZ3G/O3M41i3WzP8TZT+H8PzRbVmKi3UwqX0+E81jFiyNSsqBVJgEx4ep6mcMESkNtT/wCVSR8/CPnhfnfiOjQco9MzYjw7EeTR1xVlfi+wbKcMp02JVfwgAG8RvBN4Nrbb9cEOsHWBcGT52gzG5jb0HSMT6cZGPRxVUjIpXFaHfaoahUEAse6R/lWb90GNTCQNNsbZqgZWIdGCxDbFVBgSoGhr+Uj6t8xw09q1R9MMIBUDUGJ6kWFzfz5bnmjlXLSO0AJDKWAN9I1d4T3GB6bgi2OCXC70aqejdB0rKvaAMUBASZUR3bbCf19MR5bKNTqBqZNO9++SDzuJ7xIJ59OmJaXCShOkhYclSASCDJhlm8EyII2wxWmYEwSOcRjWHCpL3LfyQ5tdCHj9aqadOkzKVa/es2pYBuAbGQfnitHhlSSwCEHo99o5gYs/xOsGl/X/AOzACN3Z/fzxx8yUZtLo7uFNwTK5UyrqDKGZEgQZgEciTO/LDLjHG6ua7KmZWmgGlQb6gI1MOZIBtaJ88LuNUSoZtUaiLk7bz0tHXAKI/aU7knSOZMSD5n9nEIprZ3SrabnUbEXk+U2IPzwbluJvT0EFStN1bSyCzagxgwTeNx0wHQypjcb9Rz5XjHGZVlVhIi0bHr0tgsB9x/NirUNVRPaS0mJEAAgiLQRB8/bFboZdlalJBCI6n31RgoZnvEFDDICdLMATA9f2cMVyVMqpGsGOv3kHBfyFWXjhLn+GouoJApos+YUDCj4l4BSrU2qMvZ1VklwpOohYCsAJiFFwJEeow6+DMvOUXVUfSGqADaAGIFxf6jlhrWyqsw1VCTzkdNpIjG6poyej5+qwp6gG8HcbWIkX5HbGZmiwXVJ0mIJtqB298XypwSk6ZvUQqDNVRqJEqARpueXnzn0wKmUNfMLkRoGpLVC0roARwY66Vt5t6SnBpWKLXRTskQCCQTO5H6+04O7ceFbsTEASSdgfPoF2G5xaOPfCQyVGpUWrTq6jplQQws/mRExPW2IOHZUmnTalRDVdJfUzIBZgryWIOzRbqL74imyk6ZUcxTfXodSkXIbkOvnPXDXKVKClSxsHWfQb2n1xzmaVfN1min3lCppUGO9qjfqZ8reWDqHwZmzvReefhA/fv088JxbGpGsxxigafZnUQLKSBEAmIHpHzwkzFRGWUkFYkbSD0/fPDpfhasLMAvqxH7vgTOfDtSmjuWBAVj4iduW25/LFLjl3TJc0Q8GyNaqC1MgBNixIvuQIExtM2xBSZzV7NoWGbUoHdBFiQPXph1wDg9QU1qGo6K0tFO7AERMbmYiwJFuth81SpICCWNWWGpg11HcQWUCYEk9Z54bg1tic7VC7P5BwFeBpqchJOrxCx5lSDifglGnDNWKwGsrcrCDHORI9vPFj4L2gyzEjUrSokjZhFryD3QNp25RhdxvhpbNoSVAcQQsW0+Id0WtHvPTEOSugiiY8Dps6VYHZNpUDvAMxJiARJWBcDpzx1lcon8YQijT2ZqKgIABMrFrRaffbDWlVpP8AyixaqFAQgylOO7a8COmFBWpVzyowGo0tI70aQuqPCLEbER54WxtD3h1V6hKKSLQsEaWYbDvC8XkCSbjFq4Pma6IVVNV5nTBANr3WYg3IO0Yr9KlUErUrUqarHhKTzsQILRyMGL+mN/xOUpACpmXebgKDcAkSNc9PLfzxMYbtaAt75sbvmdBgd2VUj2iT9dhgWnxjLoqktLaRLBLm394gffFdPEssDFPKVahHMkgf+Xu4Ny2e0BIpZalKiC7DV6XiTjVRoLD3+Idf/LpVKnv/ANurAVZcw7FtGjYRp3sL94z/ALYizXxDoMPm1WRIFNCTB2goGt546ahrJLFnIMEtUpggjcEEyIPLFAWo0+6HjusAQRsQbjGzlnjVpMdYwgyfxMtIAHStMDSDpI/6oBC6RvqAuQCZth5keLrWANN11ASVVgWXYwQvkQfcY6Ieoz6MZcVb8EZTGacHVK5PiUT1iPnbCOvxyiDAYEzFgY6kyAbAcxjR8iX7aMsfgyvxKkjlGeGET3Wi4kXAjbHS5+if7Vfe33jFX46lOpXqyQyykEGx7gFsCup1SGAEdLzeLzttaMcM/WzjJpJHZD0sXFNjv4idWakUZWgNOkgxJXeMV3i+b7Glr0yJAIAueX0wVQZ76tJNuZtiSqAyQwE9DcfXGEpucsmdEY4RxRWuP1gyDYGdo/f3wEF/mIe7AUX/AKTtOGPG8uqiDIVmkEgkCbnzG2BURe0U2kLsQenQWxaaozknYJmaNZgmhnWCSRDQCTZrC/vgrOO2hrk94TAj3j1xLTpAAHUBq233PLw44zdCVPeE2i/5kD5YLFRzlye1g7Qu4HQfv2wXnc4VqUqaKp1sNXmO8CI3BG/Sw5GMCLlj2ndAuoAEg3Mct/bE4oUVqJFSnqFRqj6qlMAFlKwCXvcKfLBoe+i+fDfEEp5ZVafE+0z4z0tiTN16VSoH01QD47iDAgQOR98CcBNE5ZNQ7xL3DCJLMQLHT8sdsaYJUuoI3Gq4PzscdnEoV9nJyOWRTKeaBWumsI5zLkB2ADAkgEjohAJm15tAxYuCdjl6jvUUsy5aSdJkd/UQLz4DTt1naLI8vw9Eo52qD3watNWJkgAET5k6vEcTVc3VGY7VFUrUy1NndoCBW0gm5EmbAFhzkc8Q0u2OLd0N/iXPrmMkz0whC3OoQwAu0WnXtfoTvOB/g3g1Naa1qwWoTDU6bkPAMFY1TfnEDlfcETPZxBlalOknd7NxJJ5gk+FWWBJ/Hy98ZwvitVaFJQ5RVpKTCpYARqOpmkWN4X8sQ5xWy1GTfRZuHZPRxDNVAwBalRIQbAsHUzBiwpm3+Lywx4jxZ0Q6ANYWSZiJ5+wvbfHl+Xz5qVnFQs50CHs8yHEidMA658tiJMYfLxPQgQNV0qoWxRBYRyVm5dcJckY9or8cmtDXhlJ6qsWQLpjwkEcyQNPPn/ViT4kqZc5WrRUzZiJZNeqCABzHpHXFcTNKAESjTibBtbgSehMb+WBeL1qipVIXSSAYRQsFQRI03j09+uG/UtqqD8KWx/w/M0BTp09BYCmg5AjuzIiw3i5BN/dH8QZJG7Wopqo6QwBAKaDaAes73N8T/D4fs0YtBZQNJPSdO8XM9DsMd8dqMtGqppEErdtrSJI5E/bGUuWTdMpcaUbRmRzVPL5enKnvhWeW1aiVmFAspIHPa1sD53PUkZRUpEVIIp6SCqz3WJvckCIgja43EvD2VqVNdBLFVAvB9dS879cI83w4dvTXtpRmIOo6ihUFiJ1H03G+2ITTkG60GcRVUZTQItULrqTws3iA2EbkC8RY8sKcjVf+LLOp7SSGXvBpNpvtyHIemGWay7Gog1T31i68pBgA33++Jsn3s7TF9XZGOs949PI4alS/gUkGpmMvZmo6mi0nWN/N2B3MyOQGG+XzMmmGD+AgiNMSQQQacNHuPEcbqZGmCGfVzYpK3kWnU4PKIAnnbEDPSFLWhEEE/wAxhKncgBQSJ6KGnGWafkVE/wDCU6qFWLm4htV+7qmZmQ3SIECIO7pcyhYlUCsAVkAKYLBwt1jSCLSDu3XFGr8YzRZuyemRP9mquRYDxFL7DYYlzWdr9hRqmrVSS9NyO6WdWZvCsEDTA2HhONoq/IrotjZCmxSaKEqoUMVJaBMCSSOfTBOZqVNROiSbk+Z3/DjzxeIf36tVyYALVSFF7yGmTG1xgTMV6IYyb/5lxta+BWW74UWrUpFMualOpqN0pa6bdZ1WUMehAsIgTi28O+Ga+W/nQHJZy9NPFDBQIuASNIt0Fp2wgocfzDEIry5kwjPFhcTrgEENPpg/KcWzUHtTVBB3WqVXlbvTLGbXjbGUYqLtGluqO2+LhLqyAHv6RUkMChZSGWZJ8JtFj54o/wAR8RJqOVIDOshtIVWAYTuT4SNxvp8zFqr5rMVFapVpUqug90VFL1AJMEBrbbkG/IYpXxNkVGp9ShwoLU6ZAQatIAUbAWsByBPXDk5PtkY0OeHnVRquAe7ROksQe9eCIspECIvESTNnOTZKtRwApUMixERAlgY9sVnJ9o1APSqUgmkBlZQWgyDr0pBuSd9r4KymQzVKo1RHp1HG602JYmQNivUx74jE1jKqQ3zyLTqVCR3YXSFlietgJ36YrvG+Ndg4AbxANGjvKLQLsBfBFXiuZYhgEkggnUm6GCL7HywCzVqlZC1NWbSQF7sGbm4IXl1nAotPZUppqkT/ABHVLU6Z/FI8O4ttgVT/ADx/d7MTa06Dv57YJznDa7AF6R061OlXQsEjvae9HKAPPEC8NqipLIQSIUAoRpAIZmJcAESv1N4jDURSlsreeUmo07Cw6AAcsOaTE5ZSbtIExJMahz32F8R5n4arEMy0yxZjpOtBKd0q0aoE35ziXK8NzAohezBHL+Yg638YtJ++G0TYXl2HbvtAQR/0rz5/74q2bXTUI6AfYYsoyOY7Vm7IaCtgHTVaLEGrvaLE74B43VpLUI7Fe9pggki4EQZwq2Vmkiy8GoCpkKKtKimzVCw0mQHYCFnURLRIG4PrjeffL1KjuWqamMx2TMASdmM90bXj5RhBQ4m1AUmXTMEgAzp3XkbEzMNy9ZwVleIvpdgRTNRjrWq8nvAKrSYN+918Pnhxck6IeL2wzLlf4TOOsma1SLHZiiDew9Md5LMr2SbjVkqKL/nFRlm52BU/LpfFW4fVpqKqvE6tpMHTdbL0IJn0xrJZhdfeYhYIAUEzDahYi8Hbpvh3LdEaHGer01puNZZjR7Ob+JN7bd7rc96MdZJKbAHtBNXLCkYv2bKELFr7zHd88V1qmp2YPcg7AyeS3I35+uDcvmE7MQNNQDSb8xpOoc5bn6W8pcWlRSnuxoaelwisGKpRQkgXmpUJ8X+Hn6YlzLz3dUEiFA8UkXuOUj7dcLOC1u+5cs8UwsKJNtRBuP3JxzUaH0iodTOIJJ2ksJt5jcxbfEyix56HYyk5hVLoFNMnxShYkN135e+O8jlAKNVnZUM1TpuSdUkXVSOf+2I6WcV66J3iqqQ6wPHIIIJMRAO5vfEWWzQdMwzPUJIMFCsKBr5m3MbA4KdF5L/ofwWmClOO1DMqluanuiALEQPbfnjXxLXpLSqLYMwIUXud4jYH92wp4Zxw0uzU1W0hFDCD0O0AA3jxQYAxzxvioqU9BCsZIRgCCDaSCCRcWtgcHmLNYjThLq2XQIFNQBQysCYP/pn57ekgZ7M/zqJVV7jsSdQOo6Ym8fTA2Wz1OnTVD3X/ABEBpNyQSR5HCzi9Z6joRUFtvF4p38O98NQ9zJzVDvP8SR6lMBFEsSzBAGNr3DdRznA4zP8A4xGBKkI0kmSPEb7wY++BzmlaorMaa6VImG3Ij+7tH3wPTqI+YBEBWI1bkTNySRy8umGoEykO85V7Rw3IkXgbCwsBPL1xJQ7MSAoNrGWHS9/Pyj1xr/ir1AUVysGRBZp5T3Xn3IO5wDT4zmljTUfc7s3SdtWIXHYsgvOxTqAIFDFvEGmNhGmTHrzvthlms4xyQdqYqHtWBSoC23dBgTewI/ZwLnDmky61hWYltHd1VAJeLTrj/bGUM9VbJioanfFVwe8xmABa5mJk363xrGC8gpKXQgzGX1KzU8rUpHUulVluRmxWTfzFsQjh+YN+wr//AMm/7cO/+J0yBNSu0S06YEKKk71Df+W3088RVONUVCk1ao1AkA0rxqZb/wA3fu4q6FX2GZ3OU+3pVAQqUjvTOjUQ4cSVJLA3kxaZnliXifGnzIqfzGYbqoLKogi0kgNYkGFuNxzw2bh2SqXCVKh5nsg0nyipb2xJT4TTAIWnmYIIgUTpA6XY223J2xlbNkkJOKcYqMWTu0wygabAIunSkADlIO88jhe1OiCHFam7rpHZ3VSVAEszCLb7dfPFlq8FXToft9PRgijr+I4jTg9EADs2YAzBr0R9BiWx6Amy1MrVJrLFQqWAEBBOod62ognYDnGCc/m4QU5pDUAoqinpIgk7EfWZMWw2VUIjslPX+YrH30UjiSnSCKdNBQJJ/tNzv/YAYyc68/7RXt8CjIcVpUwFalScrqk9jGrWdQPeFyPXmRbBdDjJhQKCEA3C0wVYd6Pw2NxI8vk0TV/9oD2P/uC4my+Uq1GvS0Wu7paN+VWfpgXI5PTX9j9ouHG4MfwtMHoKf/x6x88TZ59FNmrJlcuCpB1AdouoQIUAnzvG22O80agYLl6lGtUUg6QjhVgzLPrZARG0GTiXKUa1Rw+dWk+i9JVghWO7SVAmIA3xpFy/9EtLwJcrxWnpVaOWesFUKHFDeBE62Yz64M4VRrEhHyaUqck66nZkySLQWG8kz15YtHak7KR/V+UYgzWW7Sm1MzDiDpJDexGLsVAWbpJTJUUtTc9NIaYP+IgAn0nFSrfCatpAeovdAYFAQSABIiDJiTJOHY+BSfDXrqPMp+azgHiHwxSpGK+eqpaZOmD5AlbnnGJalenX8CcRG/w+4lEqaSCROkaiFhQJkEG/QeuBaXCuypuHdf5ppm+nUNPaNBOrnz9ueN52jlUJh61aCQIqABhICmVAiQDI8x0xxwziiUpjLUiQRJcGo2npqZh5+W2KVryTiKqbaXr6YszEEKCIhhYHlf2tjnhSaapB6SdRgd11ci46DY/XY2GhVyRDfyqlMvGrRUYTExaoGHP+9jqhwig7lqeYB1wIqppiLDvU9Q6DliskLBiKrlu+7QpOhD3eW8kBLbLf1wfkcur0aYGhWJclis/jI71ja/0GCquXOXY0lp9vWNO7IdSqGuCABEG1yetriYOFZapQXTVXQdRIDWsdBtAjdTz54emTTQPQFQV6jEjQF0l4IVgpjZbgbmOgI6YVnOxUVxEqFERExb6j74e5h+64Glg2uRqgEMSd/fFYNB5I0ESfO1/I4pKInfgYUqdcFimpWXx8jeYHyMDEmWrMtOojELY2ZipJuCAPxGLXwFXqVQ0ktJIY2O/LbnBjBLu5pMzjd1ju3HXzHyw2k0CAldo2JhQBpHIfu+Cc3WJNMclUDnE96T++gxnBCe0G4gHl5R+eDeN5iEW0d6DI6Cbe+ED+gcZd6tUU6dyV5mw3Ek+4xDxDLdk+lpDjxA7gx1nnvhlwbNpqDA9+LWJBMggHytibiDrmqjNpAdUAZdQEMshtzJG0eWKdUKO0ITzk+Y+vP5Y6S7HYWPtsMMX4bIBkA87zPXEKcNZSe8CII5/phIWLGecpiiaAeoatEyCCu0WLKeoDyL/hjkMS8EytKswFSqyMSAEZZ1WMkMCCPQ+eAXq1DTWm9NHVWDAkmR/e6WPOcCU89TaprYFaY2WmAO7sZ1yZn13wS+jRKPks+WzNOpTp5d0qBAdLnUbBQzCCbbgGed/PB2V4Gi0wNFJU7zaXrAuOpEhdOobxGwmcJMg+U/lRUqiXXXOyrDEkRAtC+e+LVSy2TqeHOPcAEdqwNtvxHqbRzxhOUl8ijGhBmeE0zZK1MFbaNVMQp1ST1IFQnvGTA3xqvwHKQitXryi6bUFP4mJvHUn2jFnHA8uxntEeIiWmwi3eS3tGHlPOVVVV1pAAA7y7Cw5YyfPNacX/AENa7RSaXxaxQ9ppnzaofpq/PGJ8RpJ/8PScf4qc+51X+uK12cEbfOMECo0RDH7Y1fHGi7LZk+OVHMLl1UHbs6Kj/wBRNvOMMstx+t/aUNuSlVNvJj9sVXK5KkyjVWYHotOI8iXqKD6xg6gmTpw5pZirA/tBT0T7gj645Z8cfgofJ8Sl5Ayz25don2nDrIZV6qh21UlOykDV9yBin5r4loQf/DFB/gVGJ6AhYw7o/EFeoisKkSoIC0xFx/ebpieL0cZvJoV/Y84nWpZSk1QrZRuTc8hJP78sea8R+JM1nH7OiraTsALeoX82n2xYs1UzGaVqTtrQiCLx5XWkxkG+G3D+E08rTWmFgwNR5uepMAx5csdihGC0h9if4e4ZmaWlq1diB/ZL4f6jH2+eLcuUEXMz0/ZwNrWMGZfMd0eX7GH2x9HdPKpHhHuSf9MA8Y4hUoxpRdJsHmRPQgAR88HjNRsL+gjGVyXBVog7iZn6YaQipZniNSoDNRojZZUfRR98Is9l0qLpqJbVqGkwZgjckyL4sXFeHVaZmm+qmfYrPI2Ejz/ZVJSqkzqB9WwwFlHgOXaxDD+phP1I+2Osz8N0Cp7NzTe3jllIt1NiLm2/1w+FI6BMTB2JjAz5VpspP9P5nCoCuZr4Zqiez0VQI/5Z70f5Tf5ThA1FqbSJVwTa4I298ejhNCggMSdwGUx8hiNqnagLUpK4/wDyXPsSJHsRgsCiU67rswuLyAbe4OIndrwVHWAAMWHinw6yspozoMyGZO50GqQSL/3Z9cJ6vCK6kyhICmSCD+eDQA3bnY6T5Y7kdF+v64HCGZhvdH/TEpMXNvYj7jBQrJ+0P90H541qA/D9cRdsDMFT/UP1xgJP++GFkiMOjD+r/TEiOsgHUOsQfTfEUMPwn5YzXcAgj1H64NhoIzWUpaCShLdYH1gx9MJeLaFjs10MtywtO3TDzM5gCnv0+4OFXEaAZu8DB57YaFJII4ZVJpqZ5XMCZkzc4JZiRGpvnH2wLkkVBp7QaeQiWB9dsENml5KT/mP6friqFZBnkIpNf3PrhZkl0zPPcGOVx5YbPUZlK6Ug9cQLlgNxHoT+Zw0gYXl+ICUFSmjqrLPdUMQN1JAmCDvOHmWp5KpUCtQqUpMDs6h3MBR3yV352EYS5Lg71WimrNbmdI9ZJGLPw74aqKyM1RAVMwHkAiCPwddx9cJoaocP/wDTtDenWqRyPcYfSMRH/wCn1XlmDH/6/wD54seWqgC7qj89BYD6rgj/AIm4tqB84H/bgxCzz6vw/L0wCtRnPM91VHO3M89pwE60B4Xdm3sgHlEzA58sG1ON1msWUCNtNP53EdLjA+WzUtLMyj/AB+gH0544FKfcicnZ1l6Jde5li8Tcl9/mMbXg+biBlyB6x16tGH+U+HqdSHNeqeoBHd9hP79pcUsulNYVqjkc2ce3MRPUj8scvJ6qv1RVX2U2t8K5jSbAPy0P3hblcXO2+C/hLKaIpZtG06opFjAk8jB2J89/XFreqCPCdV9uvnp5iMI+I0lJk6Rr6xI6XifOCQN8Pg9XPLGXQ0kmXLK5VKVqahR7n7nE2Yy6uIYD3wq4Jm2egC5lkYoTzbTEH1IIwzo1J3GPRuzQWZnKaNrjrjfDm70NEHrhtUURBFueENQ6XIGwNp+YwXQdj7QANvliBnBNh88TZfvKCNjjrsr4sggZFIuLbb4RZ/ICmS6rqUXKknu/PcfbFgaou0/IWx0lRORwwKlSzSsohRPRZj54lq0iwJKkAb97YedsWQZKibimnsB+WMfK0wmnSQL8zz33wAecVsy99JAGCspnqSiIlzuzC/l1th7nfhqgbhqi+4I/9OFh+G1WStUn1X9DgdMADM5ztGg91Qfn53xJlxSHhZdR3MgWPKJxKPhqobq6eh1D8jiJuAV13VWPQMP/AHYVILOMxAYBekm8egH76Y3TrvEX9jiUcLqAwabe1/tjWZoMsCHUAXlSJJ339MMDSUxUt795RH7viGvwGm+9OmbTq0fpfBAsCQ99t+QifPGhmjIAcxYQQP3vgCkLn+EabWVEn/A7A/I2xlL4apKZIqwLf8y//l/TDoZpJHi9cclNRJDHe4ABt79cFsVIGb4ZosLGqehDA/dThZmfhKlMPVqzyDAEfYYsiOaaND6uekWPnF/pgetxamyxFRSOfT3n6YE2FIrp+EV/BWA/zJH1DYhqfCNYeF6bD/MR+RxaKCsy6pDIec9PtjtqcHuavQG49uftismLFCHhvwqn9uzSOSEQfcAmPliw5fheXVdIpUyPmT6kkk+hxna1N2BIHMiP0x2j0z4qY/pOC2FIlTI0lMrRpqeRCAH5rBxKcqhO1/X9ccUKqzCtH+Yn6T+WC9U7hT8jhgyA5W1iSfMmPtjgq4toX/q/0xMyjoR6N+uOe0PVvl/rirCgOh8JUQP5juzGbSFuI6XwenC8shGmkhYmBIG/WTf5YIBMSLA/igDV1j9jysDjVTeF1Em3d1EWt+EwDIvNvXHzr5OSWmysaOeyYC5UCJULz6DGkTSJtykHkOkc49J8+WCKOTqHamV9TfaN2v8AXn5nEtHhdSZZgLzY970IEDa0z9sKPBySdpMapC8ltMuByEgnb3EjnhXmKRdtNNWdpsLSNtJ2gXEybYtKcHUtqlmOwkwB/wBME/1E4NSkqgKoUDoP0x1cfo5WnITQu4Vw/sqYQ3MksR1P+3Tlg0UoMkiOmIM/xSlRH8yoAf7u7H+lb/TFa4h8Q1HH8pNA/vvGrpIXYepJ9MejjRVj3i3FqdBdTNeO6o8TeQH57DCnIs1SmtRzd9TGDIuSYt0FvbFHz/EArMNRqVTYsTOn36+XLyw9+BXJp1aUmKbAr/VMj5iffDx1Yk9lqy2cNMaYkSd5xM+eZhGmB6/6YhWmB7ffGapGFZVHf8SPy5R98Y1dbQZPnNv1wFWpnecSNTEAiZ9cFhiTNULHxD0nEtBGPMjmYwK1ve/XHdNzG/5fUYeROIyKKd1/e2NLlKZ6j0OBkrnbUZ9j98d08w3Mg+o/SMFhTC0yyqIDfP8A0xs5UQL4G/i76YBnzj9cTJmwN1I+R/P8sFoVM2yKDH+oxzp6HEdXMyZAPyP6Y5TMg/iB9CJtigOnpqQdQDeoBwKcnRJnsk/6R+WDEfvC3MX6YOamJuZ36YAK+eDUDspHozfmYxA3B0BsXtyMe19PviyjLL0B9LYjqUVA2PzwAVtOEkHxmOhX8wcB5j4fqMxNMp6HUPlAxb0URuY8wDiZMudwVPtH2w0TZRstwfNUmkU1Yc9Lr8xJF8OFy721JcbR/ucWJsueg9sRGi3T5YAsRdsBIemwPUKR9xiJ8nReSpKn0/K4+xxYtBA8JxyXHMT5YaCyo1Mo6efQ9fT/AHxyuociMWl6aNvTU+wx1QydBjGjSeV2g+0/TFCsr+RytWoe4JHNjYD1MfaTixUuALA1FieZBgfLDFEKiFiBsB+mN9qemALKvm93/wA//Zh7wr/ljGYzHg+l/c0fYTy+X3xlPf8AfTGYzHrxEdr4cB5jwt/l/XGYzFgeVZDd/wCr74Nrf8lv8jfbGYzAUiicO2X0GPQfgL+2/wAyfd8ZjMN/qSuy0DYe/wCeOR+L1P54zGYyNDR2Ht+WO13xmMwAc8z6fliM7fLGYzC8gdDn6LiWhy98ZjMMCT8Z9PzOOR+Q/LG8ZhiZJT5en6Y1mfBjMZhogV8N/wCZ7/ni2Vd8bxmKA1T3OIc/4fcYzGYBHOJ6HP1xmMwyQtN/bGsZjMAGHlgLM+M+32xmMxQgI+LHNbwH+r7YzGYoEPvwD0GNU9hjMZhAf//Z" alt="" />
                <p>Chihuahua es el estado más extenso de México y comparte frontera con los Estados Unidos. Al norte limita con los estados estadounidenses de Texas y Nuevo México. La Sierra Madre Occidental atraviesa gran parte del estado, proporcionando paisajes montañosos y diversas regiones climáticas.</p>
            </article>
            </div>
           <div className="container-user1">
           <article>
                <h1 id='RickAndmorty'>Tijuana</h1>
                <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS0ZDmgEkhJLBRa-xkzG-jAJDhv2jIqiFsCwLKfa-fe5lfOu9kOe0n9VO1RKAAbALMDXSqdPHKE_GSXY-e8-9hC-A6_Lx0lkgiNpotQvA" alt="" />
                <p>Tijuana tiene una historia interesante que incluye su desarrollo durante la época de la prohibición en los Estados Unidos, cuando se convirtió en un destino popular para aquellos que buscaban entretenimiento y bebidas alcohólicas. A lo largo de los años, la ciudad ha experimentado un crecimiento constante y se ha convertido en un importante centro económico y cultural.</p>
            </article>
           </div>
           <footer>
            <div className="footer-container">
                <h2>Julio y asociados</h2>
                <div className="icons">
                   <a href="https://github.com/julioerives"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="logo" /></a>
                   <a href="https://github.com/julioerives"> <img src="https://img.freepik.com/vector-premium/icono-instagram-logotipo-insignia-moderna_578229-124.jpg" alt="" className="logo" /></a>
                </div>
            </div>
           </footer>
           </>
      
    )
 }
 export default User2;