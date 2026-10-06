/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Empty_TextInputs */

const en_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register the game version players are on today.`)
};

const es_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra la versión del juego que usan hoy los jugadores.`)
};

const de_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registriere die Spielversion, die die Spieler heute nutzen.`)
};

const fr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez la version du jeu que les joueurs utilisent aujourd’hui.`)
};

const it_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra la versione del gioco che i giocatori usano oggi.`)
};

const nl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreer de spelversie die spelers vandaag gebruiken.`)
};

const pl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj wersję gry, na której gracze grają dziś.`)
};

const pt_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registre a versão do jogo que os jogadores usam hoje.`)
};

const ru_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте версию игры, на которой сейчас играют.`)
};

const sv_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera den spelversion som spelarna kör i dag.`)
};

const tr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların bugün kullandığı oyun sürümünü kaydet.`)
};

const zh_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请登记玩家今天所用的游戏版本。`)
};

const ja_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが今遊んでいるゲームバージョンを登録してください。`)
};

/**
* | output |
* | --- |
* | "Register the game version players are on today." |
*
* @param {Admin_Builds_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_empty_text = /** @type {((inputs?: Admin_Builds_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_empty_text(inputs)
	if (locale === "de") return de_admin_builds_empty_text(inputs)
	if (locale === "fr") return fr_admin_builds_empty_text(inputs)
	if (locale === "it") return it_admin_builds_empty_text(inputs)
	if (locale === "nl") return nl_admin_builds_empty_text(inputs)
	if (locale === "pl") return pl_admin_builds_empty_text(inputs)
	if (locale === "pt") return pt_admin_builds_empty_text(inputs)
	if (locale === "ru") return ru_admin_builds_empty_text(inputs)
	if (locale === "sv") return sv_admin_builds_empty_text(inputs)
	if (locale === "tr") return tr_admin_builds_empty_text(inputs)
	if (locale === "zh") return zh_admin_builds_empty_text(inputs)
	if (locale === "ja") return ja_admin_builds_empty_text(inputs)
	return en_admin_builds_empty_text(inputs)
});
