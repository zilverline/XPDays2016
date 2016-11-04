class TodoItemsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @tenant = Tenant.find(params[:tenant_id])
    render json: @tenant.todo_items
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
    @tenant = Tenant.find(params[:tenant_id])
    @todo_item = @tenant.todo_items.create(todo_item_params)

    render json: @tenant.todo_items
  end

  def update

    @tenant = Tenant.find(params[:tenant_id])
    @todo_item = @tenant.todo_items.find(params[:id])

    @todo_item.update(todo_item_params)

    render json: @tenant.todo_items

    # @todo_item = TodoItem.find(params[:id])
    #
    # if @todo_item.update(todo_item_params)
    #   redirect_to @todo_item
    # else
    #   render 'edit'
    # end
  end

  def destroy
    @tenant = Tenant.find(params[:tenant_id])
    @todo_item = @tenant.todo_items.find(params[:id])
    @todo_item.destroy

    render json: @tenant.todo_items
  end

  private
    def todo_item_params
      params.require(:todo_item).permit(:title, :due_date)
    end
end
