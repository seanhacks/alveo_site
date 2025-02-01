<script>
  import { Input, Label, Button, Textarea } from 'flowbite-svelte';
</script>

<form>
  <div class="mb-4 bg-alveogray p-6 font-inter text-alveoblue">
    <div class="mb-4">
      <Label for="first_name" class="mb-2">Name</Label>
      <Input type="text" id="first_name" placeholder="Enter Your Name" required />
    </div>
    <div class="mb-4">
      <Label for="email" class="mb-2">Email address</Label>
      <Input type="email" id="email" placeholder="Enter Your Email" required />
    </div>
    <div class="mb-4">
      <Label for="subject" class="mb-2">Email Subject</Label>
      <Input type="text" id="subject" placeholder="Enter Your Subject" required />
    </div>
    <div class="mb-4">
      <Label for="textarea-id" class="mb-2">Your message</Label>
      <Textarea id="textarea-id" placeholder="Enter Your message" rows="4" name="message" />
    </div>
    <Button class="bg-alveoblue text-slate-400" type="submit">Submit</Button>
  </div>
</form>
