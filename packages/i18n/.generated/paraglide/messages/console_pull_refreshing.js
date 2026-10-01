/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Pull_RefreshingInputs */

const en_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refreshing…`)
};

const es_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizando…`)
};

const de_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird aktualisiert …`)
};

const fr_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualisation…`)
};

const it_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento…`)
};

const nl_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vernieuwen…`)
};

const pl_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odświeżanie…`)
};

const pt_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A atualizar…`)
};

const ru_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновление…`)
};

const sv_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterar …`)
};

const tr_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenileniyor…`)
};

const zh_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在刷新…`)
};

const ja_console_pull_refreshing = /** @type {(inputs: Console_Pull_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新中…`)
};

/**
* | output |
* | --- |
* | "Refreshing…" |
*
* @param {Console_Pull_RefreshingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_pull_refreshing = /** @type {((inputs?: Console_Pull_RefreshingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pull_RefreshingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_pull_refreshing(inputs)
	if (locale === "de") return de_console_pull_refreshing(inputs)
	if (locale === "fr") return fr_console_pull_refreshing(inputs)
	if (locale === "it") return it_console_pull_refreshing(inputs)
	if (locale === "nl") return nl_console_pull_refreshing(inputs)
	if (locale === "pl") return pl_console_pull_refreshing(inputs)
	if (locale === "pt") return pt_console_pull_refreshing(inputs)
	if (locale === "ru") return ru_console_pull_refreshing(inputs)
	if (locale === "sv") return sv_console_pull_refreshing(inputs)
	if (locale === "tr") return tr_console_pull_refreshing(inputs)
	if (locale === "zh") return zh_console_pull_refreshing(inputs)
	if (locale === "ja") return ja_console_pull_refreshing(inputs)
	return en_console_pull_refreshing(inputs)
});
