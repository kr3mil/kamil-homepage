from os import curdir
from os.path import join
import glob

onlyfiles = glob.glob(join(curdir, "*/*"))
print(onlyfiles)