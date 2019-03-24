from setuptools import find_packages, setup

setup(
    name='newapp',
    version='0.0.0',
    packages=find_packages(),
    install_requires=[
        'responder==1.3.0'
    ],
    extras_require={
        'example': [
            'ipdb',
            'jupyter',
            'jupyter-client',
            'jupyter-console',
            'ipython',
            'pylint',
            'flake8']
    },
    scripts=[
        'scripts/debug'
    ]
)
