/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_LoadingInputs */

const en_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading log…`)
};

const es_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando el log…`)
};

const de_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log wird geladen…`)
};

const fr_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement du log…`)
};

const it_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento del log…`)
};

const nl_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log laden…`)
};

const pl_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie logu…`)
};

const pt_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A carregar o log…`)
};

const ru_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка лога…`)
};

const sv_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar loggen…`)
};

const tr_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log yükleniyor…`)
};

const zh_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载日志…`)
};

const ja_logs_loading = /** @type {(inputs: Logs_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading log…" |
*
* @param {Logs_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_loading = /** @type {((inputs?: Logs_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_loading(inputs)
	if (locale === "de") return de_logs_loading(inputs)
	if (locale === "fr") return fr_logs_loading(inputs)
	if (locale === "it") return it_logs_loading(inputs)
	if (locale === "nl") return nl_logs_loading(inputs)
	if (locale === "pl") return pl_logs_loading(inputs)
	if (locale === "pt") return pt_logs_loading(inputs)
	if (locale === "ru") return ru_logs_loading(inputs)
	if (locale === "sv") return sv_logs_loading(inputs)
	if (locale === "tr") return tr_logs_loading(inputs)
	if (locale === "zh") return zh_logs_loading(inputs)
	if (locale === "ja") return ja_logs_loading(inputs)
	return en_logs_loading(inputs)
});
