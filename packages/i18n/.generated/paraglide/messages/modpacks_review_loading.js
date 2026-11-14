/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_LoadingInputs */

const en_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen…`)
};

const fr_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in…`)
};

const tr_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中…`)
};

const ja_modpacks_review_loading = /** @type {(inputs: Modpacks_Review_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Modpacks_Review_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_loading = /** @type {((inputs?: Modpacks_Review_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_loading(inputs)
	if (locale === "de") return de_modpacks_review_loading(inputs)
	if (locale === "fr") return fr_modpacks_review_loading(inputs)
	if (locale === "it") return it_modpacks_review_loading(inputs)
	if (locale === "nl") return nl_modpacks_review_loading(inputs)
	if (locale === "pl") return pl_modpacks_review_loading(inputs)
	if (locale === "pt") return pt_modpacks_review_loading(inputs)
	if (locale === "ru") return ru_modpacks_review_loading(inputs)
	if (locale === "sv") return sv_modpacks_review_loading(inputs)
	if (locale === "tr") return tr_modpacks_review_loading(inputs)
	if (locale === "zh") return zh_modpacks_review_loading(inputs)
	if (locale === "ja") return ja_modpacks_review_loading(inputs)
	return en_modpacks_review_loading(inputs)
});
