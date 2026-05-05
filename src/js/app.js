let generatedPrompt = '';

function generatePrompt() {
  const subject = document.getElementById('subject').value.trim();
  if (!subject) { alert('Please describe what you want to create'); return; }
  
  const platform = document.getElementById('platform').value;
  const artStyle = document.getElementById('artStyle').value;
  const lighting = document.getElementById('lighting').value;
  const mood = document.getElementById('mood').value;
  const cameraAngle = document.getElementById('cameraAngle').value;
  
  let prompt = subject;
  
  if (artStyle !== 'default') {
    const styleMap = {
      'photorealistic': ', photorealistic, ultra detailed, 8k resolution',
      'digital-art': ', digital art, concept art, highly detailed',
      'anime': ', anime style, cel shaded, vibrant colors',
      'oil-painting': ', oil painting style, classical art, rich textures',
      'watercolor': ', watercolor painting, soft edges, flowing colors',
      'pixel-art': ', pixel art, retro game style, 16-bit',
      '3d-render': ', 3D render, octane render, ray tracing',
      'sketch': ', pencil sketch, hand-drawn, monochrome'
    };
    prompt += styleMap[artStyle] || '';
  }
  
  if (lighting !== 'default') {
    const lightMap = {
      'golden-hour': ', golden hour lighting, warm sunlight',
      'dramatic': ', dramatic lighting, high contrast shadows',
      'soft': ', soft diffused lighting, gentle shadows',
      'neon': ', neon lighting, cyberpunk atmosphere',
      'studio': ', studio lighting, professional photography',
      'natural': ', natural lighting, outdoor environment'
    };
    prompt += lightMap[lighting] || '';
  }
  
  if (mood !== 'default') {
    const moodMap = {
      'epic': ', epic composition, majestic scale',
      'serene': ', peaceful atmosphere, calm and tranquil',
      'dark': ', dark moody atmosphere, mysterious shadows',
      'vibrant': ', vibrant colors, energetic composition',
      'dreamy': ', dreamlike quality, ethereal glow',
      'minimalist': ', minimalist composition, clean lines'
    };
    prompt += moodMap[mood] || '';
  }
  
  if (cameraAngle !== 'default') {
    const camMap = {
      'close-up': ', close-up shot, detailed focus',
      'wide-angle': ', wide angle shot, expansive view',
      'birdseye': ', birdseye view, aerial perspective',
      'low-angle': ', low angle shot, looking up',
      'macro': ', macro photography, extreme close-up details'
    };
    prompt += camMap[cameraAngle] || '';
  }
  
  if (platform === 'midjourney') {
    prompt += ', --v 6 --ar 16:9 --style raw';
  } else if (platform === 'dalle') {
    prompt += '. Detailed, high quality, professional.';
  } else if (platform === 'stable') {
    prompt += ', masterpiece, best quality, ultra detailed';
  }
  
  generatedPrompt = prompt.trim();
  
  const output = document.getElementById('promptOutput');
  output.textContent = generatedPrompt;
  output.style.display = 'block';
}

function copyPrompt() {
  if (!generatedPrompt) return;
  navigator.clipboard.writeText(generatedPrompt);
  alert('Prompt copied to clipboard!');
}

function variatePrompt() {
  if (!generatedPrompt) return;
  const variations = [
    generatedPrompt.replace(/detailed/g, 'intricate').replace(/quality/g, 'excellence'),
    generatedPrompt.replace(/ultra/g, 'hyper').replace('resolution', 'clarity'),
    generatedPrompt + ', trending on artstation, award winning'
  ];
  const random = variations[Math.floor(Math.random() * variations.length)];
  document.getElementById('promptOutput').textContent = random;
}
