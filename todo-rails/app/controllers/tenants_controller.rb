class TenantsController < ApplicationController
  def index
    @tenants = Tenant.all
  end

  def show
    @tenant = Tenant.find(params[:id])
  end

  def new
  end

  def create
    @tenant = Tenant.new(tenant_params)

    @tenant.save
    redirect_to @tenant
  end

  private
    def tenant_params
      params.require(:tenant).permit(:name)
    end

end
