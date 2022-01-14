const express = require('express');
const router = express.Router();

const { Todo } = require('../mongo')
const { incrAsync, decrAsync } = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  await incrAsync("added_todos") // increment added_todos key by 1
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  await decrAsync("added_todos")
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const todo = await req.todo
  res.send(todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const todo = await req.todo
  try {
    todo.text = req.body.text
    await todo.save()
    res.send(todo)
  } catch(e) {
    res.send(400)
  }
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
