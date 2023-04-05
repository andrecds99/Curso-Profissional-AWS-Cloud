import json
import requests
vacina_json = '{"totalDoses"}'
request = requests.get('https://s3.amazonaws.com/gupy5/production/companies/41683/emails/1664573259958/b3c2f120-4106-11ed-8882-d77d1b93ac29/raw_response.json');
print (request.content)