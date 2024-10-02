import { PropsWithChildren, createContext, useContext, useState } from 'react';

type DraggingContext = {
  setDraggingTask: (id: BSON.ObjectID, y: number) => void;
};

const DraggingContext = createContext<DraggingContext>({
  const dragY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      dragX.value = dragX.value + event.changeX;
      dragY.value = dragY.value + event.changeY;
    })
    .onFinalize(() => {
      runOnJS(setDraggingTaskId)(null);
    });

  const setDraggingTask = (id: BSON.ObjectID, y: number) => {
    setDraggingTaskId(id);
    dragY.value = y;
    dragX.value = 20;
  };

  return (
    <DraggingContext.Provider value={{ setDraggingTask }}>
      {children}
      <GestureDetector gesture={pan}>
        {draggingTaskId ? (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: 'rgba(100,100,100, 0.8)',
            }}
          >
            <Animated.View
              style={{
                width: width - 40,
                position: 'absolute',
                top: dragY,
                left: dragX,
                transform: [
                  {
                    rotateZ: '3deg',
                  },
                ],
              }}
            >
              <DraggingTask id={draggingTaskId} />
            </Animated.View>
          </View>
        ) : (
          <View />
        )}
      </GestureDetector>
    </DraggingContext.Provider>
  );
};

export default TaskDragArea;

export const useDraggingContext = () => useContext(DraggingContext);