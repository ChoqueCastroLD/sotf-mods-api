/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_LoadingInputs */

const en_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen …`)
};

const fr_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in …`)
};

const tr_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中…`)
};

const ja_ranger_loading = /** @type {(inputs: Ranger_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Ranger_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_loading = /** @type {((inputs?: Ranger_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_loading(inputs)
	if (locale === "de") return de_ranger_loading(inputs)
	if (locale === "fr") return fr_ranger_loading(inputs)
	if (locale === "it") return it_ranger_loading(inputs)
	if (locale === "nl") return nl_ranger_loading(inputs)
	if (locale === "pl") return pl_ranger_loading(inputs)
	if (locale === "pt") return pt_ranger_loading(inputs)
	if (locale === "ru") return ru_ranger_loading(inputs)
	if (locale === "sv") return sv_ranger_loading(inputs)
	if (locale === "tr") return tr_ranger_loading(inputs)
	if (locale === "zh") return zh_ranger_loading(inputs)
	if (locale === "ja") return ja_ranger_loading(inputs)
	return en_ranger_loading(inputs)
});
