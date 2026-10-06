/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_No_Current_TextInputs */

const en_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark the latest game version as current.`)
};

const es_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca la última versión del juego como actual.`)
};

const de_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markiere die neueste Spielversion als aktuell.`)
};

const fr_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquez la dernière version du jeu comme actuelle.`)
};

const it_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna l’ultima versione del gioco come attuale.`)
};

const nl_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeer de nieuwste spelversie als huidig.`)
};

const pl_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz najnowszą wersję gry jako aktualną.`)
};

const pt_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marque a versão mais recente do jogo como atual.`)
};

const ru_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметьте последнюю версию игры как текущую.`)
};

const sv_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera den senaste spelversionen som aktuell.`)
};

const tr_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En son oyun sürümünü güncel olarak işaretle.`)
};

const zh_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请把最新的游戏版本标记为当前版本。`)
};

const ja_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新のゲームバージョンを現在のバージョンにしてください。`)
};

/**
* | output |
* | --- |
* | "Mark the latest game version as current." |
*
* @param {Admin_Builds_No_Current_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_no_current_text = /** @type {((inputs?: Admin_Builds_No_Current_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_No_Current_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_no_current_text(inputs)
	if (locale === "de") return de_admin_builds_no_current_text(inputs)
	if (locale === "fr") return fr_admin_builds_no_current_text(inputs)
	if (locale === "it") return it_admin_builds_no_current_text(inputs)
	if (locale === "nl") return nl_admin_builds_no_current_text(inputs)
	if (locale === "pl") return pl_admin_builds_no_current_text(inputs)
	if (locale === "pt") return pt_admin_builds_no_current_text(inputs)
	if (locale === "ru") return ru_admin_builds_no_current_text(inputs)
	if (locale === "sv") return sv_admin_builds_no_current_text(inputs)
	if (locale === "tr") return tr_admin_builds_no_current_text(inputs)
	if (locale === "zh") return zh_admin_builds_no_current_text(inputs)
	if (locale === "ja") return ja_admin_builds_no_current_text(inputs)
	return en_admin_builds_no_current_text(inputs)
});
