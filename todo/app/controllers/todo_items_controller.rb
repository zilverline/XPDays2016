class TodoItemsController < ApplicationController

  def index
    @todo_items = TodoItem.all
  end

  def show
    @todo_item = TodoItem.find(params[:id])
  end

  def new
    @todo_item = TodoItem.new
  end

  def edit
    @todo_item = TodoItem.find(params[:id])
  end

  def create
    # render plain: params[:todo_item].inspect
    @todo_item = TodoItem.new(todo_item_params)

    if @todo_item.save
      redirect_to @todo_item
    else
      render 'new'
    end
  end

  def update
    @todo_item = TodoItem.find(params[:id])

    if @todo_item.update(todo_item_params)
      redirect_to @todo_item
    else
      render 'edit'
    end
  end

  private
    def todo_item_params
      params.require(:todo_item).permit(:title, :text)
    end
end
