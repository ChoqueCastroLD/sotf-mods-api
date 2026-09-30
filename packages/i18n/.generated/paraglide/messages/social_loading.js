/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_LoadingInputs */

const en_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen…`)
};

const fr_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar…`)
};

const tr_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中…`)
};

const ja_social_loading = /** @type {(inputs: Social_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Social_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_loading = /** @type {((inputs?: Social_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_loading(inputs)
	if (locale === "de") return de_social_loading(inputs)
	if (locale === "fr") return fr_social_loading(inputs)
	if (locale === "it") return it_social_loading(inputs)
	if (locale === "nl") return nl_social_loading(inputs)
	if (locale === "pl") return pl_social_loading(inputs)
	if (locale === "pt") return pt_social_loading(inputs)
	if (locale === "ru") return ru_social_loading(inputs)
	if (locale === "sv") return sv_social_loading(inputs)
	if (locale === "tr") return tr_social_loading(inputs)
	if (locale === "zh") return zh_social_loading(inputs)
	if (locale === "ja") return ja_social_loading(inputs)
	return en_social_loading(inputs)
});
