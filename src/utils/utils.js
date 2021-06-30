export const getKeyframes = (animation, target) => {
  const { position, size } = target;
  const dMap = {
    slideInLeft: { // 左侧滑入
      translateX: -size[0],
      translateY: position[1],
    },
    slideInTop: { // 上侧滑入
      translateX: position[0],
      translateY: -size[1],
    },
    slideInRight: { // 右侧滑入
      translateX: window.innerWidth + size[0],
      translateY: position[1],
    },
    slideInBottom: { // 下侧滑入
      translateX: position[0],
      translateY: window.innerHeight + size[1],
    },
    slideInLeftTop: { // 左上侧滑入
      translateX: -size[0],
      translateY: -size[1],
    },
    slideInRightTop: { // 右上侧滑入
      translateX: window.innerWidth + size[0],
      translateY: -size[1],
    },
    slideInLeftBottom: { // 左下侧滑入
      translateX: -size[0],
      translateY: window.innerHeight + size[1],
    },
    slideInRightBottom: { // 右下侧滑入
      translateX: window.innerWidth + size[0],
      translateY: window.innerHeight + size[1],
    }
  }

  let keyframes = [];
  if (dMap[animation.type]) {
    // 根据type生成的第一帧
    keyframes.push({
      ...dMap[animation.type],
      width: size[0],
      height: size[1],
    });
  } else if (animation.keyframes) {
    // 配置的关键帧
    keyframes.push(...animation.keyframes);
  }

  // 补充最后一帧
  keyframes.push({
    translateX: position[0],
    translateY: position[1],
    width: size[0],
    height: size[1],
  })

  return keyframes;
}

export const getInitState = (attrs) => {
  if (!attrs) {
    return;
  }
  const { translateX = 0, translateY = 0, ...others } = attrs;
  return {
    ...others,
    transform: `translateX(${translateX}px) translateY(${translateY}px)`,
  };
}