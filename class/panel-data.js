export class PanelData {
    constructor() {       
    }
    createPanel() {
       const panel = document.createElement('div')
        panel.classList.add('panel')
        const form = document.createElement('form')
        form.classList.add('form')
        form.innerHTML=`<h2>Add a new photo</h2>
        <div class="mb-3">
        <label for="label" class="form-label">Label</label>
        <input type="text" class="form-control" id="label" placeholder="Picture description" >
      </div>
      <div class="mb-3">
        <label for="url" class="form-label">Photo URL</label>
        <input type="text" class="form-control" id="url" placeholder="https://cdn.pixabay.com/photo/...">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
      <button type="submit" class="btn btn-danger">Cancel</button>
    </form>`
        panel.appendChild(form)
        return panel

}
}