#!/bin/bash
#Stopping existing node servers
echo "Stopping gic2 Multiplayer"

# pm2 stop --silent office-mp 
# pm2 delete --silent office-mp 

pm2 describe gic2-mp > /dev/null
RUNNING=$?

if [ "${RUNNING}" == 0 ]; then
  pm2 delete --silent gic2-mp
fi;