/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Clear_ConfirmInputs */

const en_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear history`)
};

const es_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar historial`)
};

const de_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlauf löschen`)
};

const fr_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer l’historique`)
};

const it_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella cronologia`)
};

const nl_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschiedenis wissen`)
};

const pl_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść historię`)
};

const pt_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar histórico`)
};

const ru_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить историю`)
};

const sv_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa historik`)
};

const tr_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçmişi temizle`)
};

const zh_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除记录`)
};

const ja_me_downloads_clear_confirm = /** @type {(inputs: Me_Downloads_Clear_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`履歴を消去`)
};

/**
* | output |
* | --- |
* | "Clear history" |
*
* @param {Me_Downloads_Clear_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_clear_confirm = /** @type {((inputs?: Me_Downloads_Clear_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Clear_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_clear_confirm(inputs)
	if (locale === "de") return de_me_downloads_clear_confirm(inputs)
	if (locale === "fr") return fr_me_downloads_clear_confirm(inputs)
	if (locale === "it") return it_me_downloads_clear_confirm(inputs)
	if (locale === "nl") return nl_me_downloads_clear_confirm(inputs)
	if (locale === "pl") return pl_me_downloads_clear_confirm(inputs)
	if (locale === "pt") return pt_me_downloads_clear_confirm(inputs)
	if (locale === "ru") return ru_me_downloads_clear_confirm(inputs)
	if (locale === "sv") return sv_me_downloads_clear_confirm(inputs)
	if (locale === "tr") return tr_me_downloads_clear_confirm(inputs)
	if (locale === "zh") return zh_me_downloads_clear_confirm(inputs)
	if (locale === "ja") return ja_me_downloads_clear_confirm(inputs)
	return en_me_downloads_clear_confirm(inputs)
});
