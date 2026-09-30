/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Safe_Remove_Unknown_HintInputs */

const en_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players will be told to back up first.`)
};

const es_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se avisará a los jugadores de que hagan una copia antes.`)
};

const de_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler werden gebeten, vorher ein Backup zu machen.`)
};

const fr_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On conseillera aux joueurs de faire une copie avant.`)
};

const it_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ai giocatori verrà consigliato di fare prima un backup.`)
};

const nl_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers wordt aangeraden eerst een back-up te maken.`)
};

const pl_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze dostaną radę, by najpierw zrobić kopię zapasową.`)
};

const pt_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os jogadores serão avisados para fazer backup antes.`)
};

const ru_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игрокам посоветуют сначала сделать резервную копию.`)
};

const sv_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelarna uppmanas att göra en säkerhetskopia först.`)
};

const tr_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunculara önce yedek almaları söylenecek.`)
};

const zh_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会提醒玩家先备份。`)
};

const ja_upload_safe_remove_unknown_hint = /** @type {(inputs: Upload_Safe_Remove_Unknown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーには事前のバックアップを勧めます。`)
};

/**
* | output |
* | --- |
* | "Players will be told to back up first." |
*
* @param {Upload_Safe_Remove_Unknown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_safe_remove_unknown_hint = /** @type {((inputs?: Upload_Safe_Remove_Unknown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Safe_Remove_Unknown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_safe_remove_unknown_hint(inputs)
	if (locale === "de") return de_upload_safe_remove_unknown_hint(inputs)
	if (locale === "fr") return fr_upload_safe_remove_unknown_hint(inputs)
	if (locale === "it") return it_upload_safe_remove_unknown_hint(inputs)
	if (locale === "nl") return nl_upload_safe_remove_unknown_hint(inputs)
	if (locale === "pl") return pl_upload_safe_remove_unknown_hint(inputs)
	if (locale === "pt") return pt_upload_safe_remove_unknown_hint(inputs)
	if (locale === "ru") return ru_upload_safe_remove_unknown_hint(inputs)
	if (locale === "sv") return sv_upload_safe_remove_unknown_hint(inputs)
	if (locale === "tr") return tr_upload_safe_remove_unknown_hint(inputs)
	if (locale === "zh") return zh_upload_safe_remove_unknown_hint(inputs)
	if (locale === "ja") return ja_upload_safe_remove_unknown_hint(inputs)
	return en_upload_safe_remove_unknown_hint(inputs)
});
