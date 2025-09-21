import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../auth/entities/user.entity';

interface RequestWithUser extends Request {
  user: { userId: number; email: string };
}

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Req() req: RequestWithUser) {
    // Crear un objeto user básico para pasar al servicio
    const user: Partial<User> = { id: req.user.userId };
    return this.tasksService.create(createTaskDto, user as User);
  }

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.tasksService.findOne(+id, req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Req() req: RequestWithUser) {
    return this.tasksService.update(+id, updateTaskDto, req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.tasksService.remove(+id, req.user.userId);
  }
}