/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Meta_TitleInputs */

const en_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF build (BuildShare blueprint)`)
};

const es_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — build de SOTF (plano de BuildShare)`)
};

const de_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF-Build (BuildShare-Bauplan)`)
};

const fr_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — build SOTF (plan BuildShare)`)
};

const it_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — build di SOTF (progetto BuildShare)`)
};

const nl_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF-build (BuildShare-bouwtekening)`)
};

const pl_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — build do SOTF (plan BuildShare)`)
};

const pt_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — build de SOTF (planta do BuildShare)`)
};

const ru_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — постройка SOTF (чертёж BuildShare)`)
};

const sv_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF-bygge (BuildShare-ritning)`)
};

const tr_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF yapısı (BuildShare planı)`)
};

const zh_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF 建筑（BuildShare 蓝图）`)
};

const ja_builds_meta_title = /** @type {(inputs: Builds_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — SOTF 建築（BuildShare 設計図）`)
};

/**
* | output |
* | --- |
* | "{name} — SOTF build (BuildShare blueprint)" |
*
* @param {Builds_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_meta_title = /** @type {((inputs: Builds_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_meta_title(inputs)
	if (locale === "de") return de_builds_meta_title(inputs)
	if (locale === "fr") return fr_builds_meta_title(inputs)
	if (locale === "it") return it_builds_meta_title(inputs)
	if (locale === "nl") return nl_builds_meta_title(inputs)
	if (locale === "pl") return pl_builds_meta_title(inputs)
	if (locale === "pt") return pt_builds_meta_title(inputs)
	if (locale === "ru") return ru_builds_meta_title(inputs)
	if (locale === "sv") return sv_builds_meta_title(inputs)
	if (locale === "tr") return tr_builds_meta_title(inputs)
	if (locale === "zh") return zh_builds_meta_title(inputs)
	if (locale === "ja") return ja_builds_meta_title(inputs)
	return en_builds_meta_title(inputs)
});
