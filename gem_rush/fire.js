
const Fire = function(ctx, x, y) {

    // This is the sprite sequences of the player facing different directions.
    // It contains the idling sprite sequences `idleLeft`, `idleUp`, `idleRight` and `idleDown`,
    // and the moving sprite sequences `moveLeft`, `moveUp`, `moveRight` and `moveDown`.

    let sequences = { x: 0, y: 160, width: 16, height: 16, count: 4, timing: 150, loop: true };

    const sprite = Sprite(ctx, x, y);

    sprite.setSequence(sequences)
          .setScale(2)
          .setShadowScale({ x: 0.75, y: 0.2 })
          .useSheet("object_sprites.png");  

    return {
        draw: sprite.draw,
        update: sprite.update
    };
};
