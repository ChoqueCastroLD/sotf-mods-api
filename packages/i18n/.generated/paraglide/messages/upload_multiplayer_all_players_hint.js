/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_All_Players_HintInputs */

const en_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every player in the session must install it.`)
};

const es_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los jugadores de la partida deben instalarlo.`)
};

const de_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Spieler der Sitzung muss ihn installieren.`)
};

const fr_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque joueur de la partie doit l’installer.`)
};

const it_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni giocatore della partita deve installarla.`)
};

const nl_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke speler in de sessie moet hem installeren.`)
};

const pl_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy gracz w sesji musi go zainstalować.`)
};

const pt_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os jogadores da partida precisam instalar.`)
};

const ru_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Его должен установить каждый игрок в сессии.`)
};

const sv_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje spelare i sessionen måste installera den.`)
};

const tr_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumdaki her oyuncu kurmalı.`)
};

const zh_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会话中的每位玩家都必须安装。`)
};

const ja_upload_multiplayer_all_players_hint = /** @type {(inputs: Upload_Multiplayer_All_Players_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションの全プレイヤーが導入する必要があります。`)
};

/**
* | output |
* | --- |
* | "Every player in the session must install it." |
*
* @param {Upload_Multiplayer_All_Players_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_all_players_hint = /** @type {((inputs?: Upload_Multiplayer_All_Players_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_All_Players_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_all_players_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_all_players_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_all_players_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_all_players_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_all_players_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_all_players_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_all_players_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_all_players_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_all_players_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_all_players_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_all_players_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_all_players_hint(inputs)
	return en_upload_multiplayer_all_players_hint(inputs)
});
