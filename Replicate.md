aws ecr get-login-password | docker login --username AWS --password-stdin ${ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com

REMOTE_URI=${PREFIX}:${TAG}

docker tag ${LOCAL_IMAGE} ${REMOTE_URI}

docker push ${REMOTE_URI}