for %%i in (*.mp3) do (
    ffmpeg -i "%%i" -b:a 64k "%%~ni.opus"
    del "%%i"
)

for %%i in (*.ogg) do (
    ffmpeg -i "%%i" -b:a 64k "%%~ni.opus"
    del "%%i"
)

for %%i in (*.wav) do (
    ffmpeg -i "%%i" -b:a 64k "%%~ni.opus"
    del "%%i"
)