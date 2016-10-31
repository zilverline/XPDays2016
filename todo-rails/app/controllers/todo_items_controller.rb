class TodoItemsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @todo_items = TodoItem.all
    render json: @todo_items
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
    @todo_item = TodoItem.new(todo_item_params)
     if @todo_item.save
        @todo_items = TodoItem.all
        render json: @todo_items
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

  def destroy
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy

    @todo_items = TodoItem.all
    render json: @todo_items

    # redirect_to todo_items_path
  end

  private
    def todo_item_params
      params.require(:todo_item).permit(:title, :due_date)
    end
end
