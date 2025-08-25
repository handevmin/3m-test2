// Vercel 서버리스 함수 - OpenAI API 호출
module.exports = async function handler(req, res) {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { imageData, prompt } = req.body;

        if (!imageData || !prompt) {
            return res.status(400).json({ error: '이미지 데이터와 프롬프트가 필요합니다.' });
        }

        // OpenAI API 키는 환경 변수에서 가져오기
        const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
        
        if (!OPENAI_API_KEY) {
            return res.status(500).json({ error: 'OpenAI API 키가 설정되지 않았습니다.' });
        }

        const base64Image = imageData.split(',')[1];

        console.log('OpenAI API 호출 시작');
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [{
                    role: 'user',
                    content: [
                        { 
                            type: 'text', 
                            text: prompt
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`,
                                detail: 'high'
                            }
                        }
                    ]
                }],
                max_tokens: 1500,
                temperature: 0.1
            })
        });
        
        console.log('OpenAI API 응답 상태:', response.status);

        if (!response.ok) {
            const errorData = await response.text();
            console.error('OpenAI API 오류:', errorData);
            return res.status(response.status).json({ 
                error: `OpenAI API 호출 실패: ${response.status}` 
            });
        }

        const data = await response.json();
        
        return res.status(200).json({
            success: true,
            result: data.choices[0].message.content
        });

    } catch (error) {
        console.error('서버 오류:', error);
        return res.status(500).json({ 
            error: '서버에서 오류가 발생했습니다.' 
        });
    }
}
