import Redis from 'ioredis';

// Use Upstash or other cloud Redis URL
const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on('connect', () => {
    console.log('✅ Redis connected using REDIS_URL');
});

redisClient.on('error', (err) => {
    console.error('❌ Redis connection error:', err);
});

export default redisClient;
