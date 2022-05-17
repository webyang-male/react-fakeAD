info=$1
if ["$info" = ""];
then info=":pencil: 配置修改"
fi
git add -A
git commit -m "$info"
git push origin main