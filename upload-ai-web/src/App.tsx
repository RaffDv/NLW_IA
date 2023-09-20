import { Slider } from './components/ui/slider'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'

export function App() {
  return (
    <main className="min-h-full flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            Developed with 💜 in NLW IA by Raff{' '}
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={'outline'} size={'sm'}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </header>

      <section className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Your prompt to AI..."
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="AI result..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Remember: you can use the{' '}
            <code className="text-violet-400">&#123;transcription&#125;</code>{' '}
            variable in your prompt to add the content of the selected
            video&apos;s transcription.
          </p>
        </div>
        <aside className="w-80 space-y-5">
          <form className="space-y-5 w-full ">
            <label
              htmlFor="video"
              className="flex flex-col hover:bg-white/5 transition-colors hover:border-solid  rounded-md aspect-video border cursor-pointer border-dashed text-sm text-muted-foreground items-center justify-center gap-2 "
            >
              <FileVideo className="w-4 h-4" />
              Find video file
            </label>
            <input
              type="file"
              className="sr-only"
              id="video"
              accept="video/mp4"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_promp">Transcription prompt</Label>
              <Textarea
                id="transcription_promp"
                className="min-h-[5rem] leading-relaxed"
                placeholder="Include keywords mentioned in the video separated by comma (,)"
              />
            </div>
            <Button className="w-full" type="submit">
              Upload a video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your Prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Youtube Title</SelectItem>
                  <SelectItem value="descrip">Youtube description</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt-3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-3.5">GPT 3.5-turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-xs text-muted-foreground block italic">
                You will be able to change this setting soon!{' '}
              </span>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} defaultValue={[0.5]} />
              <span className="text-xs text-muted-foreground block italic leading-relaxed">
                higher values tend to more creativity and more errors
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              {' '}
              Execute <Wand2 className="w-4 h-4 ml-2" />{' '}
            </Button>
          </form>
        </aside>
      </section>
    </main>
  )
}
