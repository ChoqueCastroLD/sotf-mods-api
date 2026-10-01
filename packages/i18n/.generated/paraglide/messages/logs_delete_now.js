/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Delete_NowInputs */

const en_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete now`)
};

const es_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar ahora`)
};

const de_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetzt löschen`)
};

const fr_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer maintenant`)
};

const it_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina ora`)
};

const nl_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu verwijderen`)
};

const pl_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń teraz`)
};

const pt_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apagar agora`)
};

const ru_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить сейчас`)
};

const sv_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera nu`)
};

const tr_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi sil`)
};

const zh_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即删除`)
};

const ja_logs_delete_now = /** @type {(inputs: Logs_Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ削除`)
};

/**
* | output |
* | --- |
* | "Delete now" |
*
* @param {Logs_Delete_NowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_delete_now = /** @type {((inputs?: Logs_Delete_NowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Delete_NowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_delete_now(inputs)
	if (locale === "de") return de_logs_delete_now(inputs)
	if (locale === "fr") return fr_logs_delete_now(inputs)
	if (locale === "it") return it_logs_delete_now(inputs)
	if (locale === "nl") return nl_logs_delete_now(inputs)
	if (locale === "pl") return pl_logs_delete_now(inputs)
	if (locale === "pt") return pt_logs_delete_now(inputs)
	if (locale === "ru") return ru_logs_delete_now(inputs)
	if (locale === "sv") return sv_logs_delete_now(inputs)
	if (locale === "tr") return tr_logs_delete_now(inputs)
	if (locale === "zh") return zh_logs_delete_now(inputs)
	if (locale === "ja") return ja_logs_delete_now(inputs)
	return en_logs_delete_now(inputs)
});
