from flask import Flask, request, render_template
import MySQLdb

import config


app = Flask(__name__)
sphinx_connection = MySQLdb.connect(host=config.SPHINX_HOST, port=config.SPHINX_PORT)


def get_address(text: str, limit: int = 20):
    c = sphinx_connection.cursor()
    c.execute(f"SELECT address_name FROM address WHERE match('*{text}*') LIMIT {limit}")
    return [adr[0] for adr in c.fetchall()]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/search')
def find():
    addr = request.args.get('addr', '')
    limit = request.args.get('limit', 20)
    return get_address(addr, limit)


if __name__ == '__main__':
    app.run()
