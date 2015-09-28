class StaticPagesController < ApplicationController
  def home
  end

  def projects
  end

  #def docker
  #end

  #def docker_basics
  #end

  def download_resume
    send_file Rails.root.join("public", "ChadGrimaldiResume.pdf"), type: "application/pdf", x_sendfile: true
  end

  def view_resume
    send_file Rails.root.join("public", "ChadGrimaldiResume.pdf"), type: "application/pdf", disposition: 'inline', x_sendfile: true
  end
end
