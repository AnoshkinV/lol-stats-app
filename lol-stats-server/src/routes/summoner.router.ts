import express, { Router } from "express";
import { getSummonerByRiotId, getSummonerData } from "../controllers/summoner.controller";

const router = Router();

router.get("/:region/summoner/:gameName/:tagLine", getSummonerByRiotId)
router.get("/:region/summoner-full/:gameName/:tagLine", getSummonerData)

export default router;