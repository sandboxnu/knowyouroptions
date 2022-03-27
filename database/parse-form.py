#!/usr/bin/env python3

import pandas as pd
import requests
import sys

df = pd.read_csv('contraceptives.csv')

# Drop metadata columns
df.drop(['Timestamp', 'Username', 'Unit for previous question.1'], axis=1, inplace=True)

# TODO: This data should be incorporated later
# I believe how to stop it(How) is already in the data under howToStop


# Rename columns to match entity
df.rename({
    "Name of Contraceptive": "name",
    "Description of Contraceptive": "description",
    "Accessibility": "accessibility",
    "How to use it?": "use",
    "Tags (separate with commas)": "tags",
    "Care-free for": "usePatternLowBound",
    "Unit for previous question": "usePatternUnits",
    "Lasts up to": "usePatternHighBound",
    "What if I missed once in the routine or made any mistake?": "inCaseOfProblem",
    "% Effectiveness": "effectiveRate",
    "When it starts to work?": "whenItStartsToWork",
    "How Can I stop it?(When)": "howToStop",
    "How Can I stop it(How)": "howToStopMethod",
    'How Can I Stop it(How Long)':"howToStopDurationText",
    "Getting Back to Fertility ": "howLongUntilFertility",
    "Non-contraceptive benefits": "benefits",
    "Side effects": "sideEffects",
    "How it works?": "howItWorks",
    "Health Risk": "healthRisks",
    "Where to access": "whereToAccess",
    "Who will administer this method?": "whoAdministers",
    "Cost (lower bound in $)": "costMin",
    "Cost (upper bound in $)": "costMax",
    "This form of birth control may not be suitable if you": "whoCantUse",
    "Additional Cost Information": "costDescription",
    "Things to notice about this method": "thingsToKnow",
    "Warning":"warning",
}, axis=1, inplace=True)

def split_to_dict(string: str, key_label: str, sep: str=','):
  listed = string.split(sep)
  mapped = map(lambda s : {"id": None, key_label: s}, listed)
  return list(mapped)

def split_things_to_know(string: str):

  # Get the 'things'
  things = string.split("\n")

  def thing_to_dict(thing: str):
    # Separate the title and description
    separated = thing.split(":")
    if len(separated) != 2:
      raise Exception("Improperly formatted things to know")
    return {"id": None, "title": separated[0], "description": separated[1]}

  mapped = map(thing_to_dict, things)
  return list(mapped)

dict = df.to_dict("records")
for contraceptive in dict:
  # Formatting
  
  
  contraceptive["whereToAccess"] = contraceptive["whereToAccess"].split("\n")
  contraceptive["whenItStartsToWork"] = contraceptive["whenItStartsToWork"].split("\n")
  contraceptive["sideEffects"] = split_to_dict(contraceptive["sideEffects"], "description", sep="\n")
  contraceptive["benefits"] = split_to_dict(contraceptive["benefits"], "description", sep="\n")
  contraceptive["tags"] = split_to_dict(contraceptive["tags"], "label", sep=",")
  contraceptive["whoCantUse"] = contraceptive["whoCantUse"].split("\n")
  contraceptive["thingsToKnow"] = split_things_to_know(contraceptive["thingsToKnow"])

  # POST
  args = sys.argv
  database_url = "http://localhost:3001/contraceptive"
  r = requests.post(database_url, data=contraceptive)
  print(str(r.status_code) + ": " + contraceptive["name"])

